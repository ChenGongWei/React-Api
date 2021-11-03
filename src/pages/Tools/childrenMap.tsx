import React from 'react'

const Text = () => {
    return ( <div>文本</div> )
}

const WarpComponent = (props:any) => {
    console.log('props.children: ', props.children)
    return props.children
}

const MapComponent = (props:any) => {
    const children = React.Children.map(props.children, item => item)
    console.log('React.Children: ', children)
    return children
}

const Index = () => {
    return (
        <>
            <WarpComponent>
                { [1, 2, 3].map(item => <div key={item}>{ item }</div> ) }
                <span>一段文本</span>
                <Text />
            </WarpComponent>
            <MapComponent>
                { [1, 2, 3].map(item => <div key={item}>{ item }</div> ) }
                <span>一段文本</span>
                <Text />
            </MapComponent>
        </>
    )
}

export default Index