import React from 'react'
import { CgAddR } from 'react-icons/cg'
import NewCompentcyBtn from '../ui/NewCompentcyBtn'

const CreateComponent = () => {
  return (
    <div className='w-full flex flex-col justify-center items-start px-4 gap-7'>
    <div>
          <h2 className='text-[#001011] text-[26px] font-[Helvetica Neue] font-semibold'>Program Title</h2>
      <p className='text-xs text-[#6B6E74] font-[Helvetica Neue] font-normal'>A brief description</p>
      <button className='text-[12px] text-[#27AB83] font-normal  font-[Helvetica Neue] outline-none border-none bg-transparent py-2  flex justify-center items-center gap-2 cursor-pointer'>
        <CgAddR  className='text-[#27AB83] text-[12px]'/>Add Program Objectives</button>
    </div>
    <div className='w-full px-4'><NewCompentcyBtn text='Add New Competency'/></div>
    </div>
  )
}

export default CreateComponent
