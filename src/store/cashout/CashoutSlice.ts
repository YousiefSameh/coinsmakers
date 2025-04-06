import { createSlice } from "@reduxjs/toolkit";
import { CashoutState } from "@customTypes/CashoutTypes";

const initialState: CashoutState = {
  cashouts: [],
  cashout: null,
  loading: "idle",
  error: null,
}

const cashoutSlice = createSlice({
  name: "cashout",
  initialState,
  reducers: {
    setCashouts: (state, action) => {
      state.cashouts.push(action.payload);
    },
    setCurrentCashout: (state, action) => {
      state.cashout = action.payload;
    }
  },
});

export const { setCashouts, setCurrentCashout } = cashoutSlice.actions;
export default cashoutSlice.reducer;