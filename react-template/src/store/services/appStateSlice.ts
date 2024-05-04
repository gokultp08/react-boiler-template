import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser, IUserState } from "../../shared/types/interfaces";

const getUserFromLocalStorage = (): IUser | null => {
  const userString = localStorage.getItem("user");
  return userString ? JSON.parse(userString) : null;
};

const initialState: IUserState = {
  user: getUserFromLocalStorage(),
  token: localStorage.getItem("token") || null,
};

const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setLoggedInUser: (
      state,
      action: PayloadAction<{ user: IUser; token: string }>
    ) => {
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      localStorage.clear();
      state.user = null;
      state.token = null;
    },
  },
});

export const { setLoggedInUser, logout } = appStateSlice.actions;
export default appStateSlice.reducer;
