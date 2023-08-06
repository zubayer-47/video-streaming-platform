import ContentBio from "./partials/ContentBio";
import RelatedContent from "./partials/RelatedContent";

export default function VideoProfile() {
    // const { videoID } = useParams();

    return (
        <div className="w-full h-full overflow-auto px-2 lg:px-10 xl:px-24 flex flex-col lg:flex-row gap-4 py-2">
            <ContentBio />
            <RelatedContent />
        </div>
    )
}
