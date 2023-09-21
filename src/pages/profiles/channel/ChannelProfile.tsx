import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link, Outlet, useParams } from 'react-router-dom';
import demoImg from '../../../assets/demo.jpg';
import FollowButton from '../../../components/Buttons/FollowButton';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import ChannelNav from './partials/ChannelNav';

const ChannelProfile = () => {
	const { channelId } = useParams();
	const axiosPrivate = useAxiosPrivate();
	const [profile, setProfile] = useState({
		fullname: '',
		username: '',
		totalFollowers: 0,
		totalVideos: 0,
		hasFollowed: false,
		about: '',
		avatar: '',

		loading: true,
	});

	useEffect(() => {
		const controller = new AbortController();

		(async () => {
			try {
				const res = await axiosPrivate.get(
					`/channels/dashboard?cid=${channelId}&sc=profile`,
					{
						signal: controller.signal,
					}
				);
				const resData = res?.data;
				setProfile((prev) => ({
					...prev,
					...resData,
					loading: false,
				}));
			} catch (error) {
				if (isAxiosError(error)) {
					const message = error.response?.data?.message;
					console.log('message :', message);

					setProfile((prev) => ({
						...prev,
						loading: false,
					}));
				}
			}
		})();

		return () => {
			controller.abort();
		};
	}, [axiosPrivate, channelId]);

	return (
		<div className='overflow-auto pb-5 h-full'>
			<div>
				<img className='h-64 w-full object-cover' src={demoImg} alt='' />

				<div className='container mx-auto mt-7'>
					<div className='flex gap-7 items-center px-3'>
						<div className='hidden md:block w-32 h-32 rounded-full overflow-hidden'>
							<img
								className='w-full h-full object-cover'
								src={
									(profile?.avatar &&
										`${import.meta.env.VITE_API_URI}/static/thumbnails/${
											profile.avatar
										}`) ||
									demoImg
								}
								alt=''
								crossOrigin='anonymous'
							/>
						</div>
						<div className='flex-1 max-w-lg'>
							<h1 className='text-2xl tracking-wider dark:text-slate-300'>
								{profile?.fullname}
							</h1>
							<p className='space-x-2'>
								<span className='font-medium text-sm text-gray-900 dark:text-dark-text'>
									@{profile?.username}
								</span>
								<span className='text-gray-900 dark:text-dark-text'>
									{profile.totalFollowers} followers
								</span>
								<span className='text-gray-900 dark:text-dark-text'>
									{profile.totalVideos} videos
								</span>
							</p>
							<div className='flex items-center mt-3'>
								<span className='line-clamp-1 dark:text-slate-300'>
									{profile.about}
								</span>
								<Link to='about'>
									<FiChevronRight className='w-7 h-7 text-gray-700 dark:text-slate-300' />
								</Link>
							</div>
						</div>

						<div className='ml-auto'>
							<FollowButton
								channel_id={channelId!}
								isFollowed={!!profile.hasFollowed}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className='border-b border-gray-300 dark:border-dark-text/20 mt-5'>
				<div className='container mx-auto w-full overflow-auto scrollbar-track-slate-200 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-thumb-rounded-full'>
					<ChannelNav />
				</div>
			</div>
			<div className='px-2'>
				<Outlet />
			</div>
		</div>
	);
};

export default ChannelProfile;
