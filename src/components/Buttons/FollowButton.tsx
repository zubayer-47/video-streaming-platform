import { isAxiosError } from 'axios';
import { useState } from 'react';
import { axiosPrivate } from '../../libs/axios';

type ChannelStateType = {
    error: string | null;
    isFollowed: boolean;
    loading: boolean;
}

const FollowButton = () => {
    const [channelState, setChannelState] = useState<ChannelStateType>({ isFollowed: false, loading: false, error: null })

    const handleFollow = async () => {
        setChannelState(prev => ({
            ...prev,
            loading: true
        }));

        try {
            const res = await axiosPrivate.post('/channels/follow', {
                channel_id: "c5e93570-8cfd-4b90-8ee0-5bb607a38cc1"
            });
            const title = res?.data?.message;

            setChannelState(prev => ({
                ...prev,
                isFollowed: title === 'followed'
            }));
        } catch (error) {
            if (isAxiosError(error)) {
                const message = error.response?.data?.message

                setChannelState(prev => ({
                    ...prev,
                    error: message
                }));
            }
        } finally {
            setChannelState(prev => ({
                ...prev,
                loading: false
            }));
        }
    };

    return (
        <button
            type='button'
            className={`rounded-full outline-none tracking-wider font-semibold py-2.5 px-5 text-lg ${!channelState.isFollowed ? "text-gray-50 bg-gray-900 hover:bg-gray-800" : "bg-gray-300 text-gray-800"} ${channelState.loading && 'opacity-50'}`}
            onClick={handleFollow}
            disabled={channelState.loading}
        >
            <span className='flex items-center'>
                <span className='text-sm md:text-md'>{channelState.isFollowed ? "Following" : "Follow"}</span>
            </span>
        </button>
    );
};

export default FollowButton;