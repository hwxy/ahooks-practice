import React from 'react';
import useFetchQueryVal  from '../../common/hooks/useFetchQueryVal';
import Comps from './component/index'

export default function Ahooks (){
  let val = useFetchQueryVal('type')
  let Comp = Comps[val]
  return (
    <div>
      { Comp ? <Comp></Comp> : <></> }
    </div>
  );
};

// import React, { useState, useCallback } from "react";
// const Counter = () => {
//   const [counter, setCounter] = useState(0);
//   const onAlertButtonClick = useCallback(() => {
//     setTimeout(() => {
//       alert("Value: " + counter);
//     }, 3000);
//   }, [counter]);
//   return (
//     <div>
//       <p>You clicked {counter} times.</p>
//       <button onClick={() => setCounter(counter + 1)}>Click me</button>
//       <button onClick={onAlertButtonClick}>
//         Show me the value in 3 seconds
//       </button>
//     </div>
//   );
// };

// export default Counter;