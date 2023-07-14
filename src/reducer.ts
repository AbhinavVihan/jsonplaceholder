import { createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit";
import { DataItem } from "./actions";

interface State {
  data: DataItem[];
  error: Error | null;
}

const initialState: State = {
  data: [],
  error: null,
};

const reducer = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataSuccess: (state, action: PayloadAction<DataItem[]>) => {
      state.data = action.payload;
      state.error = null;
      console.log(action.payload);
    },
    fetchDataFailure: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
  },
});

export const { fetchDataSuccess, fetchDataFailure } = reducer.actions;

export default reducer.reducer as Reducer<State>;
