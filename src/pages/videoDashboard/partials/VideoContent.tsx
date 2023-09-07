import { isAxiosError } from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import demoImg from '../../../assets/demo.jpg';
import ProfileThumbnail from '../../../components/ProfileThumbnail';
import { VideoPlaceholder } from '../../../components/loaders/VideoPlaceholder';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { formateTime } from '../../../libs/helper';
import { VideoMetaData } from '../../../types/custom';
import NoVideos from './NoVideos';

type State = {
	metadatas: VideoMetaData[];
	error: string | null;
	loading: boolean;
};

export default function VideoContent() {
	const axiosPrivate = useAxiosPrivate();
	const [state, setState] = useState<State>({
		metadatas: [],
		error: null,
		loading: true,
	});

	useEffect(() => {
		const controller = new AbortController();

		(async () => {
			try {
				console.log('from before axios');
				const res = await axiosPrivate.get('/videos', {
					signal: controller.signal,
				});
				console.log('from after axios');
				const resData = res?.data || [];
				setState((prev) => ({
					...prev,
					metadatas: resData,
					loading: false,
				}));
			} catch (error) {
				if (isAxiosError(error)) {
					const message = error.response?.data?.message;
					console.log(message);
					setState((prev) => ({
						...prev,
						error: message,
						loading: false,
					}));

					return;
				}
				setState((prev) => ({
					...prev,
					error: 'something went wrong!',
					loading: false,
				}));
			}
		})();

		return () => {
			controller.abort();
		};
	}, [axiosPrivate]);

	console.log(state);

	return (
		<>
			{state.loading ? (
				<VideoPlaceholder withGrid />
			) : (
				<>
					{!state.metadatas.length ? (
						<NoVideos />
					) : (
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:pr-3 pb-10 pt-1.5'>
							{state.metadatas.map((md) => (
								<ProfileThumbnail
									key={md.videoId}
									thumbnail={
										(md?.thumbnail &&
											`${import.meta.env.VITE_API_URI}/static/thumbnails/${
												md.thumbnail
											}`) ||
										demoImg
									}
									views='7.6M'
									timeStamp={formateTime(md.duration)}
									title={md.title}
									uploadedAt={dayjs(md.createdAt).toNow(true)}
									channelName={md.channel.name}
									chnLink={`/ch/${md.channel.channelId}`}
									vidLink={`watch?v=${md.videoId}`}
								/>
							))}
						</div>
					)}
				</>
			)}
		</>
	);
}
