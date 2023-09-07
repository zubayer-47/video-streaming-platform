import { FC } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { FiLogOut, FiMoon, FiSettings, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useModal from '../../hooks/useModal';
import useTheme from '../../hooks/useTheme';
import ThemeToggle from '../ThemeToggle';

type UserModalProps = {
	setOpenedModal: React.Dispatch<React.SetStateAction<string>>;
};

const UserModal: FC<UserModalProps> = ({ setOpenedModal }) => {
	const { logout, state } = useAuth();
	const { dispatch } = useModal();
	const themeContext = useTheme();

	const onSignOut = () => {
		logout();
		setOpenedModal('');
	};

	const onChannelCreateModal = () => {
		dispatch({ type: 'UPDATE_CHANNEL_CREATE_MODAL', payload: true });
	};

	return (
		<div className='w-full sm:w-72 fixed right-0 md:right-5 top-14 bg-gray-100 dark:bg-dark-modal rounded-xl shadow-2xl z-30 overflow-hidden transition-colors duration-300'>
			<div className='flex gap-4 border-b border-slate-300 dark:border-slate-500 p-3'>
				<FaCircleUser className='w-9 h-9' />
				<div className=''>
					<h1 className='dark:text-slate-300 text-inherit'>
						{state.user?.fullname}
					</h1>
					<p className='text-slate-500'>@{state.user?.username}</p>
				</div>
			</div>

			<div className='border-b border-slate-300 dark:border-slate-500 p-4 space-y-5'>
				<Link
					to={`/ch/${state.user?.channelId}`}
					onClick={() => setOpenedModal('')}
					type='button'
					className='flex  items-center gap-4 dark:text-slate-300 text-inherit'
				>
					{' '}
					<FiUser className='w-6 h-6' /> <span>Your Channel</span>
				</Link>
				<button
					onClick={onChannelCreateModal}
					type='button'
					className='flex  items-center gap-4 dark:text-slate-300 text-inherit'
				>
					{' '}
					<FiUser className='w-6 h-6' /> <span>Customize Channel</span>
				</button>
				<button
					onClick={onSignOut}
					type='button'
					className='flex  items-center gap-4 dark:text-slate-300 text-inherit'
				>
					{' '}
					<FiLogOut className='w-6 h-6' /> <span>Sign out</span>
				</button>
			</div>
			<div className='p-4 space-y-5'>
				<div className='flex justify-between items-center'>
					<div className='flex items-center gap-4 dark:text-slate-300 text-inherit'>
						<FiMoon className='w-6 h-6' />
						<h1 className='flex  items-center gap-4 '>Appearance</h1>
					</div>
					<ThemeToggle />
				</div>
				<button
					type='button'
					className='flex  items-center gap-4 dark:text-slate-300 text-inherit'
				>
					{' '}
					<FiSettings className='w-6 h-6' /> <span>Settings</span>
				</button>
			</div>
		</div>
	);
};

export default UserModal;
