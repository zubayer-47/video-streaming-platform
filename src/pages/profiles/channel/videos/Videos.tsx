import { isAxiosError } from 'axios';
import dayjs from 'dayjs';
import { FC, useEffect, useState } from 'react';
import demoImg from '../../../../assets/demo.jpg';
import ChannelNavLayout from '../../../../components/Layouts/ChannelNavLayout';
import ProfileThumbnail from '../../../../components/ProfileThumbnail';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import { formateTime } from '../../../../libs/helper';

interface VideoProps { }

type VideoType = {
    videoId: string;
    title: string;
    duration: number;
    createdAt: Date;
    thumbnail: string;
}

export interface VideosType {
    videos: VideoType[],
    loading: boolean;
    error: string | null;
}

const Video: FC<VideoProps> = () => {
    const axiosPrivate = useAxiosPrivate()
    const [videos, setVideos] = useState<VideosType>({ videos: [], error: null, loading: false });

    useEffect(() => {

        const controller = new AbortController();

        (async () => {
            setVideos(prev => ({
                ...prev,
                loading: true
            }));

            try {
                const res = await axiosPrivate.get('/channels/dashboard',
                    {
                        headers: { "Content-Type": "application/json" },
                        withCredentials: true,
                        signal: controller.signal,
                    }
                );

                const resData = res?.data;

                setVideos(prev => ({
                    ...prev,
                    videos: resData?.video
                }));
            } catch (error) {
                if (isAxiosError(error)) {
                    const message = error.response?.data?.message

                    setVideos(prev => ({
                        ...prev,
                        error: message
                    }));
                }
            } finally {
                setVideos(prev => ({
                    ...prev,
                    loading: false
                }));
            }
        })();

        return () => controller.abort();
    }, [axiosPrivate])

    return <ChannelNavLayout>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {!videos.videos?.length ? null : videos.videos.map((md) => (
                <ProfileThumbnail
                    key={md.videoId}
                    thumbnail={
                        (md?.thumbnail &&
                            `${import.meta.env.VITE_API_URI}/static/thumbnails/${md?.thumbnail
                            }`) ||
                        demoImg
                    }
                    views='7.6M'
                    timeStamp={formateTime(md.duration)}
                    title={md.title}
                    uploadedAt={dayjs(md.createdAt).toNow(true)}
                    vidLink={`/watch/${md.videoId}`}
                />
            ))}
        </div>
    </ChannelNavLayout>
}
export default Video;