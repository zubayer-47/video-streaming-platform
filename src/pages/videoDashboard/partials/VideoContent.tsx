import dayjs from 'dayjs';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import demoImg from '../../../assets/demo.jpg';

export default function VideoContent() {
	const channelName = 'Standford Graduate School of Business';
	const createdAt = dayjs('2023-08-04').toNow(true);

	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-4 pb-10'>
			{new Array(30).fill(true).map(() => (
				<div className=''>
					<Link to={'/'} className='relative'>
						<img
							className='max-h-56 md:max-h-52 w-full rounded-md object-cover'
							src={demoImg}
							alt='thumbnail'
						/>

						<div className='absolute bottom-1 right-1 flex gap-1'>
							<p className='bg-gray-900/80 text-white rounded-md py-1 px-1.5 text-xs tracking-wider'>
								7.6M
							</p>
							<p className='bg-gray-900/80 text-white rounded-md py-1 px-1.5 text-xs tracking-wider'>
								11:43:21
							</p>
						</div>
					</Link>

					<div className='flex gap-2 mt-3'>
						<FaCircleUser className='h-12 w-12' />
						<div className='flex flex-col gap-1'>
							<Link
								to='/'
								className='font-semibold text-sm tracking-wide text-gray-800'
							>
								LEADERSHIP LAB: The Craft of Writing Effectively UChicago Social
								Sciences
							</Link>
							<div className='flex items-center gap-3'>
								<Link
									to={'/'}
									className='text-sm text-gray-700 tracking-wide font-medium'
								>
									{channelName.length > 20
										? channelName.split('').slice(0, 20).join('') + '...'
										: channelName}
								</Link>

								<p className='text-gray-500 text-sm'>{createdAt} ago</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
