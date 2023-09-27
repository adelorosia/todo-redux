import TaskItems from '@/components/TaskItems'
import TopForm from '@/components/TopForm'
import React from 'react'

const page = () => {
  return (
    
    <div className='wrapper bg-blue-300 h-screen w-full flex justify-center items-center'>
      <div className='flex flex-col gap-5 items-center justify-center h-screen w-4/5 md:w-1/2 lg:w-1/3'>
       <TopForm />
       <TaskItems />
      </div>
    </div>
  )
}

export default page