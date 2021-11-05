import { useState } from "react"
import ReactDOM from "react-dom"

const Index = () => {
    const [num, setNum] = useState(1)
    const [str, setStr] = useState('a')

    const clickHandler = () => {
        // 会触发两次打印
        setTimeout(() => { // 模拟异步
            setNum(2) 
            setStr('c')
        }, 1000)
    }

    const clickHandler2 = () => {
        setTimeout(() => { // 模拟异步
            // 合并更新，只触发一次打印
            ReactDOM.unstable_batchedUpdates(() => {
                setNum(2) 
                setStr('c')
            })
        }, 1000)
    }

    console.log('render'); // 初始化时log一次，clickHandler触发后log两次。

    return (
        <div>
            <div>num：{num}</div>
            <div>str：{str}</div>
            <button onClick={clickHandler}>异步更新</button>
            <button onClick={clickHandler2}>合并更新</button>
        </div>
    )
}

export default Index