import { isAxiosError } from 'axios';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { axiosPrivate } from '../../libs/axios';

type ChannelStateType = {
  error: string | null;
  isFollowed: boolean;
  loading: boolean;
};

const FollowButton = ({ channel_id }: { channel_id: string }) => {
  const [channelState, setChannelState] = useState<ChannelStateType>({
    isFollowed: false,
    loading: false,
    error: null,
  });
  const {
    state: { user },
  } = useAuth();

  const handleFollow = async () => {
    setChannelState((prev) => ({
      ...prev,
      loading: true,
    }));

    try {
      const res = await axiosPrivate.post('/channels/follow', {
        channel_id,
      });
      const title = res?.data?.message;

      setChannelState((prev) => ({
        ...prev,
        isFollowed: title === 'followed',
      }));
    } catch (error) {
      if (isAxiosError(error)) {
        const message = error.response?.data?.message;

        setChannelState((prev) => ({
          ...prev,
          error: message,
        }));
      }
    } finally {
      setChannelState((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  };

  return (
    <>
      {user?.channelId !== channel_id ? (
        <button
          type='button'
          className={`rounded-full outline-none tracking-wider font-semibold py-2.5 px-5 text-lg ${
            !channelState.isFollowed
              ? 'text-gray-50 bg-gray-900 hover:bg-gray-800'
              : 'bg-gray-300 text-gray-800'
          } ${channelState.loading && 'opacity-50'}`}
          onClick={handleFollow}
          disabled={channelState.loading}
        >
          <span className='flex items-center'>
            <span className='text-sm md:text-md'>
              {channelState.isFollowed ? 'Following' : 'Follow'}
            </span>
          </span>
        </button>
      ) : null}
    </>
  );
};

export default FollowButton;
