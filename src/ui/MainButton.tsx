import  { type FC } from 'react'

interface buttonProps{
    title:string;
    src?:string;
}
const MainButton:FC<buttonProps> = ({title,  src}) => {
  return (
    <button className={`w-full h-full text-base text-white font-normal tracking-normal leading-4 font-[Helvetica Neue] bg-[#2463EB] rounded-[12px] hover:bg-[#1A52CA] hover:mt-0.5  flex justify-center items-center gap-1.5 cursor-pointer transition-all delay-150 duration-300 ease-in-out`}>
        {title} <img src={src} alt="icon" />
    </button>
  )
}

export default MainButton
