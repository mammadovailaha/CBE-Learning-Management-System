import  {  type FC, useRef, useEffect, type JSX } from 'react'

interface ActionItem {
    label: string;
    value: string;
    icon: string | JSX.Element;
    action: () => void;
}

interface ActionsClickProps {
    actions: Array<ActionItem>;
    onClose?: () => void;
}

const ActionsClick: FC<ActionsClickProps> = ({ actions, onClose }) => {
    const dropdownRef = useRef<HTMLUListElement>(null);

    // Kənarda click edəndə bağlanması üçün
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onClose?.();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const handleSelect = (actionItem: ActionItem) => {
        actionItem.action(); // Həmin action-un funksiyasını çağırır
        onClose?.(); // Dropdown-u bağlayır
    };

    return (
        <ul 
            ref={dropdownRef}
            className="min-w-[157px] absolute right-0 top-6 bg-white border border-[#2463EB] rounded-[8px] shadow-lg py-4 px-2.5 z-10 min-w-[120px] bg-[#E5E6E1] gap-4 "
        >
            {actions.map((actionItem, index) => (
                <li 
                    key={index}
                    onClick={() => handleSelect(actionItem)}
                    className={`group px-4 py-2 text-xs font-semibold text-[#494947] hover:bg-[#2463EB] hover:text-white rounded-[4px] px-[6px] py-1 
                        cursor-pointer flex justify-start items-center gap-2 font-[Helvetica Neue] ${ index !== 0 ? "border-t border-[#BEBFC1]" : ""}`}
                >
                  {typeof actionItem.icon === 'string' ? (
                    <img
                      className='w-3 h-3 object-cover'
                      src={actionItem.icon}
                      alt={actionItem.label}
                    />
                  ) : (
                    actionItem.icon
                  )}  {actionItem.label}
                </li>
            ))}
        </ul>
    )
}

export default ActionsClick