import dayjs from 'dayjs';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import demoImg from '../../../../assets/demo.jpg';
import ChannelNavLayout from '../../../../components/Layouts/ChannelNavLayout';
import ProfileThumbnail from '../../../../components/ProfileThumbnail';
import { VideoPlaceholder } from '../../../../components/loaders/VideoPlaceholder';
import useListData from '../../../../hooks/useListData';
import { formateTime } from '../../../../libs/helper';
import { VideoMetaData } from '../../../../types/custom';

interface VideoProps {}

type VideoType = {
  videoId: string;
  title: string;
  duration: number;
  createdAt: Date;
  thumbnail: string;
};

export interface VideosType {
  videos: VideoType[];
  loading: boolean;
  error: string | null;
}

const Video: FC<VideoProps> = () => {
  const { channelId } = useParams();
  const {
    state: { data, isLoading },
  } = useListData<VideoMetaData>(
    `/channels/dashboard?cid=${channelId}&sc=videos`
  );

  return (
    <ChannelNavLayout>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {isLoading && <VideoPlaceholder />}

        {!data.length ? (
          <p className='col-span-full text-center text-gray-500'>
            videos not exist
          </p>
        ) : (
          <>
            {data.map((md) => (
              <ProfileThumbnail
                key={md.videoId}
                thumbnail={
                  (md?.thumbnail &&
                    `${import.meta.env.VITE_API_URI}/static/thumbnails/${
                      md?.thumbnail
                    }`) ||
                  demoImg
                }
                views='7.6M'
                timeStamp={formateTime(md.duration)}
                title={md.title}
                uploadedAt={dayjs(md.createdAt).toNow(true)}
                vidLink={`/watch?v=${md.videoId}`}
              />
            ))}
          </>
        )}
      </div>
    </ChannelNavLayout>
  );
};
export default Video;
