import { FC } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

type Props = {
	thumbnail: string;
	views: string;
	timeStamp: string;
	title: string;
	uploadedAt: string;
	vidLink: string;
	channelName: string;
	chnLink: string;
	desc: string;
	classes?: string;
};

const Section: FC<Props> = ({
	thumbnail,
	timeStamp,
	title,
	uploadedAt,
	vidLink,
	views,
	channelName,
	chnLink,
	desc,
}) => {
	return (
		<div className={`flex m-3 md:m-0 gap-2 flex-col'`} key={uuidv4()}>
			<Link
				to={`/watch?v=${vidLink}`}
				className={`relative w-40 sm:w-60 lg:w-72 h-28 sm:h-36 lg:h-44 rounded-md overflow-hidden bg-indigo-200/40 `}
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

			<div className='flex-1'>
				<Link to={`/watch?v=${vidLink}`}>
					<h1 className='w-full md:w-10/12 lg:w-3/5 font-bold md:font-medium line-clamp-2 text-sm md:text-base dark:text-slate-300'>
						{title}
					</h1>
				</Link>
				<p className='text-xs text-slate-600 dark:text-dark-text mt-1'>
					{uploadedAt}
				</p>

				<div className='flex gap-1.5 items-center my-1.5 md:my-3'>
					<Link to={'ch/asd'}>
						<FaCircleUser className={`h-6 w-6`} />
					</Link>

					<Link
						to={`ch/${chnLink}`}
						className='text-slate-700 dark:text-slate-400 text-sm font-medium flex-shrink-0'
					>
						{channelName}
					</Link>
				</div>
				<p className='text-sm text-slate-600 dark:text-dark-text line-clamp-2 w-full md:w-9/12'>
					{desc}
				</p>
			</div>
		</div>
	);
};

export default Section;
