import { useState } from "react";
import { FaCircleUser } from 'react-icons/fa6';
import UserModal from "../../components/Modals/UserModal";
import SearchBar from "../../components/SearchBar";

export default function VideoDashboard() {
    const [showUserModal, setShowUserModal] = useState(false);

    const handleModal = () => setShowUserModal(prev => !prev)

    return (
        // <PageLayout>
        <div className="h-screen bg-indigo-50">
            <div className="grid grid-cols-12 gap-3 p-2">
                <div className="col-span-4 ">
                    <span>Cloned YouTube</span>
                </div>
                <div className="col-span-4 text-center">
                    <SearchBar />
                </div>
                <div className="col-span-4 relative">
                    {/* <FiUser className="w-8 h-8" /> */}
                    <button type="button" onClick={handleModal} className="w-full flex justify-end">
                        <FaCircleUser className="w-8 h-8" />
                    </button>

                    {!showUserModal ? null : (
                        <UserModal isOpen={showUserModal} setOpen={setShowUserModal} />
                    )}
                </div>
            </div>
        </div>
        // </PageLayout>
    )
}
