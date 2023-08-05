import { useState } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import UserModal from './Modals/UserModal';
import SearchBar from './SearchBar';

const Header = () => {
	const [showUserModal, setShowUserModal] = useState(false);

	const handleModal = () => setShowUserModal((prev) => !prev);
	return (
		<div className='z-40 bg-indigo-50 flex flex-col justify-center pb-2'>
			<div className='grid grid-cols-12 gap-3 p-2'>
				<Link to={'/'} className='col-span-4 '>
					<span>Cloned YouTube</span>
				</Link>
				<div className='col-span-4 text-center'>
					<SearchBar />
				</div>
				<div className='col-span-4 relative'>
					{/* <FiUser className="w-8 h-8" /> */}
					<button type='button' onClick={handleModal} className='w-full'>
						<FaCircleUser className='w-8 h-8 absolute right-0 top-1' />
					</button>

					{!showUserModal ? null : (
						<UserModal isOpen={showUserModal} setOpen={setShowUserModal} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
