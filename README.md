> 我在用 `React` 开发的时候，真正用到的 `React` 的 `api` 很少，但其实 `React` 暴露出来的 `api` 非常多，而且这些 `api` 并非没有用，都有它们各自的应用场景。所有我打算将 `React` 生产环境暴露的大部分 `api` 给复习一遍。

我会将 `React api` 分成 **组件类**、**工具类**、**hooks**、**react-dom**四个类别来进行复习。

## 组件类

组件类也可细分成三类：

- 用于继承的基类组件 `Component`、`PureComponent`
- `React` 内置组件 `Fragment`、`StrictMode`
- 高阶组件 `forwardRef`、`memo`、`lazy`、`Suspense`、`Profiler`

<img src="./images/component.png" width="700px">

### Component

`Component` 是 `class` 组件的根基，类组件都是基于 `Component` 创建的，`React.Component` 的子类必须有个 `render`函数：

```js
class Welcome extends React.Component {
    render() {
        return <h1>Hello, { this.props.name }</h1>
    }
}
```

### PureComponent

`PureComponent` 和 `Component` 用法差不多，不同的是，基于 `PureComponent` 创建的组件会对 `props` 和 `state` 进行浅比较来决定是否重新渲染组件，一般可以用来进行**性能调优**，减少 `render` 次数。
**浅比较**即对值进行比较，如果是对象的话就对地址进行比较，不同则重新渲染，不会对对象内部数据进行比较。

```js
class Index extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            num: 10,
            data: {
                name: "cgw",
                age: 28,
            },
        }
    }

    addNum = () => {
        let { num } = this.state
        this.setState({ num: ++num })
    }

    addAge = () => {
        const { data } = this.state
        data.age++
        this.setState({ data })
        // 改成下面这种方式就可以实现组件重新渲染
        // this.setState({ data: {...data} })
    }

    render() {
        const { num, data } = this.state;

        return (
            <div className="box">
                <div className="show">
                <div> num: { num } </div>
                {/* 点击组件重新渲染 */}
                <button onClick={ this.addNum }>num++</button>
                <div> 你的姓名是: { data.name } </div>
                <div> 年龄： { data.age }</div>
                {/* 点击组件不会重新渲染 */}
                <button onClick={ this.addAge }>age++</button>
                </div>
            </div>
        )
    }
}
```

### memo
`memo` 是[高阶组件](https://zh-hans.reactjs.org/docs/higher-order-components.html) ，和 `PureComponent` 作用类似，都可用来做**性能优化**。区别是 `memo` 只能对 `props` 的情况确认是否需要重新渲染，而 `PureComponent` 针对的是 `props` 和 `state`。

`React.memo` 接受两个参数，第一个参数是组件，第二个参数是一个函数，返回一个布尔值，返回 `true` 组件无需重新渲染，返回 `false` 则重新渲染，这个和 `shouldComponentUpdate()` 刚好相反。

```js
function TextMemo(props) {
    console.log('子组件渲染')
    const { num, number } = props

    return (
        <div>
            <div>子组件</div>
            <div>num: { num }</div>
            <div>number: { number }</div>
        </div>
    )
}

const NewTextMemo = React.memo(TextMemo, (pre, next) => {
    if(pre.number === next.number) { // number 值未变化，不重新渲染
        return true
    } else if(pre.number !== next.nubmer && next.number < 5) { // number 值小于5，不重新渲染
        return true
    } else { // 其他情况，重新渲染
        return false
    }
})

class Index extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            num: 1,
            number: 1
        }
    }

    render() {
        console.log('父组件渲染')
        let { num, number } = this.state
        return (
            <div>
                <div>父组件</div>
                <div>
                    num: { num }
                    {/* num 改变，父组件重新渲染，子组件不重新渲染 */}
                    <button onClick={() => this.setState({ num: ++num })}>num++</button>
                    <button onClick={() => this.setState({ num: --num })}>num--</button>
                </div>
                <div>
                    number: { number }
                    {/* number 改变，父组件重新渲染；当 number 小于 5 时，子组件不重新渲染，大于 5 重新渲染 */}
                    <button onClick={() => this.setState({ number: ++number })}>number++</button>
                    <button onClick={() => this.setState({ number: --number })}>number--</button>
                </div>
                <NewTextMemo num={ num } number={ number } />
            </div>
        )
    }
}
```


### forwardRef
有的时候，我们会希望在父组件获取子组件的某一个 `dom` 元素，但 `react` 不允许 `ref` 通过 `props` 传递，因为组件上已经有 `ref` 这个属性，`forwardRef` 出现就是解决这个问题。

`React.forwardRef` 接受渲染函数作为参数，用 `props` 和 `ref` 来当该渲染函数的参数调用该函数，返回一个 `React` 组件，这个组件能够接受 `ref` ，并将其向下转发，这就可以实现在父组件获取子组件里的 `dom` 元素了。

```js
const Son = React.forwardRef((props, ref) => {
    return (
        <div>
            <div> 子组件 </div>
            <span ref={ref} >要获取的元素</span>
        </div>
    )
}) 

const Father = () => {

    const ref = React.createRef()

    useEffect(() => {
      console.log(ref, '获取子组件的dom元素')
    }, [ref])

    return (
        <div>
            <div>父组件</div>
            <Son ref={ref}  />
        </div>
    )
}

```

### lazy
> **注意：**
> `React.lazy` 和 `Suspense` 技术还不支持服务端渲染。如果你想在使用服务端渲染的应用中使用，可以使用 [Loadable Components](https://github.com/gregberge/loadable-components) 这个库。

`React.lazy` 可以定义懒加载组件，配合 `Suspense` 使用可以实现动态加载组件的效果。`React.lazy` 接受一个函数，这个函数必须返回一个 `Promise` ， 该 `Promise` 需要 `resolve` 一个 `default export` 的 `React` 组件。

```js
/** Test.js */
class Test extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log('组件渲染')
    }

    render(){
        return (
            <div className="img">
                <img src={cgw} className="cgw" />
            </div>
        )
    }
}
export default Test

/** Index.js */
import Test from './Test.js'

const LazyComponent = React.lazy(() => new Promise(resolve => {
    // 用 setTimeout 来模拟 import 异步引入效果
    setTimeout(()=>{
        resolve({
            default: ()=> <Test />
        })
    }, 2000)
}))

/**
const LazyComponent = React.lazy(() => import('./Test.js'))
*/

class Index extends React.Component{   
    render(){
        return (
            <div className="box" >
                <React.Suspense fallback={ <div className="loading"></div> } >
                    <LazyComponent />
                </React.Suspense>
            </div>
        )
    }
}
```
**效果**
<img src="./images/lazy.gif" width="300px">

### Suspense
`Suspense` 可以通过 `fallback` 属性指定 `React` 元素为加载指示器，在子组件尚未具备渲染条件的时候展示该元素，目前懒加载组件（`React.lazy`）是 `Suspense` 支持的唯一用例。

`Suspense` 组件可以置于懒加载组件之上的任何位置，一个 `Suspense` 组件可以包裹多个懒加载组件。
```js
// 该组件是动态加载的
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
    return (
        // 显示 <Spinner> 组件直至 OtherComponent 加载完成
        <React.Suspense fallback={<Spinner />}>
            <OtherComponent />
        </React.Suspense>
    );
}
```

### Fragment
`react` 不允许一个组件返回多个节点元素，但我们有的时候又会有这种需求，例如：
```js
class Table extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <Columns />
                </tr>
            </table>
        )
    }
}
```
`<Columns />` 组件需要返回多个 `<td>` 元素才能让渲染的 `HTML` 有效，但 `react` 不支持下面的写法：
```js
class Columns extends React.Component {
    render() {
        return (
            <td>Hello</td>
            <td>World</td>
        )
    }
}
```
我们可以在外层套一个 `div`，但是这样生成的 `HTML` 将无效：
```js
<div>
    <td>Hello</td>
    <td>World</td>
</div>
```
`Fragment` 的出现就解决了这个问题，它可以让一个组件返回多个元素，而且不会增加额外的 `dom` 元素：
```js
<React.Fragment>
    <td>Hello</td>
    <td>World</td>
</React.Fragment>
```
还可以使用它的短语法进行简写，和 `Fragment` 的区别是，`Fragment` 可以支持 `key` 属性，`<></>` 不支持：
```js
<>
    <td>Hello</td>
    <td>World</td>
</>
```
我们常用的 `map` 遍历返回的元素，`react` 会默认在外层套一个 `Fragment`
```js
{ ['Hello', 'World'].map(item => <div key={item}> {item} </div>) }
```
`react` 处理后：
```js
<React.Fragment>
    <div key="Hello"> Hello </div>
    <div key="World"> World </div>
</React.Fragment>
```
