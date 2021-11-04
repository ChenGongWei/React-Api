import { useRef, useLayoutEffect } from 'react'

const UseLayoutEffect = () => {

    const inplEl = useRef<HTMLInputElement>(null)

    useLayoutEffect(() => {
        /** 在dom绘制前，给输入框赋上初始值 */
        inplEl.current?.setAttribute('value', '初始值')
    }, [])

    return ( <input ref={inplEl} type="text" /> )

}

export default UseLayoutEffect