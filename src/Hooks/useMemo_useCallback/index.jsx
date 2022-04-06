import Title from './Title'
import ShowCount from './ShowCount'
import Button from './Button'
import { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'

export default function UseMemo() {

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const incrementByOne = useCallback(() => setCount1(prev => prev + 1), [])
  const incrementByFive = useCallback(() => setCount2(prev => prev + 5), [])
  const isEvenOrOdd = useMemo(() => {
    let i = 0
    while (i < 1000000000) i += 1 // costly operation
    return count1 % 2 === 0
  }, [count1])
  return (
    <div>
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <Button handleClick={incrementByOne}>Increment by one</Button>
      {/* <p>counter 1 is {isEvenOrOdd() ? 'Even' : 'Odd'}</p> */}
      {/* useMemo is invoked and returning the memorizing value, so no need to invoce isEvenOrOdd function again.  */}
      <p>counter 1 is {isEvenOrOdd ? 'Even' : 'Odd'}</p>

      <br /><hr /><br />

      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={incrementByFive}>Increment by five</Button>
      <hr />
      <h4><Link to='/'>Home</Link></h4>
    </div>
  )
}


// useCallback memorize the function body and logic
// useMemo memorize the return value of the function