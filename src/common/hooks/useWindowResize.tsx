import { useRef } from 'react';
import useEventListener from './useEventListener';

function useWindowResize(handler: Function) {

  const handlerRef = useRef<Function>();
  handlerRef.current = handler;

  useEventListener(
    'resize',
    () => {
      handlerRef.current && handlerRef.current()
    },
    {
      target: window,
    },
  );
}

export default useWindowResize;