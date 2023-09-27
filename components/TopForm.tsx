"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setItems, setTask } from "@/slice/TaskSlice";
import { IItems } from "@/interface";

const TopForm = () => {
  const task = useSelector((state: RootState) => state.items.task);
  const items = useSelector((state: RootState) => state.items.items);
  const disable = useSelector((state: RootState) => state.items.disable);
  const dispatch = useDispatch();

  //   wir nehmen value von input
  const OnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTask(event.target.value));
  };

  const saveDataToLocalStorege = (data: IItems[]) => {
    const dataJSON = JSON.stringify(data);
    localStorage.setItem("data", dataJSON);
  };

  const hanlderAddButton = () => {
    if (task) {
      const newItems = [
        ...items,
        { id: new Date().toISOString(), task: task, done: true },
      ];
      saveDataToLocalStorege(newItems);
      dispatch(setItems(newItems));
      dispatch(setTask(""));
    }
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
          disabled={disable}
        />
        <button
          className={`col-span-3 border-l bg-zinc-100 rounded-r-lg font-bold font-viga text-green-900 transition-all duration-200 ${
            !disable && "hover:text-red-700 hover:text-lg "
          }`}
          onClick={hanlderAddButton}
          disabled={disable}
        >
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
