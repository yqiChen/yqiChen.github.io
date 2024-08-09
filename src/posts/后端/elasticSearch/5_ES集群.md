---
title: ES集群
date: 2024-07-05 15:40:00
tags: ElasticSearch
category: ElasticSearch
order: 5
icon: "/img/es.svg"
---

# ES集群

## 一、介绍

单机的elasticsearch做数据存储，必然面临两个问题：海量数据存储问题、单点故障问题。

- 海量数据存储问题：将索引库从逻辑上拆分为N个分片（shard），存储到多个节点
- 单点故障问题：将分片数据在不同节点备份（replica ）

::: tip ES集群相关概念:

* 集群（cluster）：一组拥有共同的 cluster name 的 节点。

* <font color="red">节点（node)</font>   ：集群中的一个 Elasticearch 实例

* <font color="red">分片（shard）</font>：索引可以被拆分为不同的部分进行存储，称为分片。在集群环境下，一个索引的不同分片可以拆分到不同的节点中

  解决问题：数据量太大，单点存储量有限的问题。

  :::

  <!-- more -->

  <center><img src="/image\es\es20.png" style="zoom:50%;" /></center>

  > 此处，我们把数据分成3片：shard0、shard1、shard2

* 主分片（Primary shard）：相对于副本分片的定义。

* 副本分片（Replica shard）每个主分片可以有一个或者多个副本，数据和主分片一样。

  ​	

数据备份可以保证高可用，但是每个分片备份一份，所需要的节点数量就会翻一倍，成本实在是太高了！

为了在高可用和成本间寻求平衡，我们可以这样做：

- 首先对数据分片，存储到不同节点
- 然后对每个分片进行备份，放到对方节点，完成互相备份

这样可以大大减少所需要的服务节点数量，如图，我们以3分片，每个分片备份一份为例：

<center><img src="/image\es\es21.png" style="zoom:50%;" /></center>

现在，每个分片都有1个备份，存储在3个节点：

- node0：保存了分片0和1
- node1：保存了分片0和2
- node2：保存了分片1和2





## 二、搭建ES集群

我们会在单机上利用docker容器运行多个es实例来模拟es集群。不过生产环境推荐大家每一台服务节点仅部署一个es的实例。部署es集群可以直接使用docker-compose来完成，但这要求你的Linux虚拟机至少有**4G**的内存空间

### 1、创建es集群

首先编写一个docker-compose文件，内容如下：

```sh
version: '2.2'
services:
  es01:
    image: elasticsearch:7.12.1
    container_name: es01
    environment:
      - node.name=es01
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=es02,es03
      - cluster.initial_master_nodes=es01,es02,es03
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    volumes:
      - data01:/usr/share/elasticsearch/data
    ports:
      - 9200:9200
    networks:
      - elastic
  es02:
    image: elasticsearch:7.12.1
    container_name: es02
    environment:
      - node.name=es02
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=es01,es03
      - cluster.initial_master_nodes=es01,es02,es03
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    volumes:
      - data02:/usr/share/elasticsearch/data
    ports:
      - 9201:9200
    networks:
      - elastic
  es03:
    image: elasticsearch:7.12.1
    container_name: es03
    environment:
      - node.name=es03
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=es01,es02
      - cluster.initial_master_nodes=es01,es02,es03
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    volumes:
      - data03:/usr/share/elasticsearch/data
    networks:
      - elastic
    ports:
      - 9202:9200
volumes:
  data01:
    driver: local
  data02:
    driver: local
  data03:
    driver: local

networks:
  elastic:
    driver: bridge
```

es运行需要修改一些linux系统权限，修改`/etc/sysctl.conf`文件

```sh
vi /etc/sysctl.conf
```

添加下面的内容：

```sh
vm.max_map_count=262144
```

然后执行命令，让配置生效：

```sh
sysctl -p
```

通过docker-compose启动集群：

```sh
docker-compose up -d
```

### 2、集群状态监控

kibana可以监控es集群，不过新版本需要依赖es的x-pack 功能，配置比较复杂。

这里推荐使用cerebro来监控es集群状态，[官方网址](https://github.com/lmenezes/cerebro)

下载之后进入bin目录打开 `cerebro.bat`即可启动，之后通过访问[http://localhost:9000](http://localhost:9000 ) 即可进入管理界面，输入你的elasticsearch的任意节点的地址和端口，点击connect即可

![](/image\es\es22.png)

绿色的条，代表集群处于绿色（健康状态）。

### 3、创建索引库

#### 1）利用kibana的DevTools创建索引库

在DevTools中输入指令：

```json
PUT /itcast
{
  "settings": {
    "number_of_shards": 3, // 分片数量
    "number_of_replicas": 1 // 副本数量
  },
  "mappings": {
    "properties": {
      // mapping映射定义 ...
    }
  }
}
```

#### 2）利用cerebro创建索引库

利用cerebro还可以创建索引库：

![](/image\es\es23.png)

填写索引库信息：

![](/image\es\es24.png)

点击右下角的create按钮。



## 三、集群脑裂问题

### 1、集群职责划分

elasticsearch中集群节点有不同的职责划分：

![](/image\es\es25.png)

默认情况下，集群中的任何一个节点都同时具备上述四种角色。

::: warning 但是真实的集群一定要将集群职责分离：

- master节点：对CPU要求高，但是内存要求第
- data节点：对CPU和内存要求都高
- coordinating节点：对网络带宽、CPU要求高

:::

职责分离可以让我们根据不同节点的需求分配不同的硬件去部署。而且避免业务之间的互相干扰。

一个典型的es集群职责划分如图：

<center><img src="/image\es\es26.png" style="zoom:50%;" /></center>



### 4.2.2.脑裂问题

脑裂是因为集群中的节点失联导致的。

例如一个集群中，主节点与其它节点失联：

<center><img src="/image\es\es27.png" style="zoom:50%;" /></center>

此时，node2和node3认为node1宕机，就会重新选主,当node3当选后，集群继续对外提供服务，node2和node3自成集群，node1自成集群，两个集群数据不同步，出现数据差异。当网络恢复后，因为集群中有两个master节点，集群状态的不一致，出现脑裂的情况：

::: tip

解决脑裂的方案是，要求选票超过 ( eligible节点数量 + 1 ）/ 2 才能当选为主，因此eligible节点数量最好是奇数。对应配置项是`discovery.zen.minimum_master_nodes`，在es7.0以后，已经成为默认配置，因此一般不会发生脑裂问题

:::



## 四、集群分布式存储

当新增文档时，应该保存到不同分片，保证数据均衡，那么coordinating node如何确定数据该存储到哪个分片呢？

### 1、分片存储原理

elasticsearch会通过hash算法来计算文档应该存储到哪个分片：

![](/image\es\es28.png)

::: important 说明：

- _routing默认是文档的id
- 算法与分片数量有关，因此索引库一旦创建，分片数量不能修改！

:::

新增文档的流程如下：

<center><img src="/image\es\es29.png"  style="zoom: 67%;" /></center>

::: info 解读：

- 1）新增一个`id=1`的文档
- 2）对id做hash运算，假如得到的是2，则应该存储到shard-2
- 3）`shard-2`的主分片在node3节点，将数据路由到node3
- 4）保存文档
- 5）同步给`shard-2`的副本`replica-2`，在node2节点
- 6）返回结果给`coordinating-node`节点

:::

### 2、集群分布式查询

::: important elasticsearch的查询分成两个阶段：

- `scatter phase`：分散阶段，`coordinating node`会把请求分发到每一个分片

- `gather phase`：聚集阶段，`coordinating node`汇总`data node`的搜索结果，并处理为最终结果集返回给用户

:::

<center><img src="/image\es\es30.png"  style="zoom:67%;" /></center>

### 3、集群故障转移

集群的master节点会监控集群中的节点状态，如果发现有节点宕机，会立即将宕机节点的分片数据迁移到其它节点，确保数据安全，这个叫做故障转移。

1）例如一个集群结构如图：

![](/image\es\es31.png)

现在，node1是主节点，其它两个节点是从节点。

2）突然，node1发生了故障：宕机后的第一件事，需要重新选主，例如选中了node2：

![](/image\es\es32.png)

node2成为主节点后，会检测集群监控状态，发现：shard-1、shard-0没有副本节点。因此需要将node1上的数据迁移到node2、node3：

![](/image\es\es33.png)

