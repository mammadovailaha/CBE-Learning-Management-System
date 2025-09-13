import React, { useState, type FC } from 'react'
import { GoDotFill } from 'react-icons/go';
import libraryIcon from "../assets/icons/libraryIcon.svg";
import { BsThreeDotsVertical } from 'react-icons/bs';
import ActionsClick from './ActionsClick';
import deleteIcon from '../assets/icons/deleteIcon.svg';
import duplicate from '../assets/icons/duplicate.svg';
import share from "../assets/icons/share.svg";
interface CardProps {
    status: string;
    libraryName: string;
    date: number | string;
     onEdit?: () => void;
    onDelete?: () => void;
    onDuplicate?: () => void;
    onShare?: () => void;
}
 
const CurriculumLibraryCard: FC<CardProps> = ({ 
    status,
     libraryName,
      date,
    onDelete,
    onDuplicate,
    onShare }) => {
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
       const handleDotsClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Parent click event-inin qarşısını alır
        setIsDropdownOpen(!isDropdownOpen);
    };
    // Status-a görə konfiqurasiya
    const statusConfig = {
        draft: {
            bgColor: 'bg-[#D7D8D5]',
            dotColor: 'text-gray-500',
            textColor: 'text-gray-700',
            borderColor:'border-[#5B5757]'
        },
        published: {
            bgColor: 'bg-[#10D324]',
            dotColor: 'text-white',
            textColor: 'text-white',
            borderColor:'border-[#178261]',
        },
        shared: {
            bgColor: 'bg-[#6A24EB]',
            dotColor: 'text-white',
            textColor: 'text-white',
             borderColor:'border-[#ABA927]'
        },
    };

    const statusStyles = statusConfig[status.toLowerCase() as keyof typeof statusConfig] || statusConfig.draft;
    const actions = [
        { label: 'Duplicate', value: 'duplicate',icon: duplicate, action: onDuplicate || (() => console.log('Duplicate clicked')) },
        { label: 'Share', value: 'share',icon:share, action: onShare || (() => console.log('Share clicked')) },
        { label: 'Delete', value: 'delete',icon:deleteIcon, action: onDelete || (() => console.log('Delete clicked')) },
    ];
   

    return (
        <div className={`w-[98%] h-[121px] flex flex-col gap-2 px-[18px] py-[20px] rounded-[10px] bg-[#E5E6E1] border border-[#DAD5D5] hover:bg-[#D7D8D5]`}>
            <span className={`max-w-[30%] py-1 px-2 flex items-center justify-start gap-1 rounded-[15px] text-[10px] font-semibold ${statusStyles.borderColor} ${statusStyles.bgColor}`}>
                <GoDotFill className={statusStyles.dotColor} />
                <span className={`capitalize text-[10px] font-semibold text-[#5B5757] font-[Helvetica Neue] ${statusStyles.textColor}`}>{status}</span>
            </span>
            <div className='w-full h-9 py-4 px-1 border-b border-[#BEBFC1] flex justify-between items-center relative'>
                <div className='flex justify-center items-center gap-2'>
                    <img 
                        className='w-4 h-4 object-cover'
                        src={libraryIcon} 
                        alt="library icon" 
                    />
                    <p className='text-sm font-semibold font-[Helvetica Neue] text-black'>{libraryName}</p>
                </div>
                <button 
                onClick={handleDotsClick}
                className='w-5 h-3 outline-none border-none bg-transparent cursor-pointer'>
                    <BsThreeDotsVertical className='text-[#5B5757] text-base'/>
                </button>
                  {isDropdownOpen && (
                        <ActionsClick 
                            actions={actions}
                            onClose={() => setIsDropdownOpen(false)}
                        />
                    )}
            </div>
            <p className='text-[10px] font-normal leading-[10px] text-[#5B5757] font-[Helvetica Neue]'>
                Modified: {date}
            </p>
        </div>
    )
}

export default CurriculumLibraryCard