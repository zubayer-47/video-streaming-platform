import { useState } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useModal from '../hooks/useModal';
import FollowButton from './Buttons/FollowButton';
import UserModal from './Modals/UserModal';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {
	const [showUserModal, setShowUserModal] = useState(false);
	const handleModal = () => setShowUserModal((prev) => !prev);
	const userContext = useAuth();
	const modalContext = useModal();

	return (
		<div className='z-40 bg-indigo-50 flex flex-col justify-center px-10'>
			<div className='flex items-center justify-between gap-2 py-2.5'>
				<Link to={'/'}>
					<h1 className='font-bold text-2xl tracking-wide'>
						<span className='text-indigo-600'>Vid</span>
						<span>Plex</span>
					</h1>
				</Link>
				<div className='flex-1 flex items-center justify-center'>
					<SearchBar />
				</div>
				<div className='text-right'>
					{/* <FiUser className="w-8 h-8" /> */}
					{!userContext.state.isLoggedIn ? (
						<div className='inline-block'>
							<FollowButton
								title='Log In'
								handler={() =>
									modalContext.dispatch({
										type: 'UPDATE_AUTH_MODAL',
										payload: true,
									})
								}
								icon={<FaCircleUser className='w-5 h-5 fill-slate-500' />}
								classes='py-2.5 text-xs md:text-sm'
							/>
						</div>
					) : (
						<>
							<div className='relative inline-block'>
								<button type='button' onClick={handleModal}>
									<FaCircleUser className='w-8 h-8 absolute right-0 top-1' />
								</button>

								{!showUserModal ? null : (
									<UserModal
										isOpen={showUserModal}
										setOpen={setShowUserModal}
									/>
								)}
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
