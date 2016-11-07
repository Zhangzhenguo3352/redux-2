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
material-ui 框架使用 注意的事项
1，最外层的 index.js 添加 
  import injectTapEventPlugin from 'react-tap-event-plugin';
  injectTapEventPlugin();
2，
  里面最大的组件，Main.js 添加
    import getMuiTheme from 'material-ui/styles/getMuiTheme';

    class Main extends Component {
      getChildContext() {
        return { muiTheme: getMuiTheme() };
      }
    }

    Main.childContextTypes = {
      muiTheme: React.PropTypes.object.isRequired,
    };

3， StyleRoot 组件是在 radium 里的小组件，利用它

  把 Main 组件要渲染的内容都用 SytleRoot 组件包裹起来，
  这样组件内联样式中使用的媒体查询语句才能生效，组件变成响应式组件

  import Radium, { StyleRoot } from 'radium';


  把最外层<div>换成 <StyleRoot>

    <StyleRoot style={styles.root}>
        <header style={styles.header}>
          <div style={styles.logo}>Haoqicat</div>
        </header>
        <Courses />
    </StyleRoot>

  4, 这时候你就要看看 webpack.config.dev.js 里的配置是否包含 
    加载 css 的插件 react-tap-event-plugin，
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        loader: 'style-loader!css-loader'
      }
    ]


```

###8
```

```

























