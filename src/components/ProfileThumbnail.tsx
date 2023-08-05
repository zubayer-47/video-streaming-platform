import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { trunc } from '../libs/helper';

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
	//className={`rounded-md object-cover ${!isList ? "w-full max-h-56 md:max-h-52" : "w-40 max-h-24"}`}
	return (
		<div
			className={`flex m-3 md:m-0 gap-2 ${!isList ? 'flex-col' : 'flex-row'}`}
		>
			<Link
				to={vidLink}
				className={`relative rounded-md overflow-hidden ${
					!isList ? 'w-full max-h-52 md:max-h-36' : 'w-40 max-h-24'
				}`}
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

			<div className='flex-1 flex gap-2'>
				{!isList && <FaCircleUser className='h-7 w-7' />}
				<div className='flex-1 flex flex-col gap-1'>
					<Link
						to={vidLink}
						className={`text-sm tracking-wide text-gray-800 ${
							!isList ? 'font-semibold' : 'font-medium'
						}`}
					>
						{trunc(title, 70)}
					</Link>
					<div
						className={`flex items-center text-xs tracking-wide ${
							!isList ? 'gap-3' : 'gap-1.5'
						}`}
					>
						<Link
							to={chnLink}
							className='text-gray-700 font-medium flex-shrink-0'
						>
							{trunc(channelName, channelLen)}
						</Link>

						<p className='text-gray-500 flex-shrink-0'>{uploadedAt} ago</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileThumbnail;
