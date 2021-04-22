import React, { useState } from 'react';
import useDebounceEffect from '../../../common/hooks/useDebounceEffect';

export default function UseDebounceEffect () {
  const [value, setValue] = useState('hello');
  const [records, setRecords] = useState<string[]>([]);
  useDebounceEffect(
    () => {
      setRecords((val) => [...val, value]);
    },
    [value],
    {
      wait: 1000,
    },
  );
  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
        <ul>
          {records.map((record, index) => (
            <li key={index}>{record}</li>
          ))}
        </ul>
    </div>
  );
};