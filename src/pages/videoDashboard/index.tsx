import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState } from "react";
import { FaCircleUser } from 'react-icons/fa6';
import UserModal from "../../components/Modals/UserModal";
import SearchBar from "../../components/SearchBar";
import Sidebar from "./partials/Sidebar";
import Tags from "./partials/Tags";
import VideoContent from "./partials/VideoContent";
dayjs.extend(relativeTime);

export default function VideoDashboard() {
    const [showUserModal, setShowUserModal] = useState(false);

    const handleModal = () => setShowUserModal(prev => !prev)
    return (
        // <PageLayout>
        <>
            <div className="fixed top-0 right-0 left-0 z-40 bg-indigo-50 grid grid-cols-12 gap-3 p-2">
                <div className="col-span-4 ">
                    <span>Cloned YouTube</span>
                </div>
                <div className="col-span-4 text-center">
                    <SearchBar />
                </div>
                <div className="col-span-4 relative">
                    {/* <FiUser className="w-8 h-8" /> */}
                    <button type="button" onClick={handleModal} className="w-full">
                        <FaCircleUser className="w-8 h-8 absolute right-0 top-1" />
                    </button>

                    {!showUserModal ? null : (
                        <UserModal isOpen={showUserModal} setOpen={setShowUserModal} />
                    )}
                </div>
            </div>

            <div className="w-full flex pt-20">
                <Sidebar />
                <div className="flex-1">
                    <Tags />
                    <VideoContent />
                </div>
            </div>
        </>
        // </PageLayout>
    )
}
