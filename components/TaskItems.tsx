"use client";
import { RootState } from '@/store'
import React from 'react'
import { useSelector } from 'react-redux'

const TaskItems = () => {
    const items=useSelector((state:RootState)=>state.items.items)
    console.log(items)
  return (
    <ul className={`w-full flex flex-col gap-4 py-8 px-4 rounded-lg ${items.length?"bg-green-300":"bg-transparent"}`}>
       {
        items.map((item,index)=>(
            <li className='bg-white w-full rounded-lg p-2' key={index}>{item.task}</li>
        ))
       }
    </ul>
  )
}

export default TaskItems