import { createSlice } from "@reduxjs/toolkit";

export type AuthStateType = {
  isLogin: boolean;
};

const initialValue: AuthStateType = { isLogin: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialValue,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
