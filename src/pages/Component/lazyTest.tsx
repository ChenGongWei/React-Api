import React from 'react'
import style from './style.module.scss'

class Test extends React.Component{

    componentDidMount(){
        console.log('组件渲染')
    }

    render(){
        return (
            <div className="img">
                <img src="https://assets.codepen.io/6902803/internal/avatars/users/default.png" className={style.img} alt="cgw" />
            </div>
        )
    }
}
export default Test
