import { useState, useEffect } from 'react'
    
const Counter = () => {
  
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)

  useEffect(() => {
      // 我们可以在这里做一些初始化操作，请求数据或操作 dom
      console.log('初始化，相当于 componentDidMount')

      // 在这里清除定时器、事件监听等副作用
      return () => console.log('销毁，相当 componentDidUnmount')
  })

  useEffect(() => {
      // 只有当依赖发生变化才会执行
      console.log('相当于componentDidUpdate')
      console.log(`count改变了：${count}`)
  }, [count])

  return (
    <div>
      <p> count: {count} </p>
      <p> num: {num} </p>
      <button onClick={() => setCount(count + 1)}> add Count </button>
      <button onClick={() => setNum(num + 1)}> add Num </button>
    </div>
  )
}

export default Counter
