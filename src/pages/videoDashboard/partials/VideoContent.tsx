import dayjs from 'dayjs';
import demoImg from '../../../assets/demo.jpg';
import ProfileThumbnail from '../../../components/ProfileThumbnail';

export default function VideoContent() {
  const channelName = 'Standford Graduate School of Business';
  const createdAt = dayjs('2023-08-04').toNow(true);

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-5 md:pr-3 pb-10'>
      {new Array(30).fill(true).map(() => (
        <ProfileThumbnail
          thumbnail={demoImg}
          views='7.6M'
          timetamp='05:44'
          title='The Craft of Writing Effectively UChicago Social
								Sciences'
          uploadedAt={createdAt}
          channelName={channelName}
          chnLink='/'
          vidLink='/'
        />
      ))}
    </div>
  );
}
