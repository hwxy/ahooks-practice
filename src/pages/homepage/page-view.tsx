import React, { useState, useCallback, useMemo } from 'react'
import HomePageA from './component/index-view-a'
const HomePage = () => {
  let [count, setCount] = useState(0)
  
  let handleClick = useCallback(() => {
  }, [])

  let MemoHomePageA = useMemo(() => <HomePageA handleClick={handleClick}></HomePageA>, [handleClick])
  return (
    <div>
        { MemoHomePageA }
        <div>{ count }</div>
        <button onClick={() => {
          setCount(++count)
        }}>点击</button>
    </div>
  )
}


export default HomePage

