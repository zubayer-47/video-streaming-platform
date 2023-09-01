/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
// import VideoFile from '../../../../assets/array.mp4';
import dayjs from 'dayjs';
import FollowButton from '../../../../components/Buttons/FollowButton';
import VideoPlayer from '../../../../components/VideoPlayer/VideoPlayer';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import useQuery from '../../../../hooks/useQuery';
import { trunc } from '../../../../libs/helper';
// import CommentSection from './CommentSection';

type MetaDataType = {
  channelId: '';
  thumbnail: '';
  title: string;
  description: string;
  createdAt: string;
  channel: {
    name: string;
    user: { avater: string };
  };
  followers: number;
};

export default function VideoBody() {
  const query = useQuery();
  const axiosPrivate = useAxiosPrivate();
  const [descStatus, setDescStatus] = useState(false);
  const [metaData, setMetaData] = useState<MetaDataType>({
    channelId: '',
    thumbnail: '',
    title: '',
    description: '',
    createdAt: '',
    channel: {
      name: '',
      user: { avater: '' },
    },
    followers: 0,
  });
  const navigate = useNavigate();
  const videoID = query.get('v');

  useEffect(() => {
    if (!videoID) return navigate('/404');
    const controller = new AbortController();

    (async () => {
      try {
        const res = await axiosPrivate.get(`/videos/${videoID}/metadata`, {
          signal: controller.signal,
        });
        const resData = res?.data || [];
        // console.log('resData :', resData);
        setMetaData(resData);
      } catch (error) {
        console.log('error :', error);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [axiosPrivate, videoID, navigate]);

  return (
    <div className='flex-1 flex flex-col w-full'>
      {/* <VideoPlayer source={VideoFile} /> */}
      <VideoPlayer source={videoID!} thumbnail={metaData.thumbnail} />

      <p className='mt-2.5 text-lg font-semibold text-slate-800'>
        {/* How to Build Your Perfect Resume: Learn from a FAANG Employee Example! */}
        {metaData.title}
      </p>

      <div className='flex justify-between gap-3 my-5'>
        <div className='flex gap-2 items-center'>
          <Link to={`/ch/${metaData.channelId}`} type='button'>
            <FaCircleUser className='h-10 w-10' />
          </Link>
          <p className='flex flex-col justify-center'>
            <Link to={`/ch/${metaData.channelId}`} className='font-bold'>
              {/* Stack Learner */}
              {metaData?.channel?.name}
            </Link>
            <span className='text-sm text-gray-800'>
              {metaData.followers} followers
            </span>
          </p>

          <FollowButton channel_id={metaData.channelId} />
        </div>

        <div className='flex gap-2 items-center'>
          <div className='flex items-center bg-indigo-100 rounded-full overflow-hidden'>
            <button
              type='button'
              className='flex items-center gap-1.5 px-3 border-black hover:bg-indigo-200/50 py-2 h-full w-full'
            >
              <FiThumbsUp className='h-6 w-6 text-indigo-700' />
              <span>630</span>
            </button>
            <span className='w-1 h-6 bg-gray-800'></span>
            <button
              type='button'
              className='px-3 border-black hover:bg-indigo-200/50 py-2 h-full w-full'
            >
              <FiThumbsDown className='h-6 w-6' />
            </button>
          </div>
        </div>
      </div>

      <div
        onClick={() => (!descStatus ? setDescStatus(true) : undefined)}
        className={`text-left bg-indigo-100/70 hover:bg-indigo-100 p-3 rounded-xl ${
          !descStatus ? 'cursor-pointer' : 'cursor-text'
        }`}
      >
        <p className='font-medium space-x-2'>
          <span>6k views</span>
          <span>{dayjs(metaData.createdAt).toNow(true)}</span>
        </p>
        <p className='font-normal text-gray-700'>
          {trunc(metaData?.description || '', !descStatus ? 500 : undefined)}
          <button
            onClick={() => {
              setDescStatus(false);
              console.log(descStatus);
            }}
            className={`font-bold  ml-auto ${
              !descStatus ? 'inline-block' : 'block'
            }`}
          >
            {!descStatus ? 'more' : 'Show less'}
          </button>
        </p>
      </div>
      {/* <CommentSection /> */}
    </div>
  );
}
