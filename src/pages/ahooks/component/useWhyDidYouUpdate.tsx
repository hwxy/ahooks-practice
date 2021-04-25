import React, { useState } from 'react';
import useWhyDidYouUpdate from '../../../common/hooks/useWhyDidYouUpdate';

const Demo: React.FC<{ count: number }> = (props) => {
  const [randomNum, setRandomNum] = useState(Math.random());

  useWhyDidYouUpdate('useWhyDidYouUpdateComponent', { ...props, randomNum });

  return (
    <div>
      <div>
        <span>number: {props.count}</span>
      </div>
      <div>
        randomNum: {randomNum}
        <button onClick={() => setRandomNum(Math.random)} style={{ marginLeft: 8 }}>
          🎲
        </button>
      </div>
    </div>
  );
};

export default function UseWhyDidYouUpdate () {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Demo count={count} />
      <div>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>count -</button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)} style={{ marginLeft: 8 }}>
          count +
        </button>
      </div>
      <p>Please open the browser console to view the output!</p>
    </div>
  );
};