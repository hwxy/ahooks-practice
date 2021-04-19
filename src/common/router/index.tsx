import React, { useEffect, useState, Suspense } from 'react';
import { HashRouter, useLocation, useHistory } from 'react-router-dom';
// 组件interface

export const RouterOnly: React.FC = function() {
  return (
    <Suspense fallback={
      <div>loading...</div>
    }>
      <HashRouter>
        <PageProxy/>
      </HashRouter>
    </Suspense>
  );
};


interface IComps {
  [propName: string]: React.ComponentType
}

const PageProxy = function(props: any) {
  let { pathname } = useLocation();
  let history = useHistory();  
  let [comps, setComps] = useState<IComps>({})
  useEffect(() => {
    if(pathname === '/'){
      history.push('/login')
      return
    }
    async function loadComp(){
      let ncomps = {...comps}
      try{
        if(!comps[pathname]){
          let comp = await import(/* webpackMode: "lazy", webpackChunkName: "[request]" */ `../../pages${pathname}/page-view`)
          ncomps[pathname] = comp['default']
        } else {
          return ncomps[pathname]
        }
        setComps(ncomps)
      }catch(e){
        console.log('组件加载失败');
        history.push('/error')
      }
    }
    loadComp()
  }, [pathname, comps, history])
  
  let Comp: React.ComponentType = comps[pathname] 
  return (
      comps[pathname] ? <Comp></Comp> : <></>
  )
}
