import React, { useRef, FC } from 'react';
import useEventEmitter from '../../../common/hooks/useEventEmitter';
import { EventEmitter } from '../../../common/hooks/useEventEmitter';

const MessageBox: FC<{
  focus$: EventEmitter<void>;
}> = function (props) {
  return (
    <div style={{ paddingBottom: 24 }}>
      <p>You received a message</p>
      <button
        type="button"
        onClick={() => {
          props.focus$.emit();
        }}
      >
        Reply
      </button>
    </div>
  );
};

const InputBox: FC<{
  focus$: EventEmitter<void>;
}> = function (props) {
  const inputRef = useRef<any>();
  props.focus$.useSubscription(() => {
    inputRef.current.focus();
  });
  return (
    <input ref={inputRef} placeholder="Enter reply" style={{ width: '100%', padding: '4px' }} />
  );
};

export default function UseEventEmitter () {
  const focus$ = useEventEmitter();
  return (
    <>
      <MessageBox focus$={focus$} />
      <InputBox focus$={focus$} />
    </>
  );
}
