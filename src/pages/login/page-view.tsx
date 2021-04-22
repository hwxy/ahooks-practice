import React from 'react'

let status = "pending";
let result: any;
const data: Promise<string> = new Promise(resolve => setTimeout(() => resolve("结果"), 1000));

function wrapPromise(promise: Promise<string>) {
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  if (status === "pending") {
     throw suspender;
  } else if (status === "error") {
    throw result;
  } else if (status === "success") {
    return result;
  }
}

function Login() {
  const state = wrapPromise(data);
    
  return (<div>{state}</div>);
}

export default Login
