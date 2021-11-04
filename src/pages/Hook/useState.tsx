import { useState } from 'react'

const Counter = (props: any) => {

  // 声明一个 state变量 count，初始值为 0  
  const [count, setCount] = useState(0)

  // 声明一个 state变量 num，初始值为 props.num 翻转后的值
  const [num, setNum] = useState(() => {
      let { num } = props
      return parseInt((num + '').split('').reverse().join(''))
  })

  return (
    <div>
      <p> count: {count} </p>
      <p> num: {num} </p>
      {/* 调用 setCount 方法改变 count 的值 */}
      <button onClick={() => setCount(count + 1)}> add Count </button>
      <button onClick={() => setNum(num + 1)}> add Num </button>
    </div>
  )
}

const Index = () => {
    return ( <Counter num={123} /> )
}

export default Index