---
title: ELK
date: 2024-06-30
tags: ElasticSearch
category: ElasticSearch
order: 1
icon: "/img/Elastic.svg"
---

<!--more--->

# ELK

## 一、介绍

elasticsearch是一款非常强大的开源搜索引擎，支持的功能非常多，例如：代码搜索、商品搜索、解决方案搜索、地图搜索

<!-- more -->

Elasticsearch的官方网站如下：

<VPCard
  title="ElasticSearch"
  desc="ElasticSearch官网"
  logo="/img/es.svg"
  link="https://www.elastic.co/cn/elasticsearch"
  background="rgba(253, 230, 138, 0.15)"
/>

Elasticsearch是由elastic公司开发的一套搜索引擎技术，它是elastic技术栈中的一部分。完整的技术栈包括：

- Elasticsearch：用于数据存储、计算和搜索
- Logstash/Beats：用于数据收集
- Kibana：用于数据可视化

整套技术栈被称为ELK，经常用来做日志收集、系统监控和状态分析等等：

![](/image/es/es1.png)

整套技术栈的核心就是用来**存储**、**搜索**、**计算**的Elasticsearch。

