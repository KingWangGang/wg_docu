---
title: My Doc Title
more_data:
  - Can be provided
  - as: objects
    or: arrays
---

import styles from '/src/components/HomepageFeatures/styles.module.css';
import Highlight from '@site/src/components/Highlight';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

> Easy to maintain open source documentation websites.
>
> — Docusaurus 

#hello , I'm jaka_wang.

#This is my first web_site.

##Hope you happy.

### My Doc Section

Hello world message with some **bold** text, some _italic_ text, and a [link](/)

![img alt](/img/docusaurus.png)

### Details element example

<!-- 
<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details> -->
<!-- 
<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.
 -->
<!-- 
<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!

I can conveniently use <highlight color="#25c2a0">Docusaurus green</highlight> everywhere!
 -->
<!-- 
<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>        
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>
<Tabs
  defaultValue="apple"
  values={[
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Banana', value: 'banana'},
  ]}>
  <TabItem value="apple" label="one">This is an apple 🍎</TabItem>
  <TabItem value="orange" label="two">This is an orange 🍊</TabItem>
  <TabItem value="banana" label="three">This is a banana 🍌</TabItem>
</Tabs>
<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + C to copy.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + C to copy.</TabItem>
</Tabs>

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + V to paste.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + V to paste.</TabItem>
</Tabs>
<Tabs groupId="operating-systems">
  <TabItem value="apple" label="one">This is an apple 🍎</TabItem>
  <TabItem value="orange" label="two">This is an orange 🍊</TabItem>
  <TabItem value="banana" label="three">This is a banana 🍌</TabItem>
</Tabs>

<Tabs groupId="operating-systems">
  <TabItem value="apple" label="one">This is an apple 🍎</TabItem>
  <TabItem value="orange" label="two">This is an orange 🍊</TabItem>
  <TabItem value="banana" label="three">This is a banana 🍌</TabItem>
</Tabs>
<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">
    I am Windows.
  </TabItem>
  <TabItem value="mac" label="macOS">
    I am macOS.
  </TabItem>
  <TabItem value="linux" label="Linux">
    I am Linux.
  </TabItem>
</Tabs> 
-->
<!-- 
<Tabs className="unique-tabs">
  <TabItem value="Apple">This is an apple 🍎</TabItem>
  <TabItem value="Orange">This is an orange 🍊</TabItem>
  <TabItem value="Banana">This is a banana 🍌</TabItem>
</Tabs>



<Tabs>
  <TabItem value="apple" label="Apple" attributes={{className: styles.red}}>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange" attributes={{className: styles.orange}}>
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana" attributes={{className: styles.yellow}}>
    This is a banana 🍌
  </TabItem>
</Tabs>

```jsx tittle="/src/components/HelloCodeTitle.js"
function HelloCodeTittle(props){
    return <h1>hi,{props.name}</h1>;
}
```

```js
console.log('I Love You 3000 Times.');
```

```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return 'This range is highlighted!';
  }
  // highlight-end

  return 'Nothing highlighted';
}
```
```jsx {1,4-6,11}
import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
```

- ```jsx {3}
+ ```jsx {4}
  function HighlightSomeText(highlight) {
    if (highlight) {
+     console.log('Highlighted text found');
      return 'This text is highlighted!';
    }

    return 'Nothing highlighted';
  }
  ``` 
  -->
<!-- 
  ```jsx {1,4-6,11} showLineNumbers
import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
``` -->
<!-- 
```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```
 -->
<!-- 
<Tabs>
<TabItem value="js" label="JavaScript">

```js
function helloWorld() {
  console.log('Hello, world!');
}
```

</TabItem>
<TabItem value="py" label="Python">

```py
def hello_world():
  print("Hello, world!")
```

</TabItem>
<TabItem value="java" label="Java">

```java
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello, World");
  }
}
```

</TabItem>
</Tabs>

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

<!-- Prettier doesn't change this -->
<!-- 

:::note

Hello world

::: 

-->
<!-- 

:::tip Use tabs in admonitions

<Tabs>
  <TabItem value="apple" label="Apple">This is an apple 🍎</TabItem>
  <TabItem value="orange" label="Orange">This is an orange 🍊</TabItem>
  <TabItem value="banana" label="Banana">This is a banana 🍌</TabItem>
</Tabs>

::: 

-->

## Level 2 title

### Level 3 title

#### Level 4 title

### Hello World {#my-explicit-id}

<Link to="#my_explicit-id">link</Link>

<TOCInline toc={toc} />

declare const toc: {
  value: string;
  id: string;
  level: number;
}[];

<!-- minHeadingLevel and maxHeaderLevel are topline and deadline ,it means include all tittle in this range -->
<TOCInline
  toc={toc.filter((node) => node.level === 2 || node.level ===4)}
  
  minHeadingLevel={2}
  maxHeadingLevel={5}
/>


<!-- this Markdown tittle will not show in th content, such as tabs and details , this two tittle will hide in a box. -->
<details>
<summary>Some details containing headings</summary>
<h2 id="#heading-id">I'm a heading that will not show up in the TOC</h2>

Some content...

</details>

![Example banner](/img/monkey1.jpeg)

<img
  src={require('/img/monkey1.jpeg').default}
  alt="Example banner"
/>

import myImageUrl from '/img/monkey1.jpeg';

<img src={myImageUrl} alt="Example banner" />;

# My Markdown page

<a target="\_blank" href={require('/doc/0907.docx').default}> Download this docx </a>

<!-- 或者 -->

[Download this docx using Markdown](/doc/0907.docx)