import { useState } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { FiBell, FiUpload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import LoginButton from './Buttons/LoginButton';
import NotificationModal from './Modals/NotificationModal/NotificationModal';
import UserModal from './Modals/UserModal';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {
	const [openedModal, setOpenedModal] = useState('');
	const { state } = useAuth();

	const handleUserModal = () =>
		setOpenedModal((prev) => (prev === 'user' ? '' : 'user'));
	const handleNotificationModal = () =>
		setOpenedModal((prev) => (prev === 'notification' ? '' : 'notification'));

	return (
		<div className='z-40 bg-indigo-50 dark:bg-black/10 flex flex-col justify-center px-2 md:px-10'>
			<div className='flex items-center justify-between gap-5 py-2.5'>
				<Link to={'/'}>
					<h1 className='font-bold text-2xl tracking-wide'>
						<span className='text-indigo-600 dark:text-indigo-500'>Vid</span>
						<span className='text-slate-700 dark:text-slate-300'>Plex</span>
					</h1>
				</Link>
				<div className='flex-1 flex items-center justify-center'>
					<SearchBar />
				</div>
				<div className='flex items-center gap-3 md:gap-4'>
					{!state.isLoggedIn ? (
						<LoginButton />
					) : (
						<>
							<Link
								to='/upload'
								type='button'
								className='rounded-full hover:bg-indigo-100 dark:hover:bg-dark-overlay-100 p-2'
							>
								<FiUpload className='w-5 h-5 text-slate-700 dark:text-slate-300' />
							</Link>
							<button
								type='button'
								onClick={handleNotificationModal}
								className='relative rounded-full hover:bg-indigo-100 dark:hover:bg-dark-overlay-100 p-2'
							>
								<FiBell className='w-5 h-5 text-slate-700 dark:text-slate-300' />

								<span className='absolute -top-1 -right-1 bg-red-600 rounded-full px-1 py-0.5 text-xs text-gray-50'>
									9+
								</span>
							</button>

							<button type='button' onClick={handleUserModal}>
								<FaCircleUser className='w-8 h-8 text-slate-700 dark:text-slate-300' />
							</button>

							{openedModal === 'notification' && (
								<NotificationModal setOpen={handleNotificationModal} />
							)}
							{openedModal === 'user' && (
								<UserModal setOpenedModal={setOpenedModal} />
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
