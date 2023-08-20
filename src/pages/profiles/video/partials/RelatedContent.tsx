import { v4 as uuidv4 } from 'uuid';
import demoImg from '../../../../assets/demo.jpg';
import ProfileThumbnail from '../../../../components/ProfileThumbnail';
import Playlist from './Playlist';

export default function RelatedContent() {
    return (
        <div className="lg:w-80 xl:w-96 flex flex-col gap-3">

            <Playlist />

            {new Array(30).fill(true).map(() => (
                <ProfileThumbnail
                    key={uuidv4()}
                    thumbnail={demoImg}
                    views='7.6M'
                    timetamp='05:44'
                    title='LEADERSHIP LAB: The Craft of Writing Effectively UChicago Social Sciences The Craft of Writing Effectivel'
                    channelName={'Standford Graduate School of Business'}
                    chnLink='/channel123'
                    vidLink='/watch/video12340'
                    uploadedAt='1month'
                    isList
                />
            ))}
        </div>
    )
}
