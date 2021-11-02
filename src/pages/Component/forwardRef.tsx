import React, { useEffect } from 'react'
import style from './style.module.scss'

const Son = React.forwardRef((props, ref:any) => {
    return (
        <div className={style.memo_son}>
            <div> 子组件 </div>
            <span ref={ref} >要获取的元素span</span>
        </div>
    )
}) 

const Father = () => {
    
    const ref = React.createRef()

    useEffect(() => {
      console.log(ref, '获取子组件的dom元素')
    }, [ref])

    return (
        <div className={style.memo_father}>
            <div>父组件</div>
            <Son ref={ref} />
        </div>
    )
}

export default Father