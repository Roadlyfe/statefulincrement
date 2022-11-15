import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  
    return (
    <div>
        <button className='button' onClick={() => setCount(count + 1)}>Plus One.</button>
        <button className='button' onClick={() => setCount(count - 1)}>Minus One.</button>
        <p>{count}</p>
    </div>
  )
}

export default Counter