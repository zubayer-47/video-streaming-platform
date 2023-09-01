import { isAxiosError } from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import demoImg from '../../../assets/demo.jpg';
import ProfileThumbnail from '../../../components/ProfileThumbnail';
import VideoDashboardLoader from '../../../components/loaders/VideoDashboardLoader';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { formateTime } from '../../../libs/helper';
import { VideoMetaData } from '../../../types/custom';

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
				const res = await axiosPrivate.get('/videos', {
					signal: controller.signal,
				});
				const resData = res?.data || [];
				setState((prev) => ({
					...prev,
					metadatas: resData,
				}));
			} catch (error) {
				if (isAxiosError(error)) {
					const message = error.response?.data?.message;

					setState((prev) => ({
						...prev,
						error: message,
					}));
				}
			} finally {
				setState((prev) => ({
					...prev,
					loading: false,
				}));
			}
		})();

		return () => {
			controller.abort();
		};
	}, [axiosPrivate]);

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:pr-3 pb-10'>
			{state.loading && (
				<>
					<VideoDashboardLoader />
					<VideoDashboardLoader />
					<VideoDashboardLoader />
				</>
			)}
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
					vidLink={`watch/${md.videoId}`}
				/>
			))}
		</div>
	);
}
