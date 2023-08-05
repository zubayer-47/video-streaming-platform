import { PiHouseFill } from 'react-icons/pi';

export default function Sidebar() {
	return (
		<div className='hidden md:w-1/6 h-[92vh] md:flex flex-col overflow-y-scroll bg-indigo-100/40'>
			{new Array(30).fill(true).map(() => (
				<button
					type='button'
					className='flex items-center gap-4 px-3 py-2 font-[500] hover:bg-indigo-200'
				>
					{' '}
					<PiHouseFill className='w-6 h-6' /> <span>Home</span>
				</button>
			))}
		</div>
	);
}
