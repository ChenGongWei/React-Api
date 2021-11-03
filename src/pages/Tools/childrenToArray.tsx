import React from 'react'

const ToArrayComponent = (props:any) => {
    console.log('children: ', props.children)
    const children = React.Children.toArray(props.children)
    console.log('toArray: ', children)
    return ( <> {children} </> )
}

const Index = () => {
    return (
        <>
            <ToArrayComponent>
                <span>一段文本</span>
                { new Array(3).fill(0).map((item,index)=>
                    new Array(2).fill(1).map((item1,index1)=>
                        <div key={index+index1}>{item+item1}</div>)) }
            </ToArrayComponent>
        </>
    )
}

export default Index