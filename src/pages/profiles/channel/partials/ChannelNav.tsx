import { FiSearch } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const ChannelNav = () => {
	return (
		<ul className='flex items-center gap-8 mt-5'>
			<li className='flex justify-center items-center h-full'>
				<NavLink
					to={`featured`}
					className={({ isActive }) =>
						!isActive
							? 'text-gray-700/90 border-b-2 border-transparent px-5 py-2 font-medium dark:text-slate-300'
							: 'text-gray-800 border-b-2 border-gray-700 bg-gray-700/10 dark:bg-dark-overlay-100 dark:hover:bg-dark-overlay-200 dark:text-slate-300 dark:border-dark-text/70 font-medium px-5 py-2'
					}
				>
					HOME
				</NavLink>
			</li>
			<li className='flex justify-center items-center h-full'>
				<NavLink
					to={`videos`}
					className={({ isActive }) =>
						!isActive
							? 'text-gray-700/90 border-b-2 border-transparent px-5 py-2 font-medium dark:text-slate-300'
							: 'text-gray-800 border-b-2 border-gray-700 bg-gray-700/10 dark:bg-dark-overlay-100 dark:hover:bg-dark-overlay-200 dark:text-slate-300 dark:border-dark-text/70 font-medium px-5 py-2'
					}
				>
					VIDEOS
				</NavLink>
			</li>
			<li className='flex justify-center items-center h-full'>
				<NavLink
					to={`playlists`}
					className={({ isActive }) =>
						!isActive
							? 'text-gray-700/90 border-b-2 border-transparent px-5 py-2 font-medium dark:text-slate-300'
							: 'text-gray-800 border-b-2 border-gray-700 bg-gray-700/10 dark:bg-dark-overlay-100 dark:hover:bg-dark-overlay-200 dark:text-slate-300 dark:border-dark-text/70 font-medium px-5 py-2'
					}
				>
					PLAYLISTS
				</NavLink>
			</li>
			<li className='flex justify-center items-center h-full'>
				<NavLink
					to={`about`}
					className={({ isActive }) =>
						!isActive
							? 'text-gray-700/90 border-b-2 border-transparent px-5 py-2 font-medium dark:text-slate-300'
							: 'text-gray-800 border-b-2 border-gray-700 bg-gray-700/10 dark:bg-dark-overlay-100 dark:hover:bg-dark-overlay-200 dark:text-slate-300 dark:border-dark-text/70 font-medium px-5 py-2'
					}
				>
					ABOUT
				</NavLink>
			</li>
			<li className='flex justify-center items-center h-full'>
				<NavLink
					to={`@stacklearner7`}
					className={({ isActive }) =>
						!isActive
							? 'text-gray-700/90 border-b-2 border-transparent px-5 py-2 font-medium dark:text-slate-300'
							: 'text-gray-800 border-b-2 border-gray-700 bg-gray-700/10 dark:bg-dark-overlay-100 dark:hover:bg-dark-overlay-200 dark:text-slate-300 dark:border-dark-text/70 font-medium px-5 py-2'
					}
				>
					<FiSearch />
				</NavLink>
			</li>
		</ul>
	);
};

export default ChannelNav;
