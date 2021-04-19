import React, { useState } from 'react';
import { useInterval } from 'ahooks';

export default function UseIntervalComp () {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <div>count: {count}</div>;
};
