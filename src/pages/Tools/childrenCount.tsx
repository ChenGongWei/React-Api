import React from 'react'

const Text = () => {
    return ( <div>文本</div> )
}

const CountComponent = (props:any) => {
    console.log('Count: ', React.Children.count(props.children))
    return props.children
}

const Index = () => {
    return (
        <>
            <CountComponent>
                { [1, 2, 3].map(item => <div key={item}>{ item }</div> ) }
                <span>一段文本</span>
                <Text />
            </CountComponent>
        </>
    )
}

export default Index