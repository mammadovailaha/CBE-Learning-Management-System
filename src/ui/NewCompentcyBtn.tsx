import React, { type FC } from 'react'
import { CgAddR } from 'react-icons/cg'

interface Props{
    text:string;
}
const NewCompentcyBtn:FC<Props> = ({text}) => {
  return (
    <button className='w-full h-11 border  border-dashed border-[#BEBFC1] rounded-[12px] flex justify-center items-center gap-2.5 cursor-pointer hover:border-[#2463EB] hover:bg-[#E2EAFA] transition-all delay-150 duration-300 ease-in-out'>
       <CgAddR  className='text-[#5B5757] text-base'/>
       {text}
    </button>
  )
}

export default NewCompentcyBtn
