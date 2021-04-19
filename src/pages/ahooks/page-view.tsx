import React from 'react';
import useFetchQueryVal  from '../../common/hooks/useFetchQueryVal';
import Comps, { b } from './component/index'

export default function Ahooks (){
  let val = useFetchQueryVal('type')
  let Comp = Comps[val]
  return (
    <div>
      { Comp ? <Comp></Comp> : <></> }
    </div>
  );
};
