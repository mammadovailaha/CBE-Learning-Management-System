import React from 'react'
import groupIcon from "../assets/icons/Group.svg";
import undo from "../assets/icons/undo.svg";
import redo from "../assets/icons/redo.svg";
import historyIcon from "../assets/icons/historyLight.svg";
import eyeIcon from "../assets/icons/eyeIcon.svg";
import UserProfile from '../components/UserProfile';

const Header = () => {
    return (
        <div className='w-full flex justify-between mt-[30px] px-4'>
            <div className='flex justify-start items-center gap-4'>
                <div className='w-[30px] h-[30px] flex justfy-start items-center'>
                    <img
                        className='w-[18px] h-5 object-cover'
                        src={groupIcon} alt="" />
                </div>
                <p className='text-base font-noraml text-[#001011] font-[Helvetica Neue]'>Untitled Curriculum</p>
                <div className='flex justfy-center items-center gap-[7px]'>
                    <button className='w-5.5 h-5.5 flex justfy-center items-center outline-none border-none bg-transparent cursor-pointer'>
                        <img
                            className='w-[16px] h-[14px] object-cover'
                            src={undo} alt="undo" />
                    </button>
                    <button className='w-5.5 h-5.5 flex justfy-center items-center outline-none border-none bg-transparent cursor-pointer'>
                        <img
                            className=' w-[20px] h-[18px] object-cover'
                            src={redo} alt="redo" />
                    </button>
                </div>
            </div>
            {/* right side */}
            <div className='flex juctify-center items-center gap-[6px]'>
                {/* edit  */}
                <div className='flex justify-start items-center gap-2  relative w-[160px]'>
                    <p className='text-[12px] font-normal font-[Helvetica Neue] text-[#5B5757] absolute '>Edited 1d ago</p>
                    <div className='flex justify-center items-center left-[80px] absolute'>
                        <div className='absolute left-[5px]'>   <UserProfile /></div>
                        <div className='absolute left-[20px]'>   <UserProfile /></div>
                        <div className='absolute left-[35px]'>   <UserProfile /></div>
                        <div className='absolute left-[50px]'>   <UserProfile /></div>
                    </div>
                </div>
                <div className='w-19 h-12 flex justify-center items-center '>
                    <img
                        className='w-[30px] h-[30px] object-cover'
                        src={historyIcon} alt="history" />
                </div>
                <button
                    className='outline-none border bg-transparent flex judtify-center items-center gap-2.5 py-4 px-6 rounded-[12px] border border-[#DAD5D5] text-base text-[#494947] font-normal font-[Helvetica Neue] hover:bg-[#E8E8E6] transition-all delay-150 duration-300 ease-in-out cursor-pointer'>
                    <img src={eyeIcon} alt="eye icon" />
                    Preview
                </button>
                <button
                    className='outline-none border border-[#A1AAB2] bg-[#E8E8E6] flex judtify-center items-center gap-2.5 py-4 px-6 rounded-[12px]  text-base text-[#494947] font-normal font-[Helvetica Neue] transition-all delay-150 duration-300 ease-in-out cursor-pointer hover:bg-[#D7D8D5]'>
                    Publish</button>
            </div>
        </div>
    )
}

export default Header
