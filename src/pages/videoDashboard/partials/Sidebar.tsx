import { PiHouseFill } from "react-icons/pi";

export default function Sidebar() {
    return (
        <div className="w-96 overflow-y-auto">
            {new Array(30).fill(true).map(() => (
                <button type="button" className="flex  items-center gap-4 bg-indigo-200/60 px-3 py-2 rounded-lg font-[500]"> <PiHouseFill className="w-6 h-6" /> <span>Home</span></button>
            ))}
        </div>
    )
}
