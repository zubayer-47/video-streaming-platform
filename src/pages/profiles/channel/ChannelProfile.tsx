import { isAxiosError } from 'axios';
import { FC, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import demoImg from '../../../assets/demo.jpg';
import FollowButton from '../../../components/Buttons/FollowButton';
import { axiosPrivate } from '../../../libs/axios';
import debounce from '../../../libs/debounce';
import ChannelNav from './partials/ChannelNav';

interface ChannelProfileProps { }

type ChannelStateType = {
    error: string | null;
    isFollowed: boolean;
    loading: boolean;
}

const ChannelProfile: FC<ChannelProfileProps> = () => {
    const [channelState, setChannelState] = useState<ChannelStateType>({ isFollowed: false, loading: false, error: null })
    const location = useLocation();

    if (!location.pathname.includes('@')) {
        return <Navigate to='/404' />
    }

    // useEffect(() => {
    // 	const controller = new AbortController();

    // 	(async () => {
    // 		setState(prev => ({
    // 			...prev,
    // 			loading: true
    // 		}));

    // 		try {
    // 			const res = await axiosPrivate.get('/videos', {
    // 				signal: controller.signal,
    // 			});
    // 			const resData = res?.data || [];
    // 			setState(prev => ({
    // 				...prev,
    // 				metadatas: resData
    // 			}));
    // 		} catch (error) {
    // 			if (isAxiosError(error)) {
    // 				const message = error.response?.data?.message

    // 				setState(prev => ({
    // 					...prev,
    // 					error: message
    // 				}));
    // 			}
    // 		} finally {
    // 			setState(prev => ({
    // 				...prev,
    // 				loading: false
    // 			}));
    // 		}
    // 	})();

    // 	return () => {
    // 		controller.abort();
    // 	};
    // }, [axiosPrivate]);

    const handleFollow = debounce(async () => {
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
    }, 200);

    return (
        <div className='overflow-auto pb-5 h-full'>
            <div>
                <img className='h-64 w-full object-cover' src={demoImg} alt="" />

                <div className='max-w-7xl mx-auto mt-7'>
                    <div className="flex gap-7 items-center px-3">
                        <div className='hidden md:block w-32 h-32 rounded-full overflow-hidden'>
                            <img className='w-full h-full object-cover' src={demoImg} alt="" />
                        </div>
                        <div className='flex-1 max-w-lg'>
                            <h1 className='text-2xl tracking-wider'>Stack Learner</h1>
                            <p className='space-x-2'>
                                <span className='font-medium text-sm text-gray-900'>@StackLearner</span>
                                <span className='text-gray-900'>106k followers</span>
                                <span className='text-gray-900'>430 videos</span>
                            </p>
                            <div className='flex items-center mt-3'>
                                <span className='line-clamp-1'>
                                    It's all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, "Learn with Sumit" has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. "Learn with Sumit" also deep dives into advanced topics using the latest best practices for you seasoned web developers.

                                </span>
                                <Link to='/'><FiChevronRight className="w-7 h-7 text-gray-700" /></Link>
                            </div>
                        </div>

                        <FollowButton handler={handleFollow} title={channelState.isFollowed ? "Following" : "Follow"} bg={!channelState.isFollowed ? "" : "bg-gray-300 text-gray-800"} classes='py-2.5 px-5 text-lg ml-auto capitalize' />
                    </div>
                </div>
            </div>

            <div className='border-b border-gray-300'>
                <div className="max-w-7xl mx-auto w-full overflow-auto scrollbar-track-slate-200 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-thumb-rounded-full">
                    <ChannelNav />
                </div>
            </div>
            <div className="px-2">
                <Outlet />
            </div>
        </div>
    )
}

export default ChannelProfile;