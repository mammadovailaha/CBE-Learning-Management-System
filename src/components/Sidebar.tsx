import { type FC, useState } from "react";
import goBcak from "../assets/icons/goBack.svg";
import solarLibrary from "../assets/icons/solarLibrary.svg"
import menuLeft from "../assets/icons/menuLeft.svg"
import addBox from "../assets/icons/addBox.svg"
import MainButton from "../ui/MainButton";
import MainSelect from "../ui/MainSelect";
import CurriculumLibraryCard from "./CurriculumLibraryCard";

const options = [
    { id: 1, label: "All", value: "all" },
    { id: 2, label: "Shared Curricula", value: "shared" },
    { id: 3, label: "Published", value: "published" },
    { id: 4, label: "Draft", value: "draft" },
];

const curricula = [
    {
        id: 1,
        status: "draft",
        libraryName: "Untitled Curriculum",
        modified: "24 Sep 2025",
    },
    {
        id: 2,
        status: "published",
        libraryName: "Mathematics Basics",
        modified: "10 Sep 2025",
    },
    {
        id: 3,
        status: "shared",
        libraryName: "Physics Experiments",
        modified: "02 Aug 2025",
    },
    {
        id: 4,
        status: "draft",
        libraryName: "History of Art",
        modified: "19 Jul 2025",
    },
];

const Sidebar: FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleChange = (value: string) => {
        console.log("Selected:", value);
    };

    const handleEdit = () => {
        alert('Edit action clicked!');
    };

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete?')) {
            alert('Delete action clicked!');
        }
    };

    const handleDuplicate = () => {
        alert('Duplicate action clicked!');
    };

    const handleShare = () => {
        alert('Share action clicked!');
    };

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    // Collapsed state-də göstəriləcək mini sidebar
    if (isCollapsed) {
        return (
            <div className="w-[108px] min-h-[700px] h-[95%] flex flex-col items-center bg-[#E8E8E6] rounded-[12px] p-4 mt-5  ml-3 gap-6">
                {/* Toggle button */}
                <button
                    className="w-6 h-6 outline-none border-none cursor-pointer"
                    onClick={toggleSidebar}
                >
                    <img
                        src={menuLeft}
                        alt="menu"
                        className="transform rotate-180" // Açılma üçün icon-u çeviririk
                    />
                </button>

                {/* Icons */}
                <div className="flex flex-col items-center gap-4">
                    <button className="w-9 h-9 outline-none border-none bg-transparent flex justify-center items-center cursor-pointer">
                        <img className="w-8 h-8 object-cover" src={solarLibrary} alt="library" />
                    </button>
                    <button className="w-9 h-9 outline-none border-none bg-transparent flex justify-center items-center cursor-pointer">
                        <img className="w-6 h-6 object-cover" src={addBox} alt="add" />
                    </button>
                </div>
            </div>
        );
    }

    // Normal (açıq) sidebar
    return (
        <div className="w-[335px] h-screen flex flex-col items-center bg-[#E8E8E6] rounded-[12px] p-6 mt-5 ml-3 gap-5">
            <div className="w-full flex flex-col items-center border-b border-[#DAD5D5] gap-5 py-5">
                <div className="w-full flex justify-between items-center">
                    <div className="flex justify-center items-center gap-1 border-b border-[#DAD5D5]">
                        <div className="w-6 h-6 flex justify-center items-center">
                            <img className="w-3 h-3 object-cover" src={goBcak} alt="go back" />
                        </div>
                        <p className="text-sm font-normal tracking-normal leading-3.5 text-[#5B5757] font-[Helvetica Neue]">
                            Back
                        </p>
                    </div>
                    <button
                        className="w-6 h-6 outline-none border-none cursor-pointer"
                        onClick={toggleSidebar}
                    >
                        <img src={menuLeft} alt="menu" />
                    </button>
                </div>
                <div className="w-full flex justify-start items-center gap-2">
                    <div className="w-9 h-9 flex justify-center items-center">
                        <img className="w-8 h-8 object-cover" src={solarLibrary} alt="library" />
                    </div>
                    <h2 className="text-lg font-bold tracking-normal leading-5 text-[#001011] font-[Helvetica Neue]">
                        Curriculum Library
                    </h2>
                </div>
                <div className="w-[285px] h-[44px]">
                    <MainButton title={"New Curriculum"} src={addBox} />
                </div>
            </div>
            <div className="w-full flex justify-start relative z-50">
                <MainSelect
                    placeholder="My Curricula"
                    options={options}
                    onChange={handleChange} /></div>
            <div
                style={{
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                }}
                className="w-full flex flex-col items-center gap-4 overflow-y-scroll"
            >
                {curricula.map((card) => (
                    <CurriculumLibraryCard
                        key={card.id}
                        status={card.status}
                        libraryName={card.libraryName}
                        date={card.modified}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onDuplicate={handleDuplicate}
                        onShare={handleShare}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;