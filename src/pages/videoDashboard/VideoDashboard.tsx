import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Outlet } from 'react-router-dom';
import Sidebar from './partials/Sidebar';
import Tags from './partials/Tags';
dayjs.extend(relativeTime);

export default function VideoDashboard() {
	return (
		<div className='fixed inset-0 flex flex-col'>
			<div className='flex gap-3'>
				<Sidebar />
				<div className='pt-20 flex-1 overflow-hidden'>
					<Tags />
					<div className='w-full h-[85dvh] overflow-auto'>
						{/* <VideoContent /> */}
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}
