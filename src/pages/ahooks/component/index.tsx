import React from 'react'
import UseDebounceComp from './useDebounce'
import UseIntervalComp from './useInterval'
import UseThrottleComp from './useThrottle'
import UseDebounceEffect from  './useDebounceEffect'
import UseWhyDidYouUpdate from './useWhyDidYouUpdate'
import UseClickAway from './useClickAway'
import UseDocumentVisibility from './useDocumentVisibility'
import UseEventTarget from './useEventTarget'
import UseEventEmitter from './useEventEmitter'
import UseLockFn from './useLockFn'
import UsePersistFn from './usePersistFn'
interface IComps{
  [key: string]: React.ComponentType
}

let Comps: IComps = {
  useDebounce: UseDebounceComp,
  useInterval: UseIntervalComp,
  useThrottle: UseThrottleComp,
  useDebounceEffect: UseDebounceEffect,
  useWhyDidYouUpdate: UseWhyDidYouUpdate,
  useClickAway: UseClickAway,
  useDocumentVisibility: UseDocumentVisibility,
  useEventTarget: UseEventTarget,
  useEventEmitter: UseEventEmitter,
  useLockFn: UseLockFn,
  usePersistFn: UsePersistFn
}

export default Comps