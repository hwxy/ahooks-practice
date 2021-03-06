import { useRef } from 'react';

export default function useCreation<T>(factory: () => T, deps: any[]) {
  const { current } = useRef({
    deps, // 更新依赖
    obj: undefined as undefined | T, // debounce返回的参数
    initialized: false, // 初始化
  });
  if (current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps;
    current.obj = factory();
    current.initialized = true;
  }
  return current.obj as T;
}

function depsAreSame(oldDeps: any[], deps: any[]): boolean {
  if (oldDeps === deps) return true;
  for (const i in oldDeps) {
    if (oldDeps[i] !== deps[i]) return false;
  }
  return true;
}