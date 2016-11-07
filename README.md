###1
```
components 存放所有小的组件
  Main.js 是头部的组件
  Courses.js 是所有课程封面的组件

```
###2
```
采用 line-style 样式布局

```
###3
```
下载 radium 模块可以解决， 厂商前缀的问题
用法：
  import Radium from 'radium';
  ...
  export default Radium(Courses);
```
###4
```
map 循环的使用

const data = [
  {
    "id":"1",
    "likes":60,
    "name":"欢乐的小孩",
    "image":"http://o84cbt6xd.bkt.clouddn.com/meteor-react-bird.png"
  },
  {
    "id":"2",
    "likes":80,
    "name":"欢乐的小孩2",
    "image":"http://o84cbt6xd.bkt.clouddn.com/happypeter-js-kingdom.png"
  }
]
========
{data.map(item,i) => <img src={item.image}/>}

item 是 整个的对象，所以可以 item.image
i  是 索引 0 1 2
```
###5
```
如何编写 line-style 的样式,注意位置
render(){
    let styles = {
      roots:{
        height:'xxx'
      }
    }

    <div style={styles.roots}>xxx</div>
}

```
###6
```
flex-wrap:nowrap  不换行
flex-wrap:wrap    换行


例子：一些自动换行的 元素,放不下就折行
  display:flex;
  flex-wrap:wrap  
```
###7
```
material-ui 框架使用

```
