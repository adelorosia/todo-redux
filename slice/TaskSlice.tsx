import { IItems } from "@/interface";
import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

export interface ITaskSliceState {
  items: IItems[];
  task: string;
  disable: boolean;
}

const initialState: ITaskSliceState = {
  items: [],
  task: "",
  disable: false,
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
    setDisable: (state, action) => {
      state.disable = action.payload;
    },
  },
});

export const getAllItems = (state: RootState) => state.items.items;
export const { setItems, setTask,setDisable } = itemSlice.actions;
export default itemSlice.reducer;
