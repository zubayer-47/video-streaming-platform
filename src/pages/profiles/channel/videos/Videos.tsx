import { FC } from 'react';
import demoImg from '../../../../assets/demo.jpg';
import ChannelNavLayout from '../../../../components/Layouts/ChannelNavLayout';
import ProfileThumbnail from '../../../../components/ProfileThumbnail';

interface VideoProps { }

const Video: FC<VideoProps> = () => {
    return <ChannelNavLayout>
        <div className="grid grid-cols-4 gap-5">
            {new Array(20).fill(false).map(() => (
                <ProfileThumbnail
                    channelName='Stack Learner'
                    chnLink='/'
                    vidLink='/'
                    thumbnail={demoImg}
                    timetamp='12:25'
                    title='Memoization - A Powerful Technique for JavaScript Optimization'
                    uploadedAt='2 weeks ago'
                    views='5.8k'
                    isProfileIconVisible
                />
            ))}
        </div>
    </ChannelNavLayout>
}
export default Video;