import { IItems } from "@/interface";
import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

export interface ITaskSliceState {
  items: IItems[];
  task: string;

}

const initialState: ITaskSliceState = {
  items: [],
  task: "",

};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setTask: (state, action) => {
      state.task = action.payload;
    },

  },
});

export const getAllItems=(state:RootState)=>state.items.items
export const { setItems, setTask } = itemSlice.actions;
export default itemSlice.reducer;
