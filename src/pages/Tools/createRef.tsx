import React, { useRef, useEffect } from 'react'

/** 使用createRef */
class CreateRefIndex extends React.Component {

    node = React.createRef<HTMLDivElement>()

    componentDidMount() {
        console.log('createRef：', this.node)
    }

    render() {
        return (<div ref={this.node}> createRef </div>)
    }
}

/** 直接获取 */
class RefIndex extends React.Component {

    node: HTMLDivElement | null = null

    componentDidMount() {
        console.log('ref：', this.node)
    }

    render() {
        return (<div ref={ref => this.node = ref}> ref </div>)
    }
}

/** 使用useRef获取 */
const UseRefIndex = () => {

    const node = useRef(null)

    useEffect(() => {
        console.log('useRef：', node)
    }, [node])

    return (<div ref={node}> useRef </div>)
}

const Index = () => {
    return (
        <>
            <CreateRefIndex />
            <RefIndex />
            <UseRefIndex />
        </>
    )
}

export default Index