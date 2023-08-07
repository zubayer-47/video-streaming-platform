import { useState } from 'react';
import ModalBox from '../../components/ModalViews/ModalBox';
import useModal from '../../hooks/useModal';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const AuthModal = () => {
    const [loginModal, setLoginModal] = useState(true);
    const { dispatch: modalDispatch } = useModal();

    return (
        <ModalBox onClose={() => modalDispatch({ type: "UPDATE_AUTH_MODAL", payload: false })}
            classes="max-h-[550px] max-w-2xl m-auto"
            overlyBg="bg-black/20"
        >
            <div className="bg-white p-7 rounded-xl">
                {loginModal ? (
                    <LoginModal setLoginModal={setLoginModal} />
                ) : (
                    <RegisterModal setLoginModal={setLoginModal} />

                )}

            </div>
        </ModalBox>
    )
}
export default AuthModal