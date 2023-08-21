import { useState } from 'react';
import ModalBox from '../../../components/ModalViews/ModalBox';
import useModal from '../../../hooks/useModal';
import ForgetPassModal from './ForgetPassModal';
import LoginModal from './LoginModal';

const AuthModal = () => {
    const [isForgetPass, setIsForgetPass] = useState(false);
    const { dispatch: modalDispatch } = useModal();

    return (
        <ModalBox onClose={() => modalDispatch({ type: "UPDATE_AUTH_MODAL", payload: false })}
            classes="h-fit max-w-96 m-auto"
            overlyBg="bg-black/20"
        >
            <div className="bg-white p-7 w-full rounded-xl">
                {!isForgetPass ? (
                    <LoginModal setIsForgetPass={setIsForgetPass} />
                ) : (
                    <ForgetPassModal setIsForgetPass={setIsForgetPass} />
                )}
            </div>
        </ModalBox>
    )
}
export default AuthModal;