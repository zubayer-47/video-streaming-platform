import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { axiosPrivate } from '../../libs/axios';

type ChannelStateType = {
	error: string | null;
	isFollowed: boolean;
	loading: boolean;
};

type FollowBtnType = {
	channel_id: string;
	isFollowed?: boolean;
};

const FollowButton = ({ channel_id, isFollowed }: FollowBtnType) => {
	const {
		state: { user },
	} = useAuth();

	const [channelState, setChannelState] = useState<ChannelStateType>({
		isFollowed: false,
		loading: false,
		error: null,
	});

	useEffect(() => {
		setChannelState((prev) => ({ ...prev, isFollowed: !!isFollowed }));
	}, [isFollowed]);

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
					// isFollowed: 'title' === 'followed',
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
			{user?.channelId === channel_id ? null : (
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
			)}
		</>
	);
};

export default FollowButton;
