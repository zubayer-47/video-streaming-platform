import { MdSort } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import ChannelNavLayout from '../../../../components/Layouts/ChannelNavLayout';
import { VideoPlaceholder } from '../../../../components/loaders/VideoPlaceholder';
import useListData from '../../../../hooks/useListData';
import PlaylistThumbnail from './partials/PlaylistThumbnail';

export type PlaylistDataType = {
  playlistId: string;
  title: string;
  totalVideos: number;
  defThumb: string;
  defVidId: string;
};

const Playlists = () => {
  const { channelId } = useParams();
  const {
    state: { isLoading, data },
  } = useListData<PlaylistDataType>(
    `/channels/dashboard?cid=${channelId}&sc=playlists`
  );

  return (
    <ChannelNavLayout>
      <div className='flex justify-between items-center mb-5'>
        <h1 className='font-medium text-gray-800'>Created Playlists</h1>
        <button className='flex gap-0.5 items-center'>
          <MdSort className='w-6 h-6 fill-gray-600' />
          <span className='font-medium text-gray-800'>Sort by</span>
        </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {isLoading && <VideoPlaceholder />}

        {!data.length ? (
          <p className='col-span-full text-center text-gray-500'>
            {' '}
            playlists not exist{' '}
          </p>
        ) : (
          <>
            {data.map((playlist) => (
              <PlaylistThumbnail key={playlist.playlistId} info={playlist} />
            ))}
          </>
        )}
      </div>
    </ChannelNavLayout>
  );
};

export default Playlists;
