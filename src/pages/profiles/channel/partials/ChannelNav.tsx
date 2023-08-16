import { FC, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

interface ChannelNavProps { }

const ChannelNav: FC<ChannelNavProps> = () => {

    const divRef = useRef<HTMLDivElement>(null)

    return <ul className='flex items-center ml-14 mt-7 gap-10'>
        <NavLink to={`featured`} className={({ isActive }) => (
            !isActive ? "text-gray-700/90 border-b-2 border-transparent px-5 py-2 font-medium" : "text-gray-800 border-b-2 border-gray-700 bg-gray-700/10 font-medium px-5 py-2"
        )}>HOME</NavLink>
        <NavLink to={`videos`} className={({ isActive }) => (
            !isActive ? "text-gray-700/90 border-b-2 border-transparent px-5 py-2 font-medium" : "text-gray-800 border-b-2 border-gray-700 bg-gray-700/10 font-medium px-5 py-2"
        )}>VIDEOS</NavLink>
        <NavLink to={`playlists`} className={({ isActive }) => (
            !isActive ? "text-gray-700/90 border-b-2 border-transparent px-5 py-2 font-medium" : "text-gray-800 border-b-2 border-gray-700 bg-gray-700/10 font-medium px-5 py-2"
        )}>PLAYLIST</NavLink>
        <NavLink to={`channels`} className={({ isActive }) => (
            !isActive ? "text-gray-700/90 border-b-2 border-transparent px-5 py-2 font-medium" : "text-gray-800 border-b-2 border-gray-700 bg-gray-700/10 font-medium px-5 py-2"
        )}>CHANNELS</NavLink>
        <NavLink to={`about`} className={({ isActive }) => (
            !isActive ? "text-gray-700/90 border-b-2 border-transparent px-5 py-2 font-medium" : "text-gray-800 border-b-2 border-gray-700 bg-gray-700/10 font-medium px-5 py-2"
        )}>ABOUT</NavLink>
        <NavLink to={`@stacklearner7`} className={({ isActive }) => (
            !isActive ? "text-gray-700/90 border-b-2 border-transparent px-5 py-2 font-medium" : "text-gray-800 border-b-2 border-gray-700 bg-gray-700/10 font-medium px-5 py-2"
        )}><FiSearch /></NavLink>
    </ul>
}

export default ChannelNav