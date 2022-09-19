---
title: JAKA编程脚本
---

import styles from '/src/components/HomepageFeatures/styles.module.css';

# <center>第1章 JAKA编程脚本简介</center>

<p>&emsp;&emsp;JAKA编程脚本是控制节卡机器人的专用编程语言(DSL)。用户可以根据JAKA 编程脚本所规定的语法进行编程以达到控制机器人的目的。</p>

# <center>第2章 JAKA编程脚本基础</center>

## 2.1 JAKA基础语法
### 2.1.1 标识符

<!-- <p>&emsp;&emsp;在JAKA编程脚本中，标识符不区分大小写，且其命名需满足以下规则：
    <ul style="list-style-type:disc">
        <li>只能使用英文字母、数字和下划线</li>
        <li>第一个字符不能是数字 </li>
        <li>不能将关键字用作标识符</li>
        <li>最长支持255个字符，建议不要超过30个字符</li>
    </ul>
</p> -->

&emsp;在JAKA编程脚本中，标识符不区分大小写，且其命名需满足以下规则：
- &emsp;只能使用英文字母、数字和下划线
- &emsp;第一个字符不能是数字
- &emsp;不能将关键字用作标识符
- &emsp;最长支持255个字符，建议不要超过30个字符

**示例:**
```# legal
_var1 = 1
var2  = 1
VAR3  = 1
_2KDDinKAEld74Zl8WzKP = 1
# illegal
4VAR = 1
if = 1
```

### 2.1.2 预留关键字
&emsp;&emsp;在JAKA编程脚本中，标识符不区分大小写，且其命名需满足以下规则：

| &emsp;&emsp;&emsp;property&emsp;&emsp;&emsp; | &emsp;&emsp;exec&emsp;&emsp;&emsp;| &emsp;&emsp;&emsp;not&emsp;&emsp;&emsp; |
| :----: | :----: | :----: |
| assert | finally | or |
| break | for | pass |
| class | from | print |
| continue | global | raise |
| def | if | return |
| del | import | try |
| elif | in | while |
| else | is | with |
| except | lambda | yield |

<!--
<table calss="mytable" width="400" border="0" >
    <tr>
        <td>rand</td>
        <td>exec</td>
        <td>not</td>
    </tr>
    <tr>
        <td>row 2, cell 1</td>
        <td>row 2, cell 2</td>
        <td>row 2, cell 2</td>
    </tr>
</table>
 -->

### 2.1.3脚本注释
&emsp;&emsp;JAKA机器人编程脚本支持单行注释，不支持多行注释。单行注释采用 # 开头，注释可以在语句或表达式行末。

**示例:**
```
# the first comment
str = "Hello, World!"  # the second comment
```


### 2.1.4语句
&emsp;&emsp;JAKA机器人编程脚本仅支持单行语句。不支持一行语句拆分到多行书写，也不支持一行中书写多条语句。

## 2.2 基本类型
&emsp;&emsp;JAKA机器人编程脚本提供标量、字符串与数组三种基本类型数据支持。在数组的基础上，预定义系统变量供用户使用。

### 2.2.1 标量
&emsp;&emsp;JAKA Script 不区分布尔类型、整形与浮点型数据。对布尔类型，false对应0， true对应1。

**示例:**
```
var = 1
# or
var = 1.0
# or
var = (expr1 > expr2)
```

### 2.2.2 字符串

&emsp;&emsp;用户定义字符串时需要使用英文双引号 ("") 进行包裹 。目前JAKA Script支持的转义字符(见下表)，用户在定义字符串时需要注意，否则会造成解析错误。

| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;表头&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; | &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;描述&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; |
|  :----:  | :----:  |
| \\  | 反斜杠符号 |
| \'  | 单引号 |
| \"  | 双引号 |
| \n  | 换行 |
| \t  | 横向制表符 |
| \r  | 回车 |

**示例:**
```
string =  "this is a \"string\""
string =  "This is a string \n"
```

### 2.2.3 数组

&emsp;&emsp;数组是存放一组相同数据类型数据的容器。目前仅支持标量类型的数据，不支持字符串数组或数组的嵌套。

**数组定义**

&emsp;语法形式：

```
arr = [...]  #定义一个数组
arr = []     #定义一个空数组
```

**单元素的负索引访问**

&emsp;&emsp;假设数组变量array的长度为N，对于单个元素的访问，支持以下形式：

<center>array[index]</center>

&emsp;&emsp;元素的索引支持负值，即index 范围支持 [-N, N-1]。当index为非负值时，元素访问满足以下关系：

<center>array[index] = array[-N+index]</center>

&emsp;&emsp;当index取值不在支持范围内，则报错数组访问越界并终止程序执行。

**示例：**
```
a = [1,2,3,4,5,6,7,8,9,0]
b = a[-10] # b = a[0]
b = a[-11] # 报错数组访问超界
```

**数组的子区间访问**

&emsp;&emsp;支持访问指定数组的区间内指定间隔的子序列，并以数组形式返回。对数组的子区间的访问，具体格式为:

<center>array[startIndx : endIndex : step]</center>

&emsp;&emsp;当step为0时，程序报错，并会终止程序执行;

&emsp;&emsp;其他情况下，即使startIndex, endIndex，step不满足逻辑条件时不会报错（超过数组边界），仅在指定数组有效的范围内返回满足条件的值，如不存在则返回空数组。

&emsp;&emsp;提供一种Step为1的子区间访问的特殊形式，即Step参数省略：

<center>array[startIndex, endIndex]</center>

**示例：**
```
a = [1,2,3,4,5,6,7,8,9,0]
b = a[0:5]        #[1, 2, 3, 4, 5]
b = a[-5:10:1]    #[6, 7, 8, 9, 0]
```

**数组与位姿表示**

&emsp;&emsp;在JAKA机器人编程脚本中，采用6元素数组表示机器人关节位置或空间位姿，长度单位为mm，角度单位为°。

**示例：**
```
endPosJ = [90,90,90,90,90,90] #关节空间位置数组
endPosL = [663.5,8.159996,6.950005,90,0,0] #笛卡尔空间位置数组
```

## 2.2.4 系统变量

&emsp;&emsp;在作业程序中定义的变量在程序执行结束之后将被释放。对于希望值能够持久保存的变量，JAKA编程脚本提供系统变量机制。系统可在程序中直接使用，在程序中修改值后退出或关机后，其值仍然可以保留。系统变量只支持标量类型，目前支持用户使用的系统变量最多为100个，其访问方式如下：

<center>sysvar[id], 其中id∈[5500, 5599]</center>

**示例：**
```
sysvar[5500] = 100
a = sysvar[5500]
```

**注： 系统变量暂不支持负索引与区间访问。**

## 2.3表达式

### 2.3.1 算术运算符

&emsp;&emsp;算术运算符用来进行四则运算，按照运算符优先级将其分组，（*、/、%、**）的优先级高于（+、-）。优先级高的运算符比优先级低的运算符结合得更加紧密，下表的运算符满足左结合律，即当运算符优先级相同时按照从左向右的顺序进行。

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;算术运算符

| &emsp;&emsp;&emsp;&emsp;运算符&emsp;&emsp;&emsp;&emsp;&emsp; | &emsp;&emsp;&emsp;&emsp;功能&emsp;&emsp;&emsp;&emsp;&emsp;| &emsp;&emsp;&emsp;&emsp;用法&emsp;&emsp;&emsp;&emsp;&emsp; |
| :----: | :----: | :----: |
| * | 乘法 | expr * expr |
| / | 除法 | expr / expr |
| % | 求余 | expr % expr |
| ** | 求幂 | expr ** expr |
| + | 加法 | expr + expr |
| - | 减法 | expr - expr |

### 2.3.2 逻辑与关系运算符

&emsp;&emsp;关系运算符作用于算术类型，逻辑运算符作用于任意能转换成布尔值的类型。逻辑运算符和关系运算符的返回值类型都是布尔类型。


&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;逻辑运算符和关系运算符

| &emsp;结合律&emsp; | &emsp;&emsp;运算符&emsp; | &emsp;&emsp;&emsp;&emsp;功能&emsp;&emsp;&emsp;&emsp;| &emsp;&emsp;&emsp;&emsp;&emsp;用法&emsp;&emsp;&emsp;&emsp;&emsp;|
| :--------: | :---------: | :-------: | :-----------: |
|右|！|逻辑非|！expr|
|左|&&|逻辑与|expr && expr|
|左| \|\| |逻辑或|expr \|\| expr|
|左|<|小于|expr < expr|
|左|>|大于|expr > expr|
|左|==|等于|expr == expr|
|左|!=|不等于|expr != expr|
|左|<=|小于等于|expr <= expr|
|左|>=|大于等于|expr >= expr|

### 2.3.3 位运算符

&emsp;&emsp;位运算符作用于整数类型的运算对象，并把运算对象看作是二进制位的集合，目前仅支持异或操作。

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;位运算符(左结合律)

| &emsp;&emsp;&emsp;&emsp;运算符&emsp;&emsp;&emsp;&emsp;&emsp; | &emsp;&emsp;&emsp;&emsp;功能&emsp;&emsp;&emsp;&emsp;&emsp;| &emsp;&emsp;&emsp;&emsp;用法&emsp;&emsp;&emsp;&emsp;&emsp; |
| :----: | :----: | :----: |
| ^ | 异或 | expr ^ expr |

## 2.4语句

&emsp;&emsp;通常情况下，语句是顺序执行的。但除非是最简单的程序，否则仅有顺序执行远远不够，因此JAKA编程脚本提供了一组控制流语句以支持更复杂的执行控制。

### 2.4.1 简单语句

&emsp;&emsp;JAKA机器人编程脚本中，要求语句单独成行，且大多数语句无需结束符。简单语句包括表达式语句、函数调用语句等。

### 2.4.2 条件语句

**if..end语句**

&emsp;&emsp;if语句的作用是：判断一个指定的条件是否为真，根据判断结果决定是否执行另外一条语句。if语句包括两种形式，一种含有else分支，另外一种没有。

**语法形式如下：**
```
if(condition):
    statement
end
```
<!-- picture in page 10 -->

contition：判断条件，满足条件则进行下面的程序，否则直接跳出判断
statement：所要执行的程序

**示例：**
```
condition = get_digital_output(0,1)
if(condition):
    endPosJ = [0,0,0,0,0,0]
    movj(endPosJ,0,60,200,0)
end
```

**if..else..end语句**
语法形式如下：

```
if(condition):
statement
else:
statement
end
```
<!-- picture in page 11-1  -->
contition：判断条件，满足条件则进行下面的程序，否则直接跳出判断
statement：所要执行的程序

**示例：**
```
condition =  get_digital_output(0,1)
if(condition):
    endPosJ = [0,0,0,0,0,0]
    movj(endPosJ,0,60,200,0)
else:
    endPosL =[663.5,8.159996,6.950,90,0,0]
    movl(endPosL,0,250,250,0)
end
```

**if..elif..else..end语句**

**语法形式如下：**
```
if(condition1):
    statement
elif(condition2):
    statement
else:
    statement
end
```

### 2.4.3 循环语句

**while循环语句**

&emsp;&emsp;只要条件为真，while语句就会重复地执行循环体，语法形式如下：
```
while(condition):
    statement
end
```

<!-- picture in page 12 -->

contition：判断条件，满足条件则进行下面的程序，否则直接跳出判断
statement：所要执行的程序

&emsp;&emsp;在while结构中，只要condition的求值结果为真，就会一直执行 statement (通常是一个语法块)，condition不能为空，如果condition第一次求值就是false ，statement一次都不执行。

**示例：**
```
i = 0
while(i <= 4):
    endPosJ1 =[0,90,90,90,-90,0]
    movj(endPosJ1,0,10,600,0)
    endPosJ2 =[90,90,90,90,-90,0]
    movj(endPosJ2,0,10,600,0)
    i = (i+1)
end
```


### 2.4.4 跳转语句

&emsp;&emsp;跳转语句可以中断当前的**while**语句的执行过程，JAKA Script提供了两种跳转语句 **break** 和 **continue** 。

**break语句**

&emsp;&emsp; **break** 语句负责终止离它最近的 **while** 语句，并从这些语句之后的第一条语句开始继续执行。 **break** 的作用范围仅限于最近的 **while** 循环。

**示例：**

statement是语句块，condition1和condition2是判断条件

```
while(condition1):
    statement
    ...
    if(condition2):
    break
    end
    ...
    statement
end
```
<!-- picture in page 14 -->


contition：判断条件，满足条件则进行下面的程序，否则直接跳出判断
statement：所要执行的程序

**continue语句**

&emsp;&emsp; **continue** 语句终止最近的循环中的当前迭代并立即开始下一次迭代。 **continue** 语句只能出现在 **while** 循环体的内部。和 **break** 类似， **continue** 的作用范围仅限于最近的 **while** 循环。 **continue** 中断当前的迭代，但是会继续执行当前的循环，对于 **while** 语句来说即继续判断条件的值。

**示例：**

statement是语句块，condition1和condition2是判断条件。

```
while(condition1):
    statement
    ...
    if(condition2):
    continue
    end
    ...
    statement
end
```

<!-- picture in page 15 -->

contition：判断条件，满足条件则进行下面的程序，否则直接跳出判断  
statement：所要执行的程序  

## 2.5 多线程  

&emsp;&emsp;最新的控制器软件支持多线程功能，用户可以在非主线程中使用特定的非运动相关类指令。  

### 2.5.1 线程的创建  

&emsp;&emsp;用户使用多线程时，需要通过子程序文件的方式定义线程的执行体，即线程执行体被单独保存在以jks为后缀的脚本文件中。线程创建时需指定线程执行体子程序文件的绝对路径，线程创建后将自动开始执行。JAKA控制器支持子线程数量为5个。  

&emsp;&emsp;线程创建时需要同步写入线程名称，线程的名称用于对子线程资源的管理，如线程的销毁、同步、暂停等操作。  

**示例：**
&emsp;&emsp;/path/to/thread/file.jks为子线程对应脚本文件的绝对路径，thread_name为标识该线程的唯一字符串。  

```
create_thread(“/path/to/thread/file.jks”, “thread_name”)
```

### 2.5.2 线程的操作  

&emsp;&emsp;JAKA脚本编程语言支持线程等待（join）与线程销毁操作，不支持线程分离（detach）。主线程结束后所有的子线程均将被终止，所使用的资源也将会被回收。线程的相关操作仅支持在主线程中调用，在子线程中调用无效；线程操作中必须保证是有效的线程名称，无效的线程名称将导致运行时错误。运动相关类，部分设置类（如：负载设置，坐标系设置）指令只能在主线程中使用，在子线程中这些指令将会被跳过，不会被执行。  

**示例：**  
&emsp;&emsp;thread_name为线程名称  
```
线程同步：
                          thread_join("thread_name")
线程销毁：
                          thread_destroy("thread_name")
```  

&emsp;&emsp;此外子线程与主线程可以调用程序暂停指令，暂停指令执行后程序中所有的线程都将进入暂停状态；程序恢复将恢复所有线程继续运行。  

### 2.5.3 线程的调度  

&emsp;&emsp;用户在作业程序中创建的所有子线程保持相同的优先级，且不支持修改。在控制指令周期内仅允许一个线程拥有底层控制接口调用权，各线程之间需要通过竞争实现。在竞争的过程中，线程其他的任务也将被阻塞运行。  

### 2.5.4 线程的互斥  

&emsp;&emsp;多个线程同时访问共享数据或资源（如系统变量、IO控制等）时可能会冲突，JAKA机器人编程脚本提供进入和退出临界区域的操作接口以解决资源冲突。在进入该临界区域时，其他所有的线程将处于等待状态，直到线程退出临界区域。由于进入临界区域相当于独占运行权限，为保证其他线程能够正常运行，要求在进入与退出临界区域期间执行的指令尽量短。  

**示例：**  
```
thread_enter_critical()

# do some stuff

thread_exit_critical()
```  
<!--  
| a | b | c |
|:----:|:----:|:----:|
| 列宽 = 10% 行宽| 列宽 = 30% 行宽 |列宽 = 60% 行宽 |
 -->

<!-- 
This is a markdown file. Save this snipped under `test.md` and convert into html5
with `pandoc` or any other markdown parser.

<img width = '150' height ='150' src ="https://tse2-mm.cn.bing.net/th?id=OIP.rF3VYN1CRvtyWBPU0I7kyQDMEy&p=0&pid=1.1"/>
 -->

# <center>第3章 JAKA脚本预置函数 </center>

## 3.1运动相关指令  

### 3.1.1基本运动  
<!-- 
<body>
<table border="0" width="500px" align="center" style={{textalign:"center"}}>
<tr>
  <th colspan="3" style={{textalign:"center"}}>算术运算符</th>
</tr>
<tr>	 
  <td style={{textalign:"center"}}  style={{color:"green"}}>运算符</td>
  <td style={{textalign:"center"}}>功能</td>
  <td style={{textalign:"center"}}>用法</td>
</tr> 
<tr> 
  <td style={{textalign:"center"}} style={{color:"green"}}>*</td>
  <td style={{textalign:"center"}}>乘法</td>
  <td style={{textalign:"center"}}>expr * expr</td>
</tr>
<tr>
  <td style={{textalign:"center"}}>*</td>
  <td style={{textalign:"center"}}>乘法</td>
  <td style={{textalign:"center"}}>expr * expr</td>
</tr> 
<tr>
  <td style={{textalign:"center"}}>/</td>
  <td style={{textalign:"center"}}>除法</td>
  <td style={{textalign:"center"}}>expr / expr</td>
</tr> 
<tr>
  <td style={{textalign:"center"}}>%</td>
  <td style={{textalign:"center"}}>求余</td>
  <td style={{textalign:"center"}}>expr % expr</td>
</tr>
<tr> 
  <td style={{textalign:"center"}}>**</td>
  <td style={{textalign:"center"}}>求幂</td>
  <td style={{textalign:"center"}}>expr ** expr</td>
</tr> 
<tr> 
  <td style={{textalign:"center"}}>+</td>
  <td style={{textalign:"center"}}>加法</td>
  <td style={{textalign:"center"}}>expr + expr</td>
</tr>
<tr>
  <td style={{textalign:"center"}}>-</td>
  <td style={{textalign:"center"}}>减法</td>
  <td style={{textalign:"center"}}>expr - expr</td>
</tr>
</table>
</body>
 -->
<!-- 
<body>
<table>
    <tr>
      <th style={{width:"350px"}}>函数原型</th>
      <th>函数描述</th>
    </tr>
    <tr>
        <td style={{width:"40%"}}>movl(var_pos, rel_flag, vel, acc,tol,end_cond)</td>
        <td style={{width:"60%"}}>
            &emsp;&emsp;该函数用于控制机器人执行笛卡尔间直线  运动。<br/>
            &emsp;&emsp;var_pos: 六元素数组变量，用于定笛 卡尔空间目标位置，需提前定义。<br/>
            &emsp;&emsp;rel_flag: 指定该段运动是相对动还是  绝对运动。0为绝对运动，此时var_po给定值将被解释为  笛卡尔空间某绝对位置；1为相当前用户坐标系的增量运   动，此时var_pos给定将被解释为笛卡尔空间位置增量；  2为相对当前具坐标系的增量运动。 <br/>
            &emsp;&emsp;vel: 运动速度，单位mm/s。<br/>
            &emsp;&emsp;Acc: 直线 加速度 单位: mm/ s^2。<br/>
            &emsp;&emsp;tol: 用于指定终点误差。若为0，将准确到达目标点；若为正值，则可能会与后续段合，不准确到达目标点。<br/>
            &emsp;&emsp;End_cond：该段指令停止件，可选参数。为一个包括3个参数的数组，包括:<br/>
            &emsp;&emsp;di_type：输入类型，-1 表示不适用， 0 表basic IO，1表示工具IO， 2表示扩展IO，3保留4表示ModbusIO，5表示Profinet IO，6表Ethernet/IP IO;<br/>
            &emsp;&emsp;di_index: IO 地址<br/>
            &emsp;&emsp;di_state : IO 满足条件的状态0/1. 
        </td>
   </tr>
    <tr>
      <th style={{width:"350px"}}>函数原型</th>
      <th>函数描述</th>
    </tr>
    <tr>
        <td style={{width:"40%"}}>movj(var_pos, rel_flag, vel, acc,tol,end_cond)</td>
        <td style={{width:"60%"}}>
            &emsp;&emsp;该函数用于控制机器人执行关节空间运动。<br/>
            &emsp;&emsp;var_pos: 六元素数组变量,用于指定关节空间目标位置,需提前定义。<br/>
            &emsp;&emsp;rel_flag: 指定该段运动是相对运动还是绝对运动。0 为绝对运动,此时 var_pos给定值将被解释为关节空间某绝对位置;1 为相对运动,此时 var_pos 给定值将被解释为关节空间位置增量。<br/>
            &emsp;&emsp;vel: 各关节指令速度,单位 deg/s。实际运动时,将受各关节实际最大速度约束。<br/>
            &emsp;&emsp;acc: 直线加速度 单位: deg/s^2<br/>
            &emsp;&emsp;tol: 用于指定终点误差。若为 0,则将准确到达目标点;若为正值,则可能会与后续段混合,不准确到达目标点。<br/>
            &emsp;&emsp;End_cond:该段指令停止条件,可选参数为一个包括 3 个参数的数组,包括:<br/>
            &emsp;&emsp;di_type：输入类型，-1 表示不适用， 0 表basic IO，1表示工具IO， 2表示扩展IO，3保留，4表示ModbusIO，5表示Profinet IO，6表Ethernet/IP IO;<br/>
            &emsp;&emsp;di_index: IO 地址<br/>
            &emsp;&emsp;di_state: IO 满足条件的状态0/1. 
        </td>
   </tr>
 

<img src="/img/monkey1.jpeg" style={{float:"left" ,width:"40%"}} />

<div style={{float:"left" , width:"60%"}}  >
    &emsp;&emsp;var_pos：指定笛卡尔空间坐标（六元素数组变量，需提前定义）<br/>
    &emsp;&emsp;rel_flag：指该段运动的运动类型。0 是绝对运动(此时 var_pos 为关节空间某绝对位置);1 是相对运动(此时var_pos 为关节空间位置增量)<br/>
    &emsp;&emsp;vel: 速度,单位 deg/s。(实际运动时,将受各关节实际最大速度约束)<br/>
    &emsp;&emsp;acc:加速度,单位 deg/s^2<br/>
    &emsp;&emsp;tol：到达指定终点误差。0为准确到达指定位置，正值，会与后续段混合，不能准确到达指定终点。<br/>
    &emsp;&emsp;end_cond：指令跳过（不运行）条件选择。（可选项，为一个三个参数的数组）<br/>
    &emsp;&emsp;end_cond=[di_type,di_index,di_state]<br/>
    &emsp;&emsp;di_type：I/O类型。（-1 表示无， 0 表示电控柜 IO，1表示工具IO， 2表示扩展IO，3保留，4表示ModbusIO，5表示Profinet IO，6表示Ethernet/IP IO（Ethernet/IP功能需要APP连接控制柜底部网口才能实现这一功能））<br/>
    &emsp;&emsp;di_state：I/O选择（不同I/O类型所对应的I/O地址<br/>
    &emsp;&emsp;di_state：I/O开关（0是关，1是开）
</div>
</table> 
</body> 
-->

| 函数原型 | 函数描述 |
|----|----|
|movl(var_pos, rel_flag, vel, acc,tol,end_cond)| &emsp;&emsp;该函数用于控制机器人执行笛卡尔空间直线运动。var_pos: 六元素数组变量，用于指定笛卡尔空间目标位置，需提前定义。rel_flag: 指定该段运动是相对运动还是绝对运动。0为绝对运动，此时var_pos给定值将被解释为笛卡尔空间某绝对位置；1为相对当前用户坐标系的增量运动，此时var_pos给定值将被解释为笛卡尔空间位置增量；2为相对当前工具坐标系的增量运动。vel: 运动速度，单位mm/s。Acc : 直线加速度 单位: mm/ s^2。tol: 用于指定终点误差。若为0，则将准确到达目标点；若为正值，则可能会与后续段混合，不准确到达目标点。End_cond：该段指令停止条件，可选参数。为一个包括3个参数的数组，包括:di_type：输入类型，-1 表示不适用， 0 表示basic IO，1表示工具IO， 2表示扩展IO，3保留，4表示ModbusIO，5表示Profinet IO，6表示Ethernet/IP IO;di_index: IO 地址;di_state : IO 满足条件的状态0/1. |  
|movl(var_pos, rel_flag, vel, acc,tol,end_cond)<br/> ![img alt](/img/docusaurus.png) | &emsp;&emsp;sdfdsfsd |  