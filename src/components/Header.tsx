import { useState } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { FiBell } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useModal from '../hooks/useModal';
import FollowButton from './Buttons/FollowButton';
import UserModal from './Modals/UserModal';
import SearchBar from './SearchBar';

const Header = () => {
	const [showUserModal, setShowUserModal] = useState(false);
	const handleModal = () => setShowUserModal((prev) => !prev);
	const userContext = useAuth()
	const modalContext = useModal()

	return (
		<div className='z-40 bg-indigo-50 flex flex-col justify-center pb-2 px-5'>
			<div className='grid grid-cols-3 gap-3 p-2'>
				<Link to={'/'}>
					<span>Cloned YouTube</span>
				</Link>
				<div className='text-center'>
					<SearchBar />
				</div>
				<div className='flex justify-end gap-5'>
					{/* <FiUser className="w-8 h-8" /> */}
					{!userContext.state.isLoggedIn ? (
						<FollowButton
							title='Log In'
							handler={() => modalContext.dispatch({ type: "UPDATE_AUTH_MODAL", payload: true })}
							icon={<FaCircleUser className='w-5 h-5 fill-slate-200' />}
							classes='py-2.5 text-xs md:text-sm'
						/>
					) : (
						<>
							<button type="button" className='relative'>
								<FiBell className='w-6 h-6' />

								<span className='absolute top-0.5 left-2.5 bg-red-600 rounded-full px-1 py-0.5 text-xs text-gray-50'>9+</span>
							</button>

							<button type='button' onClick={handleModal}>
								<FaCircleUser className='w-8 h-8' />
							</button>

							{!showUserModal ? null : (
								<UserModal isOpen={showUserModal} setOpen={setShowUserModal} />
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
