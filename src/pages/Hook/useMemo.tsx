import { useState, useMemo } from 'react'

const Counter = (props: any) => {

  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(() => props.num)

  const num = useMemo(() => {
      console.log('num 值更新')
      return props.num + count
  }, [props.num, count])

  return (
    <div>
      <p> count: {count} </p>
      <p> total: {total} </p>
      <p> num: {num} </p>
      
      <button onClick={() => setCount(count + 1)}> add Count </button>
      <button onClick={() => setTotal(total + 1)}> add Count </button>
    </div>
  )
}

const Index = () => {
    return ( <Counter num={123} /> )
}

export default Index