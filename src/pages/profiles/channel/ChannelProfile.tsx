import { FC } from 'react';
import { BsDot } from 'react-icons/bs';
import { FiChevronRight } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import demoImg from '../../../assets/demo.jpg';
import FollowButton from '../../../components/Buttons/FollowButton';
import ChannelNav from './partials/ChannelNav';

interface ChannelProfileProps { }

const ChannelProfile: FC<ChannelProfileProps> = () => {
    const params = useParams();

    console.log(params)

    return (
        <div className=''>
            <img className='h-64 w-full object-cover' src={demoImg} alt="" />

            <div className='max-w-7xl mx-auto mt-7'>
                <div className="flex gap-7 items-center">
                    <div className='w-32 h-32 rounded-full overflow-hidden'>
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

            <div className='border-b border-gray-300'>
                <div className="max-w-7xl mx-auto">
                    <ChannelNav />


                </div>
            </div>

            <div className="max-w-7xl mx-auto flex gap-5 mt-5">
                <img className='h-52 w-96 object-cover rounded-2xl' src={demoImg} alt="" />

                <div className='max-w-xl'>
                    <h1 className='line-clamp-1 font-medium '>Think in a Redux way - On demand video only React Redux course by Learn with Sumit</h1>

                    <p className='my-2 text-gray-700/90 text-sm'>
                        <span>5,002 views</span>
                        <BsDot className='inline-block' />
                        <span>3 weeks ago</span>
                    </p>

                    <p className='line-clamp-6 text-sm'>
                        It's all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, "Learn with Sumit" has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. "Learn with Sumit" also deep dives into advanced topics using the latest best practices for you seasoned web developers.

                        "Learn with Sumit" was founded by Sumit Saha who is a Tech Entrepreneur also Founded Analyzen - the first ever Digital Agency in Bangladesh. He is specialized in Full Stack Web Development. Sumit started "Learn with Sumit" in order to share his passion for web development, and do what he truly loves - teach and inspire new web developers. Over the years, he has taught many colleagues and friends the joys of web development, and cannot wait to teach you.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ChannelProfile;