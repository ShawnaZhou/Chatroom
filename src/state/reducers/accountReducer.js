import { createSlice } from "@reduxjs/toolkit";

const accountReducer = createSlice({
  name: "account",
  initialState: { value: false },
  reducers: {
    login: (state) => {
      state.value = true;
    },
    register: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
    },
  },
});

// export async function login(state={},action) {
  
// }

export const { login,register, logout } = accountReducer.actions;
export default accountReducer.reducer;
