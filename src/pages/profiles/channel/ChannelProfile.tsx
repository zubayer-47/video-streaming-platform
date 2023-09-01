import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link, Outlet, useParams } from 'react-router-dom';
import demoImg from '../../../assets/demo.jpg';
import FollowButton from '../../../components/Buttons/FollowButton';
import useAuth from '../../../hooks/useAuth';
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
    about: '',
    avatar: '',

    loading: true,
  });
  const {
    state: { user },
  } = useAuth();

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

        <div className='max-w-7xl mx-auto mt-7'>
          <div className='flex gap-7 items-center px-3'>
            <div className='hidden md:block w-32 h-32 rounded-full overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src={demoImg}
                alt=''
              />
            </div>
            <div className='flex-1 max-w-lg'>
              <h1 className='text-2xl tracking-wider'>{user?.fullname}</h1>
              <p className='space-x-2'>
                <span className='font-medium text-sm text-gray-900'>
                  @{user?.username}
                </span>
                <span className='text-gray-900'>106k followers</span>
                <span className='text-gray-900'>430 videos</span>
              </p>
              <div className='flex items-center mt-3'>
                <span className='line-clamp-1'>
                  It's all about teaching web development skills and techniques
                  in an efficient and practical manner. If you are just getting
                  started in web development, "Learn with Sumit" has all the
                  tools you need to learn the newest and most popular
                  technologies to convert you from a no stack to full stack
                  developer. "Learn with Sumit" also deep dives into advanced
                  topics using the latest best practices for you seasoned web
                  developers.
                </span>
                <Link to='about'>
                  <FiChevronRight className='w-7 h-7 text-gray-700' />
                </Link>
              </div>
            </div>

            <div className='ml-auto'>
              <FollowButton channel_id={channelId!} />
            </div>
          </div>
        </div>
      </div>

      <div className='border-b border-gray-300'>
        <div className='max-w-7xl mx-auto w-full overflow-auto scrollbar-track-slate-200 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-thumb-rounded-full'>
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
