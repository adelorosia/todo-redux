"use client";
import { RootState } from "@/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsCheckLg, BsFillPencilFill, BsTrashFill } from "react-icons/bs";
import { setItems } from "@/slice/TaskSlice";
import { IItems } from "@/interface";

const TaskItems = () => {


  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.items.items);

  const saveDataToLocalStorege = (data:IItems[]) => {
    const dataJSON = JSON.stringify(data);
    localStorage.setItem("data", dataJSON);
  };
  //delete Items von localStorege und unser Array(items)
  const deleteItems = (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    saveDataToLocalStorege(newItems)
    dispatch(setItems(newItems));
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
            className="bg-transparent w-full rounded-lg p-2"
            value={item.task}
            disabled={item.done}
          />
          <div className="flex p-2 gap-3 text-lg cursor-pointer items-center">
            <BsCheckLg
              className={`text-green-600 text-2xl ${
                item.done ? "hidden" : "flex"
              }`}
            />
            <BsFillPencilFill
              className={`text-yellow-500 ${item.done ? "flex" : "hidden"}`}
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
