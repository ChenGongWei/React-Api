import React from 'react'

interface Props {
    name?: string
    age?: number
}

const MyContext = React.createContext({})

function Test(props: Props) {

    const { name, age } = props

    return (
        <div>
            <div>姓名：{ name }</div>
            <div>年龄：{ age }</div>
        </div>
    )
}

function ConsumerComponent() {
    return (
        <MyContext.Consumer>
            { value => <Test {...value} /> }
        </MyContext.Consumer>
    )
}

function ProviderComponent() {
    return (
        <MyContext.Provider value={{ name: 'cgw', age: 18 }}>
            <ConsumerComponent />
        </MyContext.Provider>
    )
}

export default ProviderComponent