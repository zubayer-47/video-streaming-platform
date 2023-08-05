import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Sidebar from './partials/Sidebar';
import Tags from './partials/Tags';
import VideoContent from './partials/VideoContent';

dayjs.extend(relativeTime);

export default function VideoDashboard() {
	return (
		<div className='fixed inset-0 flex flex-col'>
			<Header />
			<div className='flex items-stretch gap-3'>
				<Sidebar />
				<div className='flex-1 overflow-hidden'>
					<Tags />
					<div className='w-full h-[85vh] overflow-scroll'>
						<VideoContent />
					</div>
				</div>
			</div>
		</div>
	);
}
