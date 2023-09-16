import { FiClock, FiPlay, FiThumbsUp } from 'react-icons/fi';
import { PiHouseFill } from 'react-icons/pi';
import { RiFireLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Sidebar() {
	return (
		<div className='hidden md:w-3/12 lg:w-3/12 xl:w-2/12 mt-[61px] md:flex flex-col overflow-y-auto bg-indigo-100/40 dark:bg-black/10 scrollbar-thin scrollbar-track-gray-200/90 scrollbar-thumb-gray-400/90 scrollbar-thumb-rounded-full'>
			<Link
				to='/'
				type='button'
				className='flex items-center gap-4 px-3 py-2 font-[500] hover:bg-gray-400/20 dark:text-slate-300'
			>
				<PiHouseFill className='w-6 h-6' /> <span>Home</span>
			</Link>
			<Link
				to='/'
				type='button'
				className='flex items-center gap-4 px-3 py-2 font-[500] hover:bg-gray-400/20 dark:text-slate-300'
			>
				<FiPlay className='w-5 h-5  border border-gray-500 p-1' />{' '}
				<span>Your videos</span>
			</Link>
			<Link
				to='/'
				type='button'
				className='flex items-center gap-4 px-3 py-2 font-[500] hover:bg-gray-400/20 dark:text-slate-300'
			>
				<FiThumbsUp className='w-5 h-5' /> <span>Liked videos</span>
			</Link>

			<hr className='border border-gray-300/50 my-5' />

			<h1 className='text-lg font-medium ml-5 mb-2 dark:text-slate-300'>
				Explore
			</h1>
			<Link
				to='/'
				type='button'
				className='flex items-center gap-4 px-3 py-2 font-[500] hover:bg-gray-400/20 dark:text-slate-300'
			>
				<RiFireLine className='w-6 h-6' /> <span>Trending</span>
			</Link>
			<Link
				to='/result?sec=history'
				type='button'
				className='flex items-center gap-4 px-3 py-2 font-[500] hover:bg-gray-400/20 dark:text-slate-300'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
					/>
				</svg>
				<span>History</span>
			</Link>
			<Link
				to='/result?sec=wl'
				type='button'
				className='flex items-center gap-4 px-3 py-2 font-[500] hover:bg-gray-400/20 dark:text-slate-300'
			>
				<FiClock className='w-6 h-6' /> <span>Watch Later</span>
			</Link>
		</div>
	);
}
