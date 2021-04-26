import React from 'react'
import UseDebounceComp from './useDebounce'
import UseIntervalComp from './useInterval'
import UseThrottleComp from './useThrottle'
import UseDebounceEffect from  './useDebounceEffect'
import UseWhyDidYouUpdate from './useWhyDidYouUpdate'
import UseClickAway from './useClickAway'
import UseDocumentVisibility from './useDocumentVisibility'
import UseEventTarget from './useEventTarget'
interface IComps{
  [key: string]: React.ComponentType
}

let Comps: IComps = {
  useDebounce: UseDebounceComp,
  useInterval: UseIntervalComp,
  useThrottle: UseThrottleComp,
  useDebounceEffect: UseDebounceEffect,
  UseWhyDidYouUpdate: UseWhyDidYouUpdate,
  UseClickAway: UseClickAway,
  UseDocumentVisibility: UseDocumentVisibility,
  UseEventTarget: UseEventTarget
}

export default Comps