import React from 'react';
import { FiRotateCcw } from 'react-icons/fi';

type Props = {
	title: string;
	link: string;
	refThumbnail: string;
};

const Advertise = ({ title, link, refThumbnail }: Props) => {
	return (
		<div className='w-full flex justify-between items-end absolute bottom-14'>
			<div className='bg-white flex items-center gap-2 w-fit px-2 py-3 rounded-md overflow-hidden ml-3'>
				{/* logo */}
				<div className=' w-10 h-10 bg-emerald-500/70 p-1.5 rounded-full'>
					<FiRotateCcw className='w-full h-full text-white' />
				</div>

				<div>
					<h1 className='text-sm font-[500] -mb-1'>{title}</h1>
					<span className='text-sm text-slate-500'>{link}</span>
				</div>

				<button className='bg-indigo-700 text-sm text-slate-200 px-2 py-1 rounded-2xl ml-2'>
					Try Now
				</button>
			</div>
			<div className='bg-black/40 overflow-hidden'>
				{true ? (
					<div className='flex items-center h-10 '>
						<p
							className='bg-black/30 font-[500]
                         text-white px-2.5 py-2 h-full'
						>
							5
						</p>
						<div className='w-14 h-full'>
							<img
								src={
									refThumbnail &&
									`${
										import.meta.env.VITE_API_URI
									}/static/thumbnails/${refThumbnail}`
								}
								className='h-full w-full object-cover'
								crossOrigin='anonymous'
								alt=''
							/>
						</div>
					</div>
				) : (
					<button
						type='button'
						className='w-full h-full text-slate-300 px-4 py-2.5 bg-black/20 hover:bg-black/50 hover:text-slate-200 tracking-wide'
					>
						Skip Ads
					</button>
				)}
			</div>
		</div>
	);
};

export default Advertise;
