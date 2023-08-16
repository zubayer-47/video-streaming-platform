import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import useAuth from '../../hooks/useAuth';
import useModal from '../../hooks/useModal';
import AuthModal from '../authModals/AuthModal';
import Sidebar from './partials/Sidebar';
import Tags from './partials/Tags';
import VideoContent from './partials/VideoContent';
dayjs.extend(relativeTime);

export default function VideoDashboard() {
	const userContext = useAuth()
	const modalContext = useModal()

	return (
		<div className='fixed inset-0 flex flex-col'>
			<div className='flex gap-3'>
				<Sidebar />
				<div className='pt-20 flex-1 overflow-hidden'>
					<Tags />
					<div className='w-full h-[85dvh] overflow-auto'>
						<VideoContent />
					</div>
				</div>
			</div>

			{!userContext.state.isLoggedIn && modalContext.state.isVisibleAuthModal ? <AuthModal /> : null}
		</div>
	);
}
