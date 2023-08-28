import { FC, useState } from 'react';
import ForgetPassPage from './ForgetPassPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

interface AuthProps { }

const Auth: FC<AuthProps> = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isForgetPass, setIsForgetPass] = useState(false);

    return (
        <>
            {!isLogin ? (
                <RegisterPage setIsLogin={setIsLogin} />
            ) : (
                !isForgetPass ? (
                    <LoginPage setIsLogin={setIsLogin} setIsForgetPass={setIsForgetPass} />
                ) : (
                    <ForgetPassPage setIsForgetPass={setIsForgetPass} />
                )
            )}
        </>
    )
}

export default Auth