---
title: Markdown
date: 2024-06-29 16:24:22
tags: code
category: 工具
star: true
sticky: true
---

# Markdown

<!-- more -->

## 一、markdown速查

::: tip 背景
Markdown 是一种轻量级标记语言，创始人为约翰·格鲁伯（John Gruber）和亚伦·斯沃茨（Aaron Swartz）。它允许人们 “ 使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML（或者HTML）文档 ”

[Markdown 教程](https://markdown.com.cn/)  

[Markdown 示例](https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html)  

[Markdown 增强](https://theme-hope.vuejs.press/zh/guide/markdown/intro.html)  
:::

### 1、基本语法

这些是 John Gruber 的原始设计文档中列出的元素。所有 Markdown 应用程序都支持这些元素

| 元素                       | Markdown 语法                                          |
| :------------------------- | :----------------------------------------------------- |
| 标题（Heading）            | # H1 <br> ## H2 <br> ### H3                            |
| 粗体（Bold）               | \*\*bold text\*\*                                      |
| 斜体（Italic）             | \*italicized text\*                                    |
| 引用块（Blockquote）       | > blockquote                                           |
| 有序列表（Ordered List）   | 1. First item <br>   2. Second item <br> 3. Third item |
| 无序列表（Unordered List） | - First item <br> - Second item  <br> - Third item     |
| 代码（Code）               | \`code\`                                               |
| 分隔线（Horizontal Rule）  | ---                                                    |
| 链接（Link）               | \[title\]\(https://www.example.com\)                   |
| 图片（Image）              | \!\[alt text\]\(image.jpg\)                            |

### 2、扩展语法

这些元素通过添加额外的功能扩展了基本语法。但是，并非所有 Markdown 应用程序都支持这些元素

| 元素                        | Markdown 语法                                                |
| :-------------------------- | :----------------------------------------------------------- |
| 表格（Table）               | \| Syntax \| Description \| <br> \| &nbsp;----------- &nbsp;\| &nbsp;-----------&nbsp; \| <br> \| Header      \| Title       \| <br> \| Paragraph   \| Text        \| |
| 代码块（Fenced Code Block） | \`\`\`<br>   &nbsp;{<br> &nbsp;&nbsp; "firstName": "John",<br> &nbsp;&nbsp;  "lastName": "Smith",  <br> &nbsp;&nbsp; "age": 25 &nbsp; <br>} <br>\`\`\` |
| 脚注（Footnote）            | Here's a sentence with a footnote. [^1] <br>[^1]: This is the footnote. |
| 标题编号（Heading ID）      | ### My Great Heading \{#custom-id}                           |
| 定义列表（Definition List） | term  : definition                                           |
| 删除线（Strikethrough）     | \~\~The world is flat.\~\~                                   |
| 任务列表（Task List）       | - [x] Write the press release <br>- [&nbsp;] Update the website <br> - [&nbsp;] Contact the media |

## 二、Markdown方言

## 1 、提示信息

::: important important

:::

::: info info

:::

::: note note
:::

::: tip tip
:::

::: warning warning
:::

::: caution caution
:::

::: details details
:::

::: tabs

@tab apple

Apple [选项卡](https://theme-hope.vuejs.press/zh/guide/markdown/content/tabs.html)

@tab banana

Banana

@tab orange

Orange

:::

## 2、 [Emoji表情](https://www.webfx.com/tools/emoji-cheat-sheet/)

```md
经典: :wink: :cry: :laughing: :yum:

简写: 8-) :) :* :( :-) :-( ;)s
```

**效果**：

:wink: :cry: :laughing: :yum:  
8-) :) :* :( :-) :-( ;)

## 3、 字体颜色

### 3.1 [徽章](https://plugin-components.vuejs.press/zh/guide/utilities/badge.html)<span class="vp-badge danger">重要</span>

<span class="vp-badge info">class="vp-badge info"</span>  
<span class="vp-badge danger">class="vp-badge danger"</span>  
<span class="vp-badge note">class="vp-badge note"</span>  
<span class="vp-badge tip">class="vp-badge tip"</span>  
<span class="vp-badge warning">class="vp-badge warning"</span>

top<Badge text="构建中" type="warning" vertical = "top"/> middle<Badge text="新" type="tip"  vertical = "middle"/> baseline<Badge text="MrHope" type="info" vertical = "baseline"/> bottom<Badge text="MrHope" color="grey" vertical = "bottom"/>

```md
<span class="vp-badge info">支持页面配置</span>

<Badge text="构建中" type="warning" vertical = "top"/> 
<Badge text="新" type="tip"  vertical = "middle"/> 
<Badge text="MrHope" type="info" vertical = "baseline"/>
<Badge text="MrHope" color="grey" vertical = "bottom"/>
```

### 3.2 更改字体、大小、颜色

```html
<font face="黑体">我是黑体字</font>
<font face="微软雅黑">我是微软雅黑</font>
<font face="STCAIYUN">我是华文彩云</font>
<font color=red>我是红色</font>
<font color=#008000>我是绿色</font>
<font color=Blue>我是蓝色</font>
<font size=5>我是尺寸</font>
<font face="黑体" color=green size=5>我是黑体，绿色，尺寸为5</font>
```

效果

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230719202045.png)

## 三、[Component](https://theme-hope.vuejs.press/zh/guide/component/grammar.html)

 Markdown 中通过 component 代码块快速添加组件。

**配置**

```
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        components: true,
      },
    },
  }),
};
```

**使用**

<VPCard
  title="Mr.Hope"
  desc="Where there is light, there is hope"
  logo="https://mister-hope.com/logo.svg"
  link="https://mister-hope.com"
  background="rgba(253, 230, 138, 0.15)"
/>

这里的 `<VPCard>` 是已经全局注册的卡片组件。

上方的代码块和下方等价:

```
<VPCard
  title="Mr.Hope"
  desc="Where there is light, there is hope"
  logo="https://mister-hope.com/logo.svg"
  link="https://mister-hope.com"
  background="rgba(253, 230, 138, 0.15)"
/>
```
