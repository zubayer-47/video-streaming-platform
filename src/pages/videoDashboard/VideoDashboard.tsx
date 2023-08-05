import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Sidebar from './partials/Sidebar';
import Tags from './partials/Tags';
import VideoContent from './partials/VideoContent';

dayjs.extend(relativeTime);

export default function VideoDashboard() {
	return (
		<div className='flex items-stretch'>
			<Sidebar />
			<div className='flex-1 p-3 overflow-hidden'>
				<Tags />
				<div className='w-full h-[85vh] overflow-auto'>
					<VideoContent />
				</div>
			</div>
		</div>
	);
}
