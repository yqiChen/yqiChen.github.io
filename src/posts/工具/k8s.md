---
title: Kubernetes
date: 2024-06-30 16:24:22
tags: code
category: 工具
---

# Kubernetes

## 一、k8s 核心概念

### 1、 容器

​	容器是一种轻量级、可移植的虚拟化技术，用于打包和运行应用程序。容器可以共享主机操作系统的内核，从而提高部署效率和资源利用率。常见的容器技术包括 Docker、Kubernetes Pod、LXC 等。

### 2、 Namespace

Namespace 是 k8s 中的资源隔离单元，用于对 k8s 对象进行命名空间隔离。通过创建 Namespace，可以对同一集群中的不同应用程序进行资源隔离、权限控制和配置管理。

### 3、 rootfs

rootfs 是 k8s 中的容器根文件系统，用于存储容器的文件系统和应用程序。rootfs 是读写可变的，可以实现容器的持久化存储和数据共享。



<!-- more -->
