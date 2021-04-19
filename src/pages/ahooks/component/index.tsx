import React from 'react'
import UseDebounceComp from './useDebounce'
import UseIntervalComp from './useInterval'

interface IComps{
  [key: string]: React.ComponentType
}

let Comps: IComps = {
  useDebounce: UseDebounceComp,
  useInterval: UseIntervalComp
}

export default Comps