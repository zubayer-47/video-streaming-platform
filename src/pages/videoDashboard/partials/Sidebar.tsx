import { PiHouseFill } from 'react-icons/pi';

export default function Sidebar() {
	return (
		<div className='hidden md:w-3/12 lg:w-3/12 xl:w-2/12 pt-20 md:flex flex-col h-screen overflow-y-auto bg-indigo-100/40'>
			{new Array(40).fill(true).map(() => (
				<button
					type='button'
					className='flex items-center gap-4 px-3 py-2 font-[500] hover:bg-indigo-200'
				>
					<PiHouseFill className='w-6 h-6' /> <span>Home</span>
				</button>
			))}
		</div>
	);
}
