export default function SelectInput({
    label,
    options,
    className,
}: {
    label: string;
    options: string[];
    className?: string;
}) {
    return (
        <div
            className={`relative text-black w-full lg:w-[300px] h-[45px] border-[0.5px] border-[#00000026] rounded-[10px] ps-5 pe-4 ${className}`}
        >
            <span className="absolute text-xs bg-white -top-2 w-[45px] text-center left-3">
                {label}
            </span>
            <select className="size-full outline-0 text-xs font-medium">
                {options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}
