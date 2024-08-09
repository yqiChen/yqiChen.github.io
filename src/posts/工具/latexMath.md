---
title: Latex公式
date: 2024-06-29 16:12:22
tags: code
category: 工具
star: true
sticky: true
---

# Latex公式

<VPCard
  title="Markdown"
  desc="中文官方文档"
  logo="/img/markdown.svg"
  link="https://www.latexlive.com/help"
  background="rgba(253, 230, 138, 0.15)"
/>

<VPCard
  title="Markdown"
  desc="英文官方文档"
  logo="/img/markdown.svg"
  link="https://ctex.org/documents/packages/math/index.htm"
  background="rgba(253, 230, 138, 0.15)"
/>

<!-- more -->

### 1、公式插入

Latex的数学公式有两种：行中公式和独立公式（行间公式）。行中公式放在文中与其它文字混编，独立公式单独成行。

行中公式可以用如下方法表示：

```
$ 数学公式 $
```

独立公式可以用如下方法表示：

```
$$ 数学公式 $$
```

::: tip 注意事项

- 使用$，即行中公式时，数学公式与$连接处不要有空格，否则公式不会显示。即$ 数学公式 $ 不显示公式。
- 使用$$，即居中公式时，数学公式与$$连接处可以有空格。
- 使用$$时，上方要空一行。
- =不要单独打一行，否则可能会出错。
- `+ - * / = ( ) | , . '`等符号直接在$或$$之间输入即可识别。

:::

### 2、编号

包含自动编号和手动编号两种方式。

#### 1）手动编号

在公式末尾使用`\tag{编号}`来实现公式手动编号，大括号内的内容可以自定义。

例子：

```
$$
x+y=z
\tag{1}
$$
```

显示：


$$
x+y=z
\tag{1}
$$

#### 2）自动编号

使用`\begin{equation}`和`\end{equation}`进行公式输入，要同时使用，且编号不能够修改。

例子：

```
\begin{equation}
a^2+b^2=c^2
\end{equation}
```

显示：
$$
\begin{equation}
a^2+b^2=c^2
\end{equation}
$$

### 3、转义字符

在公式中输入`_`或`^`等符号时，会产生上下标功能，若想输入符号本身则需要转义字符`\`，写法为`\+字符`，示例如下：

例子：

```
$$
% \ 为转义字符
home\_name=honor
$$
```

显示：
$$
% \ 为转义字符
home\_name=honor
$$

### 4、换行与对齐

#### 1）换行

使用`\\`进行换行，最后一行的`\\`可写可不写。

例子：

```
$$
f(x)=2x+1 \\
=2+1 \\
=3
$$
```

显示：
$$
f(x)=2x+1 \\
=2+1 \\
=3
$$

#### 2）对齐

使用`\begin{aligned}`进行对齐，`&`表示对齐位置，一般都在`=`前面。

例子：

```
\begin{aligned}
f(x)&=2x+1 \\
&=2+1 \\
&=3
\end{aligned}
```

显示：
$$
\begin{aligned}
f(x)&=2x+1 \\
&=2+1 \\
&=3
\end{aligned}
$$

### 5、字体

若要对公式的某一部分字符进行字体转换，可以用` \字体{需转换的字符} `命令，其中` \字体 `部分可以参照下表选择合适的字体。一般情况下，公式默认为意大利体，直体为罗马体` \rm`。一般里面一层大括号可省略。

::: warning 注意：

在LaTeX编辑器中，修改公式字体时，需要引入宏包`\usepackage{amsmath}`和`\usepackage{amsfonts}`，且在公式中输入。

:::

| 输入           | 说明                   | 显示             |
| -------------- | ---------------------- | ---------------- |
| \mathit 或 \it | 斜体（默认，意大利体） | $\it{D}$         |
| \mathrm 或 \rm | 罗马体                 | $\rm{D}$         |
| \mathbf 或 \bf | 粗体                   | $\bf{D}$         |
| \mathbb        | 黑板粗体               | $\mathbb{D}$     |
| \mathsf 或 \sf | 等线体                 | $\sf{D}$         |
| \mathcal       | 花体                   | $\mathcal{D}$    |
| \mathscr       | 手写体                 | $\mathscr{D}$    |
| \mathtt        | 打字机体               | $\mathtt{D}$     |
| \mathfrak      | 哥特体                 | $\mathfrak{D}$   |
| \boldsymbol    | 黑体                   | $\boldsymbol{D}$ |


例子：

```
$$A+\mathbb{BC}+D$$
```

显示：

$$
A+\mathbb{BC}+\mathcal{D}
$$

### 6、空格

`\quad`：空一格

`\qquad`：空两格

例子：

```
$$x \quad y \qquad z$$
```

显示
$$
x \quad y \qquad z
$$

### 7、上下标

`^`表示上标，` _` 表示下标。如果上下标的内容多于一个字符，需要用` {}`将这些内容括成一个整体。上下标可以嵌套，也可以同时使用。

上下标同时使用例子：

```
$$f(x) = x_1^2 + {x}_{2}^{2}$$
```

显示：
$$
f(x) = x_1^2 + {x}_{2}^{2}
$$

### 8、绝对值与范数

#### 1）绝对值

`|`、`\vert`、`\mid`可以表示绝对值。由以下示例可以看出，使用`|`或`\vert`效果相同，使用`\mid`在字母与符号之间的间隔较大，不美观，因此推荐使用`|`或`\vert`。

示例：

```
$|x|$
$\vert x \vert$
$\mid x \mid$
```

显示：

$|x|$

$\vert x \vert$

$\mid x \mid$

#### 2）**范数**

使用方法与绝对值相同，只是连续输入2个绝对值符号而已，示例如下。

示例：

```
$$L_p=||x||_p$$
或
$$L_p=\vert\vert x \vert\vert_p$$
```

显示：

$$L_p=||x||_p$$

### 9、括号

()、[]、|表示符号本身，使用 \{\} 来表示 {}。当要显示大号的括号或分隔符时，要用 \left 和 \right 命令，如$\left(表达式\right)$，大号的括号详见下一节）。

一些特殊的括号：

| 特殊括号 | 输入                 | 显示                   |
| -------- | -------------------- | ---------------------- |
| 尖括号   | \langle表达式\rangle | $\langle表达式\rangle$ |
| 向上取整 | \lceil表达式\rceil   | $\lceil表达式\rceil$   |
| 向下取整 | \lfloor表达式\rfloor | $\lfloor表达式\rfloor$ |
| 大括号   | \lbrace表达式\rbrace | $\lbrace表达式\rbrace$ |

例子：

```
$$f(x,y,z) = 3y^2z \left( 3+\frac{7x+5}{1+y^2} \right)$$
```

显示：
$$f(x,y,z) = 3y^2z \left( 3+\frac{7x+5}{1+y^2} \right)$$

#### 1、**大括号**

**方法1**

使用 `\left`和 `\right`来创建自动匹配高度的括号，包含 (圆括号)、[方括号]、|绝对值|

```
$$
f\left(
   \left[
     \frac{
       1+\left\{x,y\right\}
     }{
       \left(
          \frac{x}{y}+\frac{y}{x}
       \right)
       \left(u+1\right)
     }+a
   \right]^{3/2}
\right)
$$
```

$$
f\left(
   \left[
     \frac{
       1+\left\{x,y\right\}
     }{
       \left(
          \frac{x}{y}+\frac{y}{x}
       \right)
       \left(u+1\right)
     }+a
   \right]^{3/2}
\right)
$$

有时候要用`\left.`或`\right.`进行匹配而不显示本身。

例子：

```
$$\left. \frac{ {\rm d}u}{ {\rm d}x} \right| _{x=0}$$
```

$$\left. \frac{ {\rm d}u}{ {\rm d}x} \right| _{x=0}$$

**方法2**
使用\big和\bigg来创建逐级变大的括号，包含 (圆括号)、[方括号]、|绝对值|。

例子：

```
$$\bigg( \big( ( ) \big) \bigg)$$
$$\bigg[ \big[ [ ] \big] \bigg]$$
$$\bigg| \big| | | \big| \bigg|$$
```

显示：
$$\bigg( \big( ( ) \big) \bigg)$$
$$\bigg[ \big[ [ ] \big] \bigg]$$
$$\bigg| \big| | | \big| \bigg|$$

### 10、分式

通常使用` \frac {分子} {分母} `命令产生一个分式，分式可嵌套。

便捷情况可直接输入` \frac ab`来快速生成一个$\frac ab$

如果分式很复杂，亦可使用 分子 \over 分母 命令，此时分式仅有一层。

例子：

```
$$\frac{a-1}{b-1} \quad and \quad {a+1\over b+1}$$
```

显示：
$$\frac{a-1}{b-1} \quad and \quad {a+1\over b+1}$$

### 11、根式

```
\sqrt [根指数] {被开方数}
```

注意：缺省根指数时为2

例子：

```
$$\sqrt{2} \quad and \quad \sqrt[n]{x+y}$$
```

显示：

$$\sqrt{2} \quad and \quad \sqrt[n]{x+y}$$

### 12、对数

`\log_{对数底数}{表达式}` 表达式的大括号可省略

```
\log_{x+y}{(z+1)}
```

显示：
$$
\log_{x+y}{(z+1)}
$$

### 13、省略号

数学公式中常见的省略号有四种种，

- `\ldots` 表示与文本底线对齐的横向省略号 $\ldots$

- `\cdots` 表示与文本中线对齐的横向省略号$\cdots$

- `\vdots`表示纵向省略号 $\vdots$

- `\ddots`表示斜向省略号 $\ddots$

例子：

```
$$f(x_1,x_2,\underbrace{\ldots}_{\rm ldots} ,x_n) = x_1^2 + x_2^2 + \underbrace{\cdots}_{\rm cdots} + x_n^2$$
```

显示：

$$f(x_1,x_2,\underbrace{\ldots}_{\rm ldots} ,x_n) = x_1^2 + x_2^2 + \underbrace{\cdots}_{\rm cdots} + x_n^2$$

### 14、最值

`\max_{下标表达式}{最值表达式}`表示最大值，`\min_{下标表达式}{最值表达式}`表达最小值。

例子：

```
$$||x||_\infty=\max_{1\leq i\leq n}{|x_i|}$$
```

显示：
$$||x||_\infty=\max_{1\leq i\leq n}{|x_i|}$$

### 15、方程组和分段函数

#### 1）方程组

方程组有2种方式，分别是`\begin{aligned}`和`\begin{cases}`方式，&表示对齐位置，推荐使用`\begin{cases}`方式，使用方法如下：

**`\begin{aligned}`方式：**
需配合\left\{使用，可以使方程组根据=对齐。

不对齐

```
$$
\left\{
\begin{aligned}
&a+b+c=2 \\
&a-b=4 \\
\end{aligned}
\right.
$$
```

显示：
$$
\left\{
\begin{aligned}
&a+b+c=2 \\
&a-b=4 \\
\end{aligned}
\right.
$$
根据=对齐：

```
$$
\left\{
\begin{aligned}
a+b+c&=2 \\
a-b&=4 \\
\end{aligned}
\right.
$$
```

显示：
$$
\left\{
\begin{aligned}
a+b+c&=2 \\
a-b&=4 \\
\end{aligned}
\right.
$$
**`\begin{cases}`方式：**
简便，但对齐格式与`\begin{aligned}`不同。

不对齐

```
$$
\begin{cases}
a+b+c=2 \\
a-b=4 \\
\end{cases}
$$
```

显示：
$$
\begin{cases}
a+b+c=2 \\
a-b=4 \\
\end{cases}
$$

#### 2）分段函数

分段函数可以通过`\begin{cases}`方式实现，不同的是方程式和条件之间要用&符号隔开。

例子：

```
$$
y =
\begin{cases}
\sin(x)       & x<0 \\
x^2 + 2x +4   & 0 \leq x < 1 \\
x^3           & x \geq 1 \\
\end{cases}
$$
```


显示：
$$
y =
\begin{cases}
\sin(x)       & x<0 \\
x^2 + 2x +4   & 0 \leq x < 1 \\
x^3           & x \geq 1 \\
\end{cases}
$$


### 16、累加和累乘

使用 `\sum_{下标表达式}^{上标表达式}{累加表达式}`来输入一个累加。

与之类似，使用 `\prod \bigcup \bigcap`来分别输入累乘、并集和交集。

此类符号在行内显示时上下标表达式将会移至右上角和右下角。

例子：

```
$$\sum_{i=1}^n \frac{1}{i^2} \quad and \quad \prod_{i=1}^n \frac{1}{i^2} \quad and \quad \bigcup_{i=1}^{2} R$$
```

显示：
$$\sum_{i=1}^n \frac{1}{i^2} \quad and \quad \prod_{i=1}^n \frac{1}{i^2} \quad and \quad \bigcup_{i=1}^{2} R$$

### 17、矢量

使用` \vec{矢量}`来表示一个矢量。也可以使用 `\overrightarrow`等命令自定义字母上方的符号。

例子：

```
$$\vec{a} \cdot \vec{b}=0$$
```

显示：
$$\vec{a} \cdot \vec{b}=0$$

例子：

```
$$\overleftarrow{xy} \quad and \quad \overleftrightarrow{xy} \quad and \quad \overrightarrow{xy}$$
```

显示：
$$\overleftarrow{xy} \quad and \quad \overleftrightarrow{xy} \quad and \quad \overrightarrow{xy}$$

###  18、极限

`\lim_{变量 \to 表达式} `表达式,如有需求，可以更改 \to 符号至任意符号。

例子：

```
$$\lim_{n \to +\infty} \frac{1}{n(n+1)} \quad and \quad \lim_{x\leftarrow{example} \infty} \frac{1}{n(n+1)}$$
```

显示：
 $$\lim_{n \to +\infty} \frac{1}{n(n+1)} \quad and \quad \lim_{x\leftarrow{example} \infty} \frac{1}{n(n+1)}$$



### 19、导数

- **导数**
    `${\rm d}x$`或`${\text d}x$`或`$\text{d}x$`：${\rm d}x$或${\text d}x$或$\text{d}x$

- **偏导**
    `$\frac{\partial y}{\partial x}$` : $\frac{\partial y}{\partial x}$

- **梯度**
    `$\nabla f(x)$`:$\nabla f(x)$

- **积分**
    `\int_积分下限^积分上限 {被积表达式}`

    - 例子：

        ```
        $$\int_0^1 {x^2} \,{\rm d}x$$
        ```

        显示：

        $$\int_0^1 {x^2} \,{\rm d}x$$

### 20、矩阵

#### 1）基础矩阵

使用`\begin{matrix}…\end{matrix} `这样的形式来表示矩阵，在`\begin `与`\end `之间加入矩阵中的元素即可。矩阵的行之间使用\\ 分隔，\\表示换行，列之间使用& 分隔，&表示对齐位置。

例子：

```
$$
\begin{matrix}
1 & x & x^2 \\
1 & y & y^2 \\
1 & z & z^2 \\
\end{matrix}
$$
```


显示：
$$
\begin{matrix}
1 & x & x^2 \\
1 & y & y^2 \\
1 & z & z^2 \\
\end{matrix}
$$

#### 2）带括号的矩阵

使用\left 与\right 表示括号

如果要对矩阵加括号，可以像上文中提到的一样，使用\left 与\right 配合表示括号符号。

例子：

```
$$
\left[
\begin{matrix}
1 & x & x^2 \\
1 & y & y^2 \\
1 & z & z^2 \\
\end{matrix}
\right]
$$
```


显示：
$$
\left[
\begin{matrix}
1 & x & x^2 \\
1 & y & y^2 \\
1 & z & z^2 \\
\end{matrix}
\right]
$$


#### 3）使用特殊的matrix

带括号的矩阵也可以使用特殊的matrix 。即替换`\begin{matrix}…\end{matrix} `中matrix 为`pmatrix ，bmatrix ，Bmatrix ，vmatrix , Vmatrix `。

- pmatrix：$\begin{pmatrix}1 & 2 \\ 3 & 4\\ \end{pmatrix}$

- bmatrix：$\begin{bmatrix}1 & 2 \\ 3 & 4\\ \end{bmatrix}$

- Bmatrix：$\begin{Bmatrix}1 & 2 \\ 3 & 4\\ \end{Bmatrix}$
- vmatrix：$\begin{vmatrix}1 & 2 \\ 3 & 4\\ \end{vmatrix}$
- Vmatrix：$\begin{Vmatrix}1 & 2 \\ 3 & 4\\ \end{Vmatrix}$
  

####   4）元素省略的矩阵

可以使用`\cdots，\ddots，\vdots `，来省略矩阵中的元素。

例子

```
$$
\begin{pmatrix}
1&a_1&a_1^2&\cdots&a_1^n\\
1&a_2&a_2^2&\cdots&a_2^n\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
1&a_m&a_m^2&\cdots&a_m^n\\
\end{pmatrix}
$$
```

显示：
$$
\begin{pmatrix}
1&a_1&a_1^2&\cdots&a_1^n\\
1&a_2&a_2^2&\cdots&a_2^n\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
1&a_m&a_m^2&\cdots&a_m^n\\
\end{pmatrix}
$$

#### 5）增广矩阵

增广矩阵需要使用前面的表格中使用到的\begin{array} ... \end{array} 来实现。

例子：

```
$$
\left[  \begin{array}  {c c | c} %这里的c表示数组中元素对其方式：c居中、r右对齐、l左对齐，竖线表示2、3列间插入竖线
1 & 2 & 3 \\
\hline %插入横线，如果去掉\hline就是增广矩阵
4 & 5 & 6
\end{array}  \right]
$$
```


显示：
$$
\left[  \begin{array}  {c c | c} %这里的c表示数组中元素对其方式：c居中、r右对齐、l左对齐，竖线表示2、3列间插入竖线
1 & 2 & 3 \\
\hline %插入横线，如果去掉\hline就是增广矩阵
4 & 5 & 6
\end{array}  \right]
$$

### 21、表格

使用`\begin{array}{列样式}…\end{array} `这样的形式来创建表格，列样式可以是clr 表示居中，左，右对齐，还可以使用| 表示一条竖线。表格中各行使用\\ 分隔，各列使用& 分隔。使用\hline 在本行前加入一条直线。

例子：

```
$$
\begin{array}{c|lcr}
n & \text{Left} & \text{Center} & \text{Right} \\
\hline
1 & 0.24 & 1 & 125 \\
2 & -1 & 189 & -8 \\
3 & -20 & 2000 & 1+10i \\
\end{array}
$$
```

显示：
$$
\begin{array}{c|lcr}
n & \text{Left} & \text{Center} & \text{Right} \\
\hline
1 & 0.24 & 1 & 125 \\
2 & -1 & 189 & -8 \\
3 & -20 & 2000 & 1+10i \\
\end{array}
$$

###  22、希腊字母

输入` \小写希腊字母英文全称`和`\首字母大写希腊字母英文全称`来分别输入小写和大写希腊字母。
对于大写希腊字母与现有字母相同的，直接输入大写字母即可。

|输入|	显示|	输入|	显示|
| ---- | ---- | ---- | ---- |
|\alpha|	$\alpha$ |A| $A$ |
|\beta|$\beta$|B|$B$|
|\gamma|$\gamma$|\Gamma|$\Gamma$|
|\delta|$\delta$|\Delta|$\Delta$|
|\epsilon|$\epsilon$|E|$E$|
|\zeta|$\zeta$|Z|$Z$|
|\eta|$\eta$|H|$H$|
|\theta|$\theta$|\Theta|$\Theta$|
|\iota|$\iota$|I|$I$|
|\kappa|$\kappa$|K|$K$|
|\lambda|$\lambda$|\Lambda|$\Lambda$|
|\nuν|$\nu$|N|$N$|
|\mu|$\mu$|M|$M$|
|\xi|$\xi$|\Xi|$\Xi$|
|o|$o$|O|$O$|
|\pi|$\pi$|\Pi|$\Pi$|
|\rho|$\rho$|P|$P$|
|\sigma|$\sigma$|\Sigma|$\Sigma$|
|\tau|$\tau$|T|$T$|
|\upsilon|$\upsilon$|\Upsilon|$\Upsilon$|
|\phi|$\phi$|\Phi|$\Phi$|
|\chi|$\chi$|X|$X$|
|\psi|$\psi$|\Psi|$\Psi$|
|\omega|$\omega$|\Omega|$\Omega$|

### 23、黑板粗体（空心字母）

空心字母属于一种字体，官方名称为黑板粗体，仅对大写字母起作用。若使用LaTeX编辑器，使用前需要在导言区引入宏包`\usepackage{amsfonts}`，并在公式中修改字体。

使用`$\mathbb{字母}$`即可使用空心字母，下方示例仅展示3个字母（M，R，L），其它字母同理。

| 大写字母   | 公式语言     |
| ---------- | ------------ |
| \mathbb{M} | $\mathbb{M}$ |
| \mathbb{R} | $\mathbb{R}$ |
| \mathbb{L} | $\mathbb{L}$ |
| …          | …            |

​	

### 24、运算符

对于加减除，对应键盘上便可打出来，但是对于乘法，键盘上没有这个符号，所以我们应该输入` \times `来显示一个 $\times$号。

普通字符在数学公式中含义一样，除了` # $ % & ~ _ { }` 若要在数学环境中表示这些符号`# $ % & _ { }`，需要分别表示为`\# \$ \% \& \_ \{ \}`，即在个字符前加上转义字符` \ `。

#### 1）**关系运算符**

![](/image/tool/math1.png)

![](/image/tool/math2.png)

其中，部分公式添加前缀big可以放大，删掉big前缀即为正常大小。
例如，`$\odot$`为$\odot$，`$\bigodot$`为$\bigodot$。

#### 2）**三角运算符**

![](/image/tool/math3.png)

#### 3）**箭头运算符**

- \uparrow	 $\uparrow$ 

- \downarrow	$\downarrow$
-  \updownarrow	|$\updownarrow$|
- \Uparrow	$\Uparrow$
- \Downarrow	$\Downarrow$
-  \Updownarrow	$\Updownarrow$
-  \rightarrow	$\rightarrow$ 或 $\to$
-  \leftarrow	$\leftarrow$ 或 $\gets$
-  \leftrightarrow	$\leftrightarrow$
-  \Rightarrow	$\Rightarrow$
-  \Leftarrow	$\Leftarrow$
-  \Leftrightarrow	$\Leftrightarrow$
-  \longrightarrow	$\longrightarrow$
-  \longleftarrow	$\longleftarrow$
-  \Longrightarrow	$\Longrightarrow$ 或 $\implies$
-  \Longleftarrow	$\Longleftarrow$
-  \Longleftrightarrow	$\Longleftrightarrow$
-  \rightharpoonup	$\rightharpoonup$
- \leftharpoonup	$\leftharpoonup$ 
- \rightharpoondown	$\rightharpoondown$
-  \leftharpoondown	$\leftharpoondown$
-  \swarrow	$\swarrow$
-  \nearrow	$\nearrow$
-  \nwarrow	$\nwarrow$
-  \searrow	$\searrow$
-  \mapsto	$\mapsto$
-  \longmapsto	$\longmapsto$

#### 5）离散数学符号

![](/image/tool/math4.png)

### 25、符号（各种帽子）

![](/image/tool/math5.png)

### 26、特殊符号

上述内容仅包含一些常用公式及符号，一些不常用的符号可以查找[官方文档](https://www.latexlive.com/help)获取。

下方展示一些不常用特殊符号：

- 无穷大符号：`$\infty$`:  $\infty$
- 领结符号：`$\bowtie$`:$\bowtie$
- 帽：`$\hat x$`:$\hat x$
- 范数：`$\ell_p$`:$\hat x$
- 箭头备注：`$\xrightarrow{f}$`:$\hat x$
- 上备注：`$\overset{def}{=}$`:$\hat x$
- 下备注：`$\underset{x\in S\subseteq X}{max}$`:$\hat x$
    

