import React, { useContext } from 'react'

const MyContext = React.createContext<any>(null)

const ConsumerComponent = () => {
    return (
        <MyContext.Consumer>
            { value => <div>name: { value.name }</div> }
        </MyContext.Consumer>
    )
}

const UseContext = () => {
    const value = useContext(MyContext)
    return ( <div>name: { value.name }</div> )
}

const ProviderComponent = () => {
    return (
        <MyContext.Provider value={{ name: 'cgw' }}>
            <ConsumerComponent />
            <UseContext />
        </MyContext.Provider>
    )
}

export default ProviderComponent