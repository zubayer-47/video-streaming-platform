import demoImg from '../../../assets/demo.jpg';
import ProfileThumbnail from '../../../components/ProfileThumbnail';

export default function RelatedContent() {
    return (
        <div className="w-96 flex justify-center gap-2">
            <ProfileThumbnail
                thumbnail={demoImg}
                views='7.6M'
                timetamp='05:44'
                title='LEADERSHIP LAB: The Craft of Writing Effectively UChicago Social Sciences The Craft of Writing Effectivel'
                channelName={'Standford Graduate School of Business'}
                chnLink='/channel123'
                vidLink='/video1234'
                uploadedAt='1month'
                isList
            />
        </div>
    )
}
