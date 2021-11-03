import React from 'react'

const Text = () => {
    return ( <div>文本</div> )
}

const OnlyComponent = (props:any) => {
    console.log('Count: ', React.Children.only(props.children))
    return props.children
}

const Index = () => {
    return (
        <>
            <OnlyComponent>
                <span>一段文本</span>
                <Text />
            </OnlyComponent>
        </>
    )
}

export default Index