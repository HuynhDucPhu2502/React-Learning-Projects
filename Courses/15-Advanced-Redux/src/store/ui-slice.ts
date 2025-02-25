import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Notification = {
  status: string;
  title: string;
  message: string;
};

type UIState = {
  cartIsVisible: boolean;
  isInitialLoad: boolean;
  notification: Notification | null;
};

const initialState: UIState = {
  cartIsVisible: false,
  isInitialLoad: true,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    initialLoad(state) {
      state.isInitialLoad = false;
    },
    showNotification(state, action: PayloadAction<Notification>) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
