import { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Text = () => {
    return (
        <div>我是render文本</div>
    )
}

const Index = () => {

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        ReactDOM.render(<Text />, ref.current)
    }) 

    const handleRemove = () => {
        ReactDOM.unmountComponentAtNode(ref.current!)
    }

    return (
        <>
            <div ref={ref}></div>
            <button onClick={handleRemove}>remove</button>
        </>
    )
}

export default Index