import { useParams } from "react-router-dom";
import ContentBio from "./partials/ContentBio";
import RelatedContent from "./partials/RelatedContent";

export default function VideoProfile() {
    const { videoID } = useParams();

    return (
        <div className="w-full px-10 lg:px-24 flex flex-col lg:flex-row gap-4">
            <ContentBio />
            <RelatedContent />
        </div>
    )
}
