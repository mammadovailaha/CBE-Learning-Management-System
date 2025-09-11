import { type FC } from "react";
import goBcak from "../assets/icons/goBack.svg";
import solarLibrary from "../assets/icons/solarLibrary.svg"
import menuLeft from "../assets/icons/menuLeft.svg"
import addBox from "../assets/icons/addBox.svg"
import MainButton from "../ui/MainButton";

const Sidebar: FC = () => {
    return (
        <div className="w-[335px] h-screen flex flex-col items-center bg-[#E8E8E6] rounded-[12px] p-6 mt-5 ml-3 gap-5">
            <div className="w-full flex  justify-between items-center">
                <div className=" flex justify-center items-center gap-1 border-b border-[#DAD5D5]">
                    <div className="w-6 h-6 flex justify-center items-center  ">
                        <img className="w-3 h-3 object-cover" src={goBcak} alt="go back" />
                    </div>
                    <p className="text-sm font-normal tracking-normal leading-3.5 text-[#5B5757] font-[Helvetica Neue]">
                        Back
                    </p>
                </div>
                <button className="w-6 h-6 outline-none border-none "><img src={menuLeft} alt="menu" /></button>
            </div>
            <div className="w-full flex justify-start items-center gap-2">
                <div className="w-9 h-9 flex justify-center items-center ">
                    <img className="w-8 h-8 object-cover" src={solarLibrary} alt="library" /></div>
                <h2 className="text-lg font-bold tracking-normal leading-5 text-[#001011] font-[Helvetica Neue]">Curriculum Library</h2>
            </div>
           <div className="w-[285px] h-[44px]"> <MainButton title={"New Curriculum"}  src={addBox}/></div>
        </div>
    );
};

export default Sidebar;
