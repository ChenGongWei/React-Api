import React from 'react'

const Text = () => {
    return ( <div> 我是一个组件 </div> )
}

const IsValidElement = (props: any) => {

    // 三段文字都会展示
    // return props.children

    // 非 React元素会被过滤
    const newChildren = props.children.filter((item:any) => React.isValidElement(item))
    return newChildren

}

const Index = () => {
    return (
        <IsValidElement>
            <div> 我是一个div </div>
            <Text />
            我是一段文本
        </IsValidElement>
    )
}

export default Index