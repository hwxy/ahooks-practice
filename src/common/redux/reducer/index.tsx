
import { combineReducers } from '@reduxjs/toolkit';
// 全局状态
import Login from './login';


const rootReducer = combineReducers({
  Login
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;