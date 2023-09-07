import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { trunc } from '../libs/helper';

type Props = {
	thumbnail: string;
	views: string;
	timeStamp: string;
	title: string;
	uploadedAt: string;
	vidLink: string;
	channelName?: string;
	chnLink?: string;
	isProfileIconVisible?: boolean;
	isList?: boolean;
	classes?: string;
};

const ProfileThumbnail = ({
	thumbnail,
	views,
	timeStamp,
	title,
	uploadedAt,
	channelName,
	vidLink,
	chnLink,
	isProfileIconVisible,
	isList = false,
	classes,
}: Props) => {
	const channelLen = !isList ? 15 : 10;

	return (
		<div
			className={`flex m-3 md:m-0 gap-2 ${!isList ? 'flex-col' : 'flex-row'}`}
		>
			<Link
				to={vidLink}
				className={`relative block rounded-md overflow-hidden bg-indigo-200/40 ${
					!isList
						? 'w-full h-52 sm:h-[11rem] md:h-[10rem] lg:h-[12rem]'
						: 'w-40 h-24'
				} ${classes}`}
			>
				<img
					className='w-full h-full object-cover'
					src={thumbnail}
					alt='thumbnail'
					crossOrigin='anonymous'
				/>

				<div className='absolute bottom-1 right-1 flex gap-1'>
					<p className='bg-gray-900/80 text-white rounded-md py-1 px-1.5 text-xs tracking-wider'>
						{views}
					</p>
					<p className='bg-gray-900/80 text-white rounded-md py-1 px-1.5 text-xs tracking-wider'>
						{timeStamp}
					</p>
				</div>
			</Link>

			<div className='flex-1 flex gap-2'>
				{!isList && chnLink && (
					<Link to={chnLink}>
						<FaCircleUser
							className={`h-9 w-9 ${
								!isProfileIconVisible ? 'block' : 'hidden'
							}`}
						/>
					</Link>
				)}
				<div className='flex-1 flex flex-col gap-1.5'>
					<Link
						to={vidLink}
						className={`text-sm tracking-wide dark:text-slate-300 text-slate-800 ${
							!isList
								? 'font-semibold line-clamp-2'
								: 'font-medium line-clamp-3'
						}`}
					>
						{/* {trunc(title, 20)} */}
						{title}
					</Link>
					<div
						className={`flex items-center text-xs tracking-wide ${
							!isList ? 'gap-3' : 'gap-1.5'
						}`}
					>
						{!chnLink || !channelName ? null : (
							<Link
								to={chnLink}
								className={`font-medium flex-shrink-0 dark:text-slate-400 text-slate-700`}
							>
								{trunc(channelName, channelLen)}
							</Link>
						)}

						<p className={`flex-shrink-0 dark:text-slate-400 text-slate-700`}>
							{uploadedAt} ago
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileThumbnail;
