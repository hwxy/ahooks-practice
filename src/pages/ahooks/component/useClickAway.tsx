import React, { useState, useRef } from 'react';
import useClickAway from '../../../common/hooks/useClickAway';

export default function UseClickAway() {
  const [counter, setCounter] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useClickAway(() => {
    setCounter((s) => s + 1);
  }, ref);

  return (
    <div>
      <span ref={ref}>
        <button type="button">box1</button>
      </span>
      <p>counter: {counter}</p>
    </div>
  );
};