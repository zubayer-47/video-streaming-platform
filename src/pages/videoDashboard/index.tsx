import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState } from "react";
import { FaCircleUser } from 'react-icons/fa6';
import demoImg from '../../assets/demo.jpg';
import UserModal from "../../components/Modals/UserModal";
import SearchBar from "../../components/SearchBar";

dayjs.extend(relativeTime);

export default function VideoDashboard() {
    const [showUserModal, setShowUserModal] = useState(false);

    const handleModal = () => setShowUserModal(prev => !prev)

    const channelName = 'Standford Graduate School of Business';
    const createdAt = dayjs('2023-08-04').toNow(true)

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

            <div className="grid grid-cols-11 xl:grid-cols-7 gap-4 mx-2">
                <div className="col-span-1 xl:col-span-1">
                    <div>
                        something
                    </div>
                </div>
                <div className="col-span-5 xl:col-span-2">
                    <div className="relative">
                        <img className="max-h-56 w-full rounded-md object-cover" src={demoImg} alt="thumbnail" />

                        <div className="absolute bottom-1 right-1 flex gap-1">
                            <p className="bg-gray-900/95 text-white rounded-md px-1">7 .6M</p>
                            <p className="bg-gray-900/95 text-white rounded-md px-1">11:43:21</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-8 gap-2 place-items-center mt-2">
                        <FaCircleUser className="h-10 w-10 col-span-1" />
                        <h1 className="font-semibold tracking-wide col-span-7">
                            LEADERSHIP LAB: The Craft of Writing Effectively UChicago Social Sciences
                        </h1>
                    </div>
                    <div className="grid grid-cols-8 place-items-start items-center">
                        <div className="col-start-2 col-span-7 w-full flex justify-between mt-2">
                            <p className="text-gray-700 tracking-wide">{channelName.length > 25 ? channelName.split('').slice(0, 25).join('') + '...' : channelName}</p>

                            <p className="text-gray-700">{createdAt} ago</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-5">
                    <div className="relative">
                        <img className="max-h-56 w-full rounded-lg object-cover" src={demoImg} alt="thumbnail" />

                        <div className="absolute bottom-1 right-1 flex gap-1">
                            <p className="bg-gray-900/95 text-white rounded-md px-1">7 .6M</p>
                            <p className="bg-gray-900/95 text-white rounded-md px-1">11:43:21</p>
                        </div>
                    </div>

                    <h1>LEADERSHIP LAB: The Craft of Writing Effectively
                        UChicago Social Sciences</h1>
                </div>

                <div className="col-span-5">
                    <div className="relative">
                        <img className="max-h-56 w-full rounded-md object-cover" src={demoImg} alt="thumbnail" />

                        <div className="absolute bottom-1 right-1 flex gap-1">
                            <p className="bg-gray-900/95 text-white rounded-md px-1">7 .6M</p>
                            <p className="bg-gray-900/95 text-white rounded-md px-1">11:43:21</p>
                        </div>
                    </div>

                    <h1>LEADERSHIP LAB: The Craft of Writing Effectively
                        UChicago Social Sciences</h1>
                </div>
            </div>
        </div>
        // </PageLayout>
    )
}
