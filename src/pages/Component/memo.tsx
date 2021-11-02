import React from 'react'
import { Button } from 'antd-mobile'
import style from './style.module.scss'

interface TextMemoProp {
    num: number
    number: number
}


function TextMemo(props: TextMemoProp) {
    console.log('子组件渲染')
    const { num, number } = props

    return (
        <div className={style.memo_son}>
            <div>子组件</div>
            <div>num: { num }</div>
            <div>number: { number }</div>
        </div>
    )
}


const NewTextMemo = React.memo(TextMemo, (pre, next) => {
    if(pre.number === next.number) { // number 值未变化，不重新渲染
        return true
    } else if(pre.number !== next.number && next.number < 5) { // number 值小于5，不重新渲染
        return true
    } else { // 其他情况，重新渲染
        return false
    }
})


class MemoComponent extends React.Component<{}, TextMemoProp> {

    state = {
        num: 1,
        number: 1
    }

    render() {
        console.log('父组件渲染')
        let { num, number } = this.state
        return (
            <div className={style.memo_father}>
                <div>父组件</div>
                <div className={style.memo_row}>
                    num: { num }
                    {/* num 改变，父组件重新渲染，子组件不重新渲染 */}
                    <Button size="mini" onClick={() => this.setState({ num: ++num })}>num++</Button>
                    <Button size="mini" onClick={() => this.setState({ num: --num })}>num--</Button>
                </div>
                <div className={style.memo_row}>
                    number: { number }
                    {/* number 改变，父组件重新渲染；当 number 小于 5 时，子组件不重新渲染，大于 5 重新渲染 */}
                    <Button size="mini" onClick={() => this.setState({ number: ++number })}>number++</Button>
                    <Button size="mini" onClick={() => this.setState({ number: --number })}>number--</Button>
                </div>
                <NewTextMemo num={ num } number={ number } />
            </div>
        )
    }
}

export default MemoComponent

