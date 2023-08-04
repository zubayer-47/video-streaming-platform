import { FC } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { PiUserSquare } from "react-icons/pi";

type UserModalProps = {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const UserModal: FC<UserModalProps> = ({ setOpen }) => {

    const onClose = () => setOpen(false)

    return (
        <div className="absolute right-0 top-10 bg-white rounded-xl shadow-xl">
            <div className="grid grid-cols-5 gap-4 border-b p-3">
                <p className="col-span-1">
                    <FaCircleUser className="w-8 h-8" />
                </p>

                <div className="col-span-4">
                    <p>Zubayer Developer</p>
                    <p>@ZubayerDeveloper</p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-start gap-5 border-b p-4">
                <button onClick={onClose} type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                <button onClick={onClose} type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                <button onClick={onClose} type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                <button onClick={onClose} type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
            </div>
            <div className="flex flex-col justify-center items-start gap-5 border-b p-4">
                <button onClick={onClose} type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                <button onClick={onClose} type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                <button onClick={onClose} type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                <button onClick={onClose} type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
            </div>
        </div>
    )
}

export default UserModal