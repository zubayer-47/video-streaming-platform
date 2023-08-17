import { FiMusic, FiPlay, FiThumbsUp } from 'react-icons/fi';
import { PiHouseFill } from 'react-icons/pi';
import { RiFireLine } from 'react-icons/ri';
import { SiYoutubegaming } from 'react-icons/si';
import { TfiCup } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

export default function Sidebar() {
	return (
		<div className='hidden md:w-3/12 lg:w-3/12 xl:w-2/12 mt-[67px] md:flex flex-col overflow-y-auto bg-indigo-100/40 scrollbar-thin scrollbar-track-gray-200/90 scrollbar-thumb-gray-400/90 scrollbar-thumb-rounded-full'>
			<Link to='/'
				type='button'
				className='flex items-center gap-4 px-3 py-2 font-[500] hover:bg-gray-400/20'
			>
				<PiHouseFill className='w-6 h-6' /> <span>Home</span>
			</Link>
			<Link to='/'
				type='button'
				className='flex items-center gap-4 px-3 py-2 font-[500] hover:bg-gray-400/20'
			>
				<FiPlay className='w-5 h-5  border border-gray-500 p-1' /> <span>Your videos</span>
			</Link>
			<Link to='/'
				type='button'
				className='flex items-center gap-4 px-3 py-2 font-[500] hover:bg-gray-400/20'
			>
				<FiThumbsUp className='w-5 h-5' /> <span>Likes videos</span>
			</Link>

			<hr className='border border-gray-300/50 my-5' />

			<h1 className='text-lg font-medium ml-5 mb-2'>Explore</h1>
			<Link to='/'
				type='button'
				className='flex items-center gap-4 px-3 py-2 font-[500] hover:bg-gray-400/20'
			>
				<RiFireLine className='w-6 h-6' /> <span>Trending</span>
			</Link>
			<Link to='/'
				type='button'
				className='flex items-center gap-4 px-3 py-2 font-[500] hover:bg-gray-400/20'
			>
				<FiMusic className='w-5 h-5' /> <span>Music</span>
			</Link>
			<Link to='/'
				type='button'
				className='flex items-center gap-4 px-3 py-2 font-[500] hover:bg-gray-400/20'
			>
				<SiYoutubegaming className='w-6 h-6' /> <span>Gaming</span>
			</Link>
			<Link to='/'
				type='button'
				className='flex items-center gap-4 px-3 py-2 font-[500] hover:bg-gray-400/20'
			>
				<TfiCup className='w-5 h-5' /> <span>Sports</span>
			</Link>
		</div>
	);
}
