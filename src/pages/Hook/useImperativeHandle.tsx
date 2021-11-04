import { forwardRef, useRef, useState, useImperativeHandle } from 'react'

interface InputInstance {
    onFocus: () => void
    onChangeValue: (val: string) => void
}

const Input = forwardRef((props, ref) => {

    const inplEl = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState('')

    const onChangeValue = (val: string) => setValue(val)

    useImperativeHandle(ref, () => {
        const handleRefs = {
            // 声明聚焦input框的方法
            onFocus() {
                inplEl.current?.focus()
            },
            // 声明改变input值的方法
            onChangeValue
        }
        return handleRefs
    })

    return (
        <div>
            <input ref={inplEl} type="text" value={value} onChange={e => onChangeValue(e.target.value)} />
        </div>
    )
})

const Index = () => {

    const ref = useRef<InputInstance>(null)

    const handleClick = () => {
        ref.current?.onFocus()
        ref.current?.onChangeValue('默认值')
    }

    return (
        <>
            <Input ref={ref} />
            <button onClick={handleClick}>聚焦并改变值</button>
        </>
    )
}

export default Index
