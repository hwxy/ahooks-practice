import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const login = createSlice({
  name: 'login',
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {}
  },
});

export default login.reducer;
export const loginAction = login.actions;
