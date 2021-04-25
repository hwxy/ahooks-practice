import React from 'react'
import UseDebounceComp from './useDebounce'
import UseIntervalComp from './useInterval'
import UseThrottleComp from './useThrottle'
import UseDebounceEffect from  './useDebounceEffect'
import UseWhyDidYouUpdate from './useWhyDidYouUpdate'
import UseClickAway from './useClickAway'
interface IComps{
  [key: string]: React.ComponentType
}

let Comps: IComps = {
  useDebounce: UseDebounceComp,
  useInterval: UseIntervalComp,
  useThrottle: UseThrottleComp,
  useDebounceEffect: UseDebounceEffect,
  UseWhyDidYouUpdate: UseWhyDidYouUpdate,
  UseClickAway: UseClickAway
}

export default Comps