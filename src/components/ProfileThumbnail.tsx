import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

type Props = {
	thumbnail: string;
	views: string;
	timetamp: string;
	title: string;
	uploadedAt: string;
	channelName: string;
	vidLink: string;
	chnLink: string;
	isList?: boolean;
};

const ProfileThumbnail = ({
	thumbnail,
	views,
	timetamp,
	title,
	uploadedAt,
	channelName,
	vidLink = '/',
	chnLink = '/',
	isList = false,
}: Props) => {
	const channelLen = !isList ? 15 : 10;
	//max-h-56 md:max-h-52 h-2/5
	return (
		<div className={`m-3 md:m-0`}>
			<Link
				to={vidLink}
				className='relative w-full h-2/5 rounded-md overflow-hidden'
			>
				<img
					className='w-full h-full object-cover'
					src={thumbnail}
					alt='thumbnail'
				/>

				<div className='absolute bottom-1 right-1 flex gap-1'>
					<p className='bg-gray-900/80 text-white rounded-md py-1 px-1.5 text-xs tracking-wider'>
						{views}
					</p>
					<p className='bg-gray-900/80 text-white rounded-md py-1 px-1.5 text-xs tracking-wider'>
						{timetamp}
					</p>
				</div>
			</Link>

			<div className='flex gap-2'>
				{!isList && <FaCircleUser className='h-10 w-10' />}
				<div className='flex flex-col gap-1'>
					<Link
						to={vidLink}
						className='font-semibold text-sm tracking-wide text-gray-800'
					>
						{title}
					</Link>
					<div className={`flex items-center ${!isList ? 'gap-3' : 'gap-1.5'}`}>
						{isList && <FaCircleUser className='h-6 w-6' />}
						<Link
							to={chnLink}
							className='text-sm text-gray-700 tracking-wide font-medium'
						>
							{channelName.length > channelLen
								? channelName.split('').slice(0, channelLen).join('') + '...'
								: channelName}
						</Link>

						<p className='text-gray-500 text-sm'>{uploadedAt} ago</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileThumbnail;
