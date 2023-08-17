import { FC } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link, Outlet } from 'react-router-dom';
import demoImg from '../../../assets/demo.jpg';
import FollowButton from '../../../components/Buttons/FollowButton';
import ChannelNav from './partials/ChannelNav';

interface ChannelProfileProps { }

const ChannelProfile: FC<ChannelProfileProps> = () => {
    // const params = useParams();

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

                        <FollowButton title='Follow' classes='py-2.5 px-5 text-lg ml-auto' />
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