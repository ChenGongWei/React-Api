import React from 'react'

const Test = () => {
    return ( <div>Test</div> )
}

const Index = () => {

    const Text = React.createFactory(() => <div>createFactory创建的div</div>)
    const TestFactory = React.createFactory(Test)

    return (
        <div>
            <Text />
            <TestFactory />
        </div>
    )
}

export default Index