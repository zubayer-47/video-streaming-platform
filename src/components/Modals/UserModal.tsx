import { FC } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FiLogOut, FiSettings, FiUser } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import { BooleanSetStateType } from "../../types/custom";

type UserModalProps = {
    isOpen: boolean;
    setOpen: BooleanSetStateType
}

const UserModal: FC<UserModalProps> = ({ setOpen }) => {
    const userContext = useAuth();
    const onSignOut = () => {
        userContext.logout();
        setOpen(false)
    }

    return (
        <div className="w-full sm:w-72 fixed right-0 md:right-5 top-14 bg-gray-100 rounded-xl shadow-2xl z-30 overflow-hidden">
            <div className="flex gap-4 border-b border-gray-300 p-3">
                <FaCircleUser className="w-9 h-9" />
                <div className="">
                    <p>Zubayer Developer</p>
                    <p>@ZubayerDeveloper</p>
                </div>
            </div>

            <div className="border-b border-gray-300 p-4 space-y-5">
                <button type="button" className="flex  items-center gap-4"> <FiUser className="w-6 h-6" /> <span>Your Channel</span></button>
                <button onClick={onSignOut} type="button" className="flex  items-center gap-4"> <FiLogOut className="w-6 h-6" /> <span>Sign out</span></button>
            </div>
            <div className="border-b border-gray-300 p-4 space-y-5">
                <button type="button" className="flex  items-center gap-4"> <FiSettings className="w-6 h-6" /> <span>Settings</span></button>
            </div>
        </div>
    )
}

export default UserModal;