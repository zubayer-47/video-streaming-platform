import { useState } from 'react';
import { BiListPlus } from 'react-icons/bi';
import { FaCircleUser } from 'react-icons/fa6';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';
// import VideoFile from '../../../../assets/array.mp4';
import dayjs from 'dayjs';
import FollowButton from '../../../../components/Buttons/FollowButton';
import { trunc } from '../../../../libs/helper';
import { MetaDataType } from '../../../../types/custom';
// import CommentSection from './CommentSection';

type VideoBodyProps = {
	videoId: string;
	metaData: MetaDataType;
};

const VideoBody: React.FC<VideoBodyProps> = ({ videoId, metaData }) => {
	const [descStatus, setDescStatus] = useState(false);

	return (
		<div className='flex-1 flex flex-col w-full h-fit'>
			{/* <VideoPlayer source={VideoFile} /> */}

			{/* <div className='flex flex-col lg:flex-row gap-5'>
				<VideoPlayer source={videoId!} thumbnail={metaData.thumbnail} />

				{query.has('p') && (
					<Playlist playlist={metaData.playlist} isLoading={false} />
				)}
			</div> */}

			<p className='mt-2.5 text-lg font-semibold text-slate-800 dark:text-slate-200'>
				{/* How to Build Your Perfect Resume: Learn from a FAANG Employee Example! */}
				{metaData.title}
			</p>

			<div className='flex justify-between gap-3 my-5'>
				<div className='flex gap-2 items-center'>
					<Link to={`/ch/${metaData.channelId}`} type='button'>
						<FaCircleUser className='h-10 w-10' />
					</Link>
					<p className='flex flex-col justify-center'>
						<Link
							to={`/ch/${metaData.channelId}`}
							className='font-bold dark:text-slate-200 text-inherit'
						>
							{metaData?.channel?.name}
						</Link>
						<span className='text-sm text-gray-800 dark:text-slate-400'>
							{metaData.followers} followers
						</span>
					</p>

					<FollowButton channel_id={metaData.channelId} />
				</div>

				<div className='flex gap-2 items-center'>
					<div className='bg-indigo-100 dark:bg-dark-overlay-100 rounded-full overflow-hidden'>
						<button
							type='button'
							className='flex items-center gap-1 px-3 border-black dark:hover:bg-dark-overlay-200 py-2 h-full w-full'
						>
							<BiListPlus className='h-6 w-6 text-indigo-700 dark:text-slate-300' />
							<span className='dark:text-slate-300 text-inherit'>
								watch later
							</span>
						</button>
					</div>
					<div className='flex items-center bg-indigo-100 dark:bg-dark-overlay-100 rounded-full overflow-hidden'>
						<button
							type='button'
							className='flex items-center gap-1.5 px-3 border-black dark:hover:bg-dark-overlay-200 py-2 h-full w-full'
						>
							<FiThumbsUp className='h-6 w-6 text-indigo-700 dark:text-slate-300' />
							<span className='dark:text-slate-300 text-inherit'>630</span>
						</button>
						<span className='w-1 h-6 bg-gray-800 dark:bg-slate-300'></span>
						<button
							type='button'
							className='px-3 border-black dark:hover:bg-dark-overlay-200 py-2 h-full w-full'
						>
							<FiThumbsDown className='h-6 w-6 dark:text-slate-300' />
						</button>
					</div>
				</div>
			</div>

			<div
				onClick={() => (!descStatus ? setDescStatus(true) : undefined)}
				className={`text-left bg-indigo-100/70 hover:bg-indigo-100 dark:bg-dark-overlay-100 dark:hover:bg-dark-overlay-200 p-3 rounded-xl ${
					!descStatus ? 'cursor-pointer' : 'cursor-text'
				}`}
			>
				<p className='font-medium space-x-2'>
					<span className='dark:text-slate-300'>6k views</span>
					<span className='text-dark-text text-sm'>
						{dayjs(metaData.createdAt).toNow(true)}
					</span>
				</p>
				<p className='font-normal text-gray-700 dark:text-slate-300 mt-3'>
					{trunc(metaData?.description || '', !descStatus ? 150 : undefined)}
					<button
						onClick={() => {
							setDescStatus(false);
							console.log(descStatus);
						}}
						className={`font-bold ${
							!descStatus ? 'inline-block ml-2' : 'block ml-auto'
						}`}
					>
						{!descStatus ? 'more' : 'Show less'}
					</button>
				</p>
			</div>
			{/* <CommentSection /> */}
		</div>
	);
};

export default VideoBody;
