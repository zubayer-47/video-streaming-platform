import { FC } from 'react';
import { FiSearch } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

interface ChannelNavProps { }

const ChannelNav: FC<ChannelNavProps> = () => {
    return <ul className='flex items-center ml-14 mt-7 gap-10'>
        <NavLink to='/@stacklearner2' className={({ isActive }) => (
            !isActive ? "text-gray-700/90 border-b-2 border-transparent px-5 py-2 font-medium" : "text-gray-800 border-b-2 border-gray-700 bg-gray-700/10 font-medium px-5 py-2"
        )}>HOME</NavLink>
        <NavLink to='/@stacklearner3' className={({ isActive }) => (
            !isActive ? "text-gray-700/90 border-b-2 border-transparent px-5 py-2 font-medium" : "text-gray-800 border-b-2 border-gray-700 bg-gray-700/10 font-medium px-5 py-2"
        )}>VIDEOS</NavLink>
        <NavLink to='/@stacklearner4' className={({ isActive }) => (
            !isActive ? "text-gray-700/90 border-b-2 border-transparent px-5 py-2 font-medium" : "text-gray-800 border-b-2 border-gray-700 bg-gray-700/10 font-medium px-5 py-2"
        )}>PLAYLIST</NavLink>
        <NavLink to='/@stacklearner5' className={({ isActive }) => (
            !isActive ? "text-gray-700/90 border-b-2 border-transparent px-5 py-2 font-medium" : "text-gray-800 border-b-2 border-gray-700 bg-gray-700/10 font-medium px-5 py-2"
        )}>CHANNELS</NavLink>
        <NavLink to='/@stacklearner6' className={({ isActive }) => (
            !isActive ? "text-gray-700/90 border-b-2 border-transparent px-5 py-2 font-medium" : "text-gray-800 border-b-2 border-gray-700 bg-gray-700/10 font-medium px-5 py-2"
        )}>ABOUT</NavLink>
        <NavLink to='/@stacklearner7' className={({ isActive }) => (
            !isActive ? "text-gray-700/90 border-b-2 border-transparent px-5 py-2 font-medium" : "text-gray-800 border-b-2 border-gray-700 bg-gray-700/10 font-medium px-5 py-2"
        )}><FiSearch /></NavLink>
    </ul>
}
export default ChannelNav