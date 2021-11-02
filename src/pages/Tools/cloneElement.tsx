import React from 'react'

interface Props {
    name: string
}

function TestComponent(props: Props) {
    return (
        <div>{props.name}</div>
    )
}


function Index() {
    const element = <TestComponent name='test' />
    return (
        <div>
            { element }
            {React.cloneElement(element, { name: 'clone' })}
        </div>
    )
}

export default Index