import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ModalBox from '../../../components/ModalViews/ModalBox';
import useModal from '../../../hooks/useModal';
import ForgetPassPage from '../ForgetPassPage';
import LoginPage from '../LoginPage';

const AuthModal = () => {
    const [isForgetPass, setIsForgetPass] = useState(false);
    const { dispatch: modalDispatch } = useModal();
    const location = useLocation();

    // would it be a good approach or not?
    if (location.pathname === '/auth') {
        modalDispatch({ type: 'UPDATE_AUTH_MODAL', payload: false })
    }

    return (
        <ModalBox onClose={() => modalDispatch({ type: "UPDATE_AUTH_MODAL", payload: false })}
            classes="h-fit max-w-96 m-auto"
            overlyBg="bg-black/20"
        >

            {!isForgetPass ? (
                <LoginPage setIsForgetPass={setIsForgetPass} />
            ) : (
                <ForgetPassPage setIsForgetPass={setIsForgetPass} />
            )}
        </ModalBox>
    )
}
export default AuthModal;