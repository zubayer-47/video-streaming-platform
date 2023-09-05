import { FaCircleUser } from 'react-icons/fa6';
import useModal from '../../hooks/useModal';

const LoginButton = () => {
    const { dispatch } = useModal();

    const handleLoginModal = () =>
        dispatch({
            type: 'UPDATE_AUTH_MODAL',
            payload: true,
        })

    return (
        <button
            type="button"
            className={`rounded-full outline-none tracking-wider  font-semibold py-2.5 text-xs md:text-sm text-gray-50 bg-gray-900 hover:bg-gray-800 flex items-center gap-2 px-3`}
            onClick={handleLoginModal}
        >
            <FaCircleUser className='w-5 h-5 fill-slate-500' />

            <span className='flex items-center'>
                <span className='text-sm md:text-md'>Log In</span>
            </span>
        </button>
    );
};

export default LoginButton;