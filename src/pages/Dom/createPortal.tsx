import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import style from './style.module.scss'

interface ModalProps {
    visible: boolean
    onClose: () => void
}

const Modal = (props: ModalProps) => {

    const [visible, setVisible] = useState(false)

    const onClose = () => {
        setVisible(false)
        props.onClose()
    }

    useEffect(() => {
        setVisible(props.visible)
    }, [props.visible])

    return (
        <>
            {/* 通过 React.createPortal 将组件挂载在 body 下 */}
            {visible ? ReactDOM.createPortal(
                <div className={style.modal}>
                    <div className={style.wrap}>
                        <div>我是弹框组件，挂载在body下</div>
                        <div className={style.btn} onClick={onClose}>关闭</div>
                    </div>
                </div>
            , document.body) : null}
        </>
    )
}

const Index = () => {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <h1>我是标题</h1>
            <button onClick={() => setVisible(true)}>弹框</button>
            <Modal visible={visible} onClose={() => setVisible(false)} />
        </>
    )
}

export default Index