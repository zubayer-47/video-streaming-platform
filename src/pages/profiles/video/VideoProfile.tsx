import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import useQuery from '../../../hooks/useQuery';
import { MetaDataType } from '../../../types/custom';
// import Playlist from './partials/Playlist';
// import RelatedContent from './partials/RelatedContent';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import RelatedContent from './partials/RelatedContent';
import VideoBody from './partials/VideoBody';

export default function VideoProfile() {
	const location = useLocation();
	const query = useQuery();
	const axiosPrivate = useAxiosPrivate();
	const [isLoading, setLoading] = useState(true);
	const [metaData, setMetaData] = useState<MetaDataType>({
		channelId: '',
		thumbnail: '',
		title: '',
		description: '',
		createdAt: '',
		channel: {
			name: '',
			user: { avater: '' },
		},
		followers: 0,
		playlist: {
			title: '',
			description: '',
			playlist_video: [],
		},
	});
	const navigate = useNavigate();
	const videoId = query.get('v');
	const playlistId = query.get('p');

	useEffect(() => {
		if (!videoId) return navigate('/404');
		const controller = new AbortController();

		(async () => {
			try {
				const res = await axiosPrivate.get(
					`/videos/metadata?v=${videoId}${
						playlistId ? `&p=${playlistId}` : ``
					}`,
					{
						signal: controller.signal,
					}
				);
				const resData = res?.data || [];
				// console.log('resData :', resData);
				setMetaData(resData);
			} catch (error) {
				console.log('error :', error);
			}
			setLoading(false);
		})();

		return () => {
			controller.abort();
		};
	}, [axiosPrivate, videoId, playlistId, navigate]);

	if (location.pathname === '/watch' && !videoId) {
		return <Navigate to='/' />;
	}

	return (
		<div
			className={`w-full h-full overflow-auto px-2 lg:px-10 xl:px-24 py-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-dark-text dark:scrollbar-thumb-gray-400/50 scrollbar-thumb-rounded-3xl`}
		>
			<div className='flex flex-col lg:flex-row gap-5'>
				<VideoPlayer
					metaData={metaData}
					source={videoId!}
					isLoading={isLoading}
					thumbnail={metaData.thumbnail}
				/>

				{/* {query.has('p') && (
					<Playlist playlist={metaData.playlist} isLoading={isLoading} />
				)} */}
			</div>
			<div className='flex flex-col lg:flex-row gap-5'>
				<VideoBody videoId={query.get('v')!} metaData={metaData} />
				<RelatedContent />
			</div>

			{/* <div className='lg:w-80 xl:w-96 flex flex-col gap-3 h-fit'>
				{query.has('p') && (
					<Playlist playlist={metaData.playlist} isLoading={isLoading} />
				)}
			</div> */}
		</div>
	);
}
