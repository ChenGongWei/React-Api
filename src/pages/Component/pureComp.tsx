import React from 'react'
import style from './style.module.scss'

interface Props { }
interface State {
    num: number
    data: {
        name: string
        age: number
    }
}

class pureComponent extends React.PureComponent<Props, State> {


    state = {
        num: 10,
        data: {
            name: "cgw",
            age: 28,
        },
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
        const { num, data } = this.state

        return (
            <div className={style.box}>
                <div> num: {num} </div>
                {/* 点击组件重新渲染 */}
                <button onClick={this.addNum}>num++</button>
                <div> 你的姓名是: {data.name} </div>
                <div> 年龄： {data.age}</div>
                {/* 点击组件不会重新渲染 */}
                <button onClick={this.addAge}>age++</button>
            </div>
        )
    }
}

export default pureComponent