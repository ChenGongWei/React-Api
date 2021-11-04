import React, { useState, useCallback } from 'react'

const Money = React.memo((props: any) => {
    console.log('资产更新了')

    return (
        <div>我的资产：{props.myMoney()} </div>
    )
})

const Index = () => {

    const [count, setCount] = useState(0)
    const [money, setMoney] = useState(100)

    const myMoney = useCallback(() => {
        return <span style={{ color: 'red', fontWeight: 'bold' }}>{money}</span>
    }, [money])

    return (
        <div>
            <p> count: {count} </p>
            <p> money: {money} </p>

            <button onClick={() => setCount(count + 1)}> add Count </button>
            <button onClick={() => setMoney(money + 50)}> add Money </button>

            <Money myMoney={myMoney} />
        </div>
    )
}

export default Index