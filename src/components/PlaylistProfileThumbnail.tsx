import { FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { trunc } from '../libs/helper';

type Props = {
	thumbnail: string;
	timeStamp: string;
	title: string;
	uploadedAt: string;
	vidLink: string;
	channelName?: string;
	chnLink?: string;
	isProfileIconVisible?: boolean;
	isActive?: boolean;
	classes?: string;
};

const PlaylistProfileThumbnail = ({
	thumbnail,
	timeStamp,
	title,
	uploadedAt,
	channelName,
	vidLink,
	chnLink,
	isActive = false,
	classes,
}: Props) => {
	//max-h-56 md:max-h-52 h-2/5
	//className={`rounded-md object-cover ${!isList ? "w-full max-h-56 md:max-h-52" : "w-40 max-h-24"}`}
	return (
		<div className='flex m-3 md:m-0 gap-2 '>
			<div className='flex items-center gap-1'>
				{!isActive ? (
					<span className='w-4 h-4' />
				) : (
					<FiPlay className='w-4 h-4 dark:text-dark-text' />
				)}
				<Link
					to={vidLink}
					className={`relative block rounded-md overflow-hidden bg-indigo-200/40 w-32 max-h-24 ${classes}`}
				>
					<img
						className='w-full h-full object-cover'
						src={thumbnail}
						alt='thumbnail'
						crossOrigin='anonymous'
					/>

					<div className='absolute bottom-1 right-1 flex gap-1'>
						<p className='bg-gray-900/80 text-white rounded-md py-0.5 px-1 text-xs tracking-wider'>
							{timeStamp}
						</p>
					</div>
				</Link>
			</div>

			<div className='flex-1 flex gap-2'>
				<div className='flex-1 flex flex-col gap-1.5'>
					<Link
						to={vidLink}
						className={`text-sm tracking-wide text-slate-800 dark:text-slate-300 font-semibold line-clamp-2`}
					>
						{/* {trunc(title, 20)} */}
						{title}
					</Link>
					<div className={`flex items-center text-xs tracking-wide gap-1.5`}>
						{!chnLink || !channelName ? null : (
							<Link
								to={chnLink}
								className='text-gray-700 dark:text-gray-400 font-medium flex-shrink-0'
							>
								{trunc(channelName, 10)}
							</Link>
						)}

						<p className='text-gray-500 flex-shrink-0 dark:text-dark-text'>
							{uploadedAt} ago
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlaylistProfileThumbnail;
