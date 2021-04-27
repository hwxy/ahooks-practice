import React, { useState } from 'react'
//
import useWindowResize from '../../common/hooks/useWindowResize'
// util
// import { isAndroid } from '../../common/utils'
// scss
import './index.scss'
// let status = "pending";
// let result: any;
// const data: Promise<string> = new Promise(resolve => setTimeout(() => resolve("结果"), 1000));

// function wrapPromise(promise: Promise<string>) {
//   let suspender = promise.then(
//     r => {
//       status = "success";
//       result = r;
//     },
//     e => {
//       status = "error";
//       result = e;
//     }
//   );
//   if (status === "pending") {
//      throw suspender;
//   } else if (status === "error") {
//     throw result;
//   } else if (status === "success") {
//     return result;
//   }
// }

function Login() {
  let [showFooter, setShowFooter] = useState<boolean>(true)
  let docHeight = (document.scrollingElement as Element).clientHeight
  useWindowResize(() => {
    let docChangeHeight = (document.scrollingElement as Element).clientHeight
    if(docHeight > docChangeHeight){
        setShowFooter(false)
    } else {
      setShowFooter(true)
    }
  })
  return (
    <div className="login-content">
      <input type="text"/>
      {
        showFooter && (
          <footer className="content__footer">try</footer>
        )
      }
    </div>
  );
}

export default Login
