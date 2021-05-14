import { useRef } from 'react';
import { throttle } from 'lodash';
import useCreation from './useCreation';
import { ThrottleOptions } from './throttleOptions';
import useUnmount from './useUnmount';

type Fn = (...args: any) => any;


function useThrottleFn<T extends Fn>(fn: T, options?: ThrottleOptions) {
  const fnRef = useRef<T>(fn);
  fnRef.current = fn;

  const wait = options?.wait ?? 1000;

  const throttled = useCreation(
    () =>
      throttle<T>(
        ((...args: any[]) => {
          return fnRef.current(...args);
        }) as T,
        wait,
        options,
      ),
    [],
  );

  useUnmount(() => {
    throttled.cancel();
  });

  return {
    run: (throttled as unknown) as T,
    cancel: throttled.cancel,
    flush: throttled.flush,
  };
}

export default useThrottleFn;