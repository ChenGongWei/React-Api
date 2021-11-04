import React, { useContext, useRef, useReducer } from 'react'

const MyContext = React.createContext<any>(null)

const UseContext = () => {
    const { dispatchCount } = useContext(MyContext)
    return ( 
        <>
            <button onClick={() => dispatchCount({ type: 'increment' })}>+1</button><br />
            <button onClick={() => dispatchCount({ type: 'decrement' })}>-1</button>
        </> 
    )
}

const Children = () => {
    return <UseContext />
}

const UseReducer = () => {

    const inpEl = useRef<HTMLInputElement>(null)
    /* count接收state的值， dispatchCount 为派发函数 */
    const [count, dispatchCount] = useReducer((state: number, action: any) => {
        const { type, payload } = action
        switch (type) {
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            case 'reset':
                return payload
            default:
                throw new Error()
        }
    }, 0)

    return (
        <>
            <div>Count: {count}</div>
            <button onClick={() => dispatchCount({ type: 'increment' })}>+1</button><br />
            <button onClick={() => dispatchCount({ type: 'decrement' })}>-1</button>
            <div>
                <input ref={inpEl} type="number" defaultValue={0} />
                <button
                    onClick={() =>
                        dispatchCount({ type: 'reset', payload: parseInt(inpEl.current?.value || '0') })
                }>
                    赋值
                </button>
            </div>
            <MyContext.Provider value={{ dispatchCount }}>
                <Children />
            </MyContext.Provider>
        </>
    )
}

export default UseReducer