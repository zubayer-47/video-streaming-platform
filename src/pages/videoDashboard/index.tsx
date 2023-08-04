import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState } from "react";
import { FaCircleUser } from 'react-icons/fa6';
import { FiMenu } from "react-icons/fi";
import { PiHouseFill, PiUserSquare } from "react-icons/pi";
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
            <div className="fixed top-0 right-0 left-0 z-40 bg-indigo-50 flex flex-col justify-center pb-2">
                <div className="grid grid-cols-12 gap-3 p-2">
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

                <div className="grid grid-cols-11 gap-2">
                    <div className="col-start-3 col-end-12 flex justify-start gap-4 overflow-auto">
                        {new Array(30).fill(true).map(() => (
                            <button className="bg-indigo-200/40 w-fit rounded-md px-2 py-1">Tags</button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-initial md:grid-cols-md lg:grid-cols-lg xl:grid-cols-xl gap-2 bg-indigo-50 overflow-hidden h-full">
                <div className="block md:hidden mt-28">
                    <FiMenu />
                </div>
                <div className="hidden md:flex flex-col gap-3 overflow-auto mt-32">
                    <button type="button" className="flex  items-center gap-4 bg-indigo-200/60 px-3 py-2 rounded-lg font-[500]"> <PiHouseFill className="w-6 h-6" /> <span>Home</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                    <button type="button" className="flex  items-center gap-4"> <PiUserSquare className="w-6 h-6" /> <span>Your Channel</span></button>
                </div>

                <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10 gap-3 overflow-auto px-2 pt-32">
                    {new Array(30).fill(true).map(() => (
                        <div className="col-span-full md:col-span-2 max-w-full md:max-w-xs">
                            <div className="relative">
                                <img className="max-h-56 md:max-h-44 w-full rounded-md object-cover" src={demoImg} alt="thumbnail" />

                                <div className="absolute bottom-1 right-1 flex gap-1">
                                    <p className="bg-gray-900/95 text-white rounded-md px-1 text-xs">7 .6M</p>
                                    <p className="bg-gray-900/95 text-white rounded-md px-1 text-xs">11:43:21</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-8 gap-2 place-items-center mt-2">
                                <FaCircleUser className="h-8 w-8 col-span-1" />
                                <h1 className="font-semibold text-sm tracking-wide col-span-7">
                                    LEADERSHIP LAB: The Craft of Writing Effectively UChicago Social Sciences
                                </h1>
                            </div>
                            <div className="grid grid-cols-8 place-items-start items-center">
                                <div className="col-start-2 col-span-7 w-full flex justify-between mt-2">
                                    <p className="text-sm text-gray-700 tracking-wide">{channelName.length > 25 ? channelName.split('').slice(0, 25).join('') + '...' : channelName}</p>

                                    <p className="text-gray-700 text-sm">{createdAt} ago</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        // </PageLayout>
    )
}
