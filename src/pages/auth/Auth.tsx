import { FC, useState } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import ForgetPassPage from './ForgetPassPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

interface AuthProps { }

const Auth: FC<AuthProps> = () => {
    const { state: { isLoggedIn } } = useAuth();
    const [isLogin, setIsLogin] = useState(false);
    const [isForgetPass, setIsForgetPass] = useState(false);

    return (
        <>
            {isLoggedIn && <Navigate to='/' />}

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