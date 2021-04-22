import { useEffect, useRef, DependencyList } from 'react';

type Fn = (...args: any) => void;
type Dep = DependencyList

const useTrackedEffect = (effect: Fn, deps?: any) => {
  const previousDepsRef = useRef<any>();
  const diffTwoDeps = (deps1: Dep, deps2: Dep) => {
    //Let's do a reference equality check on 2 dependency list.
    //If deps1 is defined, we iterate over deps1 and do comparison on each element with equivalent element from deps2
    //As this func is used only in this hook, we assume 2 deps always have same length.
    return deps1
      ? deps1.map((_ele, idx) => (deps1[idx] !== deps2[idx] ? idx : -1)).filter((ele) => ele >= 0)
      : deps2
      ? deps2.map((_ele, idx) => idx)
      : [];
  };
  useEffect(() => {
    let changes = diffTwoDeps(previousDepsRef.current, deps);
    const previousDeps = previousDepsRef.current;
    previousDepsRef.current = deps;
    return effect(changes, previousDeps, deps);
  }, deps);
};

export default useTrackedEffect;