import React, { useState } from "react";
import dropdown from "../assets/icons/dropdown.svg"

interface Option {
  id: number;
  label: string;
  value: string;
}

interface MainSelectProps {
  options: Option[];
  onChange: (value: string) => void;
  placeholder?: string;
}

const MainSelect: React.FC<MainSelectProps> = ({
  options,
  onChange,
  placeholder ,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-48">
      {/* seçilmiş dəyər */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="border border-[#2463EB] px-4.5 py-2.5 rounded-[12px] cursor-pointer bg-[#E2EAFA] flex justify-between items-center transition-all duration-300 ease-in-out crusor-pointer"
      >
        {selected || placeholder}
        <img src={dropdown} className={`w-[10px] h-[6px] ${isOpen ? "rotate-180":"rotate-0"}`} alt="dropdown" />
      </div>

      {/* dropdown hissə */}
      {isOpen && (
        <ul className="absolute mt-1 w-full border border-[#2463EB] rounded-[12px] bg-[#E2EAFA] shadow p-1.5">
          {options.map((opt) => (
            <li
              key={opt.id}
              onClick={() => handleSelect(opt.value)}
              className="p-1.5 hover:bg-[#BBCBEB] cursor-pointer rounded-[4px] bg-[#E2EAFA]"
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MainSelect;
