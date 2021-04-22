import React from 'react'
import UseDebounceComp from './useDebounce'
import UseIntervalComp from './useInterval'
import UseThrottleComp from './useThrottle'
import UseDebounceEffect from  './useDebounceEffect'
interface IComps{
  [key: string]: React.ComponentType
}

let Comps: IComps = {
  useDebounce: UseDebounceComp,
  useInterval: UseIntervalComp,
  useThrottle: UseThrottleComp,
  useDebounceEffect: UseDebounceEffect
}

export default Comps