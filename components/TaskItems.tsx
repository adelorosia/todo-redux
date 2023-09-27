"use client";
import { RootState } from "@/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsCheckLg, BsFillPencilFill, BsTrashFill } from "react-icons/bs";
import { setDisable, setItems, setTask } from "@/slice/TaskSlice";
import { IItems } from "@/interface";

const TaskItems = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.items.items);
  const disable = useSelector((state: RootState) => state.items.disable);
  const [task, setTask] = useState("");

  const saveDataToLocalStorege = (data: IItems[]) => {
    const dataJSON = JSON.stringify(data);
    localStorage.setItem("data", dataJSON);
  };
  //delete Items von localStorege und unser Array(items)
  const deleteItems = (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    saveDataToLocalStorege(newItems);
    dispatch(setItems(newItems));
  };

  //edit Items von localStorege und unser Array(items)
  const editItems = (id: string) => {
    const index = items.findIndex((item) => item.id === id);
    const newItems = [...items];

    newItems[index] = { ...newItems[index], done: !newItems[index].done };
    setTask(newItems[index].task);
    console.log(newItems[index].done);
    dispatch(setItems(newItems));
    dispatch(setDisable(!disable));
  };

  const acceptEditItems = (id: string) => {
    const index = items.findIndex((item) => item.id === id);
    console.log("ghulam" + index);
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      done: !newItems[index].done,
      task: task,
    };

    setTask("");

    saveDataToLocalStorege(newItems);
    dispatch(setItems(newItems));
    dispatch(setDisable(!disable));
  };
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };
  return (
    <div
      className={`w-full flex flex-col gap-4 py-8 px-4 rounded-lg ${
        items.length ? "bg-green-300" : "bg-transparent"
      }`}
    >
      {items.map((item, index) => (
        <div className="flex items-center bg-white rounded-lg" key={index}>
          <input
            className={`bg-transparent w-full rounded-lg p-2 ${
              item.done ? "hidden" : "flex"
            }`}
            value={task}
            onChange={onInputChange}
            disabled={item.done}
          />
          <li
            className={`bg-transparent w-full rounded-lg p-2 list-none ${
              item.done ? "flex" : "hidden"
            }`}
          >
            {item.task}
          </li>
          <div className="flex p-2 gap-3 text-lg cursor-pointer items-center">
            <BsCheckLg
              className={`text-green-600 text-2xl ${
                item.done ? "hidden" : "flex"
              }`}
              onClick={() => {
                acceptEditItems(item.id);
              }}
            />
            <BsFillPencilFill
              className={`text-yellow-500 ${item.done ? "flex" : "hidden"}`}
              onClick={() => {
                editItems(item.id);
              }}
            />
            <BsTrashFill
              className="text-red-600"
              onClick={() => {
                deleteItems(item.id);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskItems;
