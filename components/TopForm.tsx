"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setTask } from "@/slice/TaskSlice";

const TopForm = () => {
  const task = useSelector((state: RootState) => state.items.task);
  const dispatch = useDispatch();

//   wir nehmen value von input
  const OnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTask(event.target.value));
  };

  return (
    <div className="w-full">
      <h1 className=" font-extrabold text-3xl font-viga text-center">
        Taskify
      </h1>
      <div className="grid grid-cols-12 bg-white mt-8 rounded-lg">
        <input
          className="w-full outline-0 p-2 my-2 rounded-lg col-span-9 bg-transparent font-bold text-lg"
          type="text"
          placeholder="Enter your task hear"
          value={task}
          onChange={OnInputChange}
        />
        <button className="col-span-3 border-l bg-zinc-100 rounded-r-lg font-bold font-viga text-green-900 hover:text-red-700 hover:text-lg transition-all duration-200">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TopForm;

function RootState(a: unknown, b: unknown): boolean {
  throw new Error("Function not implemented.");
}
