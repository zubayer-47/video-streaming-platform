import RelatedContent from './partials/RelatedContent';
import VideoBody from './partials/VideoBody';

export default function VideoProfile() {
    // const { videoID } = useParams();

    return (
        <div className='w-full h-full overflow-auto px-2 lg:px-10 xl:px-24 flex flex-col lg:flex-row gap-7 py-2'>
            <VideoBody />
            <RelatedContent />
        </div>
    );
}