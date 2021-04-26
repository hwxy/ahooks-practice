import React, { Fragment } from 'react';
import useEventTarget from '../../../common/hooks/useEventTarget';

export default function UseEventTarget (){
  const [value, { reset, onChange }] = useEventTarget({ initialValue: 'this is initial value' });

  return (
    <Fragment>
      <input value={value} onChange={onChange} style={{ width: 200, marginRight: 20 }} />
      <button type="button" onClick={reset}>
        reset
      </button>
    </Fragment>
  );
};