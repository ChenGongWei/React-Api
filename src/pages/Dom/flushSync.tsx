import { useState } from 'react'
import ReactDOM from 'react-dom'

const Index = () => {

    const [state, setState] = useState(0)

    const handerClick = () => {
        
        setTimeout(() => {
            setState(1)
        })

        setState(2)

        ReactDOM.flushSync(() => {
            setState(3)
        })

        setState(4)
    }

    // 首先打印 0
    // 点击按钮后依次打印 3 4 1
    console.log(state)

    return (
        <div>
            <div>{state}</div>
            <button onClick={handerClick} >测试flushSync</button>
        </div>
    )

}

export default Index
