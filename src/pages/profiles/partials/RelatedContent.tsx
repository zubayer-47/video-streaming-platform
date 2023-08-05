import img from '../../../assets/demo.jpg';
import ThumbnailImg from "../../../components/ThumbnailImg";

export default function RelatedContent() {
    return (
        <div className="w-96 flex justify-center gap-2">
            <ThumbnailImg demoImg={img} isList />
        </div>
    )
}
