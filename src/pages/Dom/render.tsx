import { useRef } from 'react'
import ReactDOM from 'react-dom'

const Text = () => {
    return (
        <div>我是render文本</div>
    )
}

const Index = () => {

    const ref = useRef<HTMLDivElement>(null)

    const handleClick = () => {
        ReactDOM.render(<Text />, ref.current)
    }

    return (
        <>
            <div ref={ref}>我是原文本</div>
            <button onClick={handleClick}>render</button>
        </>
    )
}

export default Index