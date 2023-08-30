import { Navigate, useLocation } from 'react-router-dom';
import useQuery from '../../../hooks/useQuery';
import RelatedContent from './partials/RelatedContent';
import VideoBody from './partials/VideoBody';

export default function VideoProfile() {
	const location = useLocation();
	const query = useQuery();

	if (location.pathname === '/watch' && !query.has('v')) {
		return <Navigate to='/' />
	}

	return (
		<div className='w-full h-full overflow-auto px-2 lg:px-10 xl:px-24 flex flex-col lg:flex-row gap-7 py-2'>
			<VideoBody />
			<RelatedContent />
		</div>
	);
}
