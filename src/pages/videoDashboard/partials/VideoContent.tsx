import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import demoImg from '../../../assets/demo.jpg';
import ProfileThumbnail from '../../../components/ProfileThumbnail';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { formateTime } from '../../../libs/helper';
import { VideoMetaData } from '../../../types/custom';

export default function VideoContent() {
	const axiosPrivate = useAxiosPrivate();
	const [metadatas, setMetadatas] = useState<VideoMetaData[]>([]);

	useEffect(() => {
		const controller = new AbortController();

		(async () => {
			try {
				const res = await axiosPrivate.get('/videos', {
					signal: controller.signal,
				});
				const resData = res?.data || [];
				setMetadatas(resData);
			} catch (error) {
				console.log('error :', error);
			}
		})();

		return () => {
			controller.abort();
		};
	}, [axiosPrivate]);

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:pr-3 pb-10'>
			{metadatas.map((md) => (
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
					timetamp={formateTime(md.duration)}
					title={md.title}
					uploadedAt={dayjs(md.createdAt).toNow(true)}
					channelName={md.channel.name}
					chnLink={`/${md.channel.channelId}`}
					vidLink={`watch/${md.videoId}`}
				/>
			))}
		</div>
	);
}
