import React from 'react'

const Text = () => {
    return ( <div>文本</div> )
}

const ForEachComponent = (props:any) => {
    React.Children.forEach(props.children, item => console.log(item))
    return props.children
}

const Index = () => {
    return (
        <>
            <ForEachComponent>
                { [1, 2, 3].map(item => <div key={item}>{ item }</div> ) }
                <span>一段文本</span>
                <Text />
            </ForEachComponent>
        </>
    )
}

export default Index