import { isAxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import Input, { PasswordInput } from "../../components/Inputs/Input";
import { FormHandler } from "../../types/custom";

type LoginCredentials = {
    username: string | null;
    password: string | null;
    error: string | null;
    loading: boolean;
}

type LoginCredentialErrors = {
    username: string | null;
    password: string | null;
    commonError: string | null;
}

import { FC } from 'react';

interface LoginModalProps {
    setLoginModal: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginModal: FC<LoginModalProps> = ({ setLoginModal }) => {
    const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({ username: null, password: null, error: null, loading: false });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loginCredentialErrors, setLoginCredentialErrors] = useState<LoginCredentialErrors>({
        username: null,
        password: null,
        commonError: null,
    });
    const navigation = useNavigate();

    const onSubmit: FormHandler = async (e) => {
        e.preventDefault();

        setLoginCredentials(prev => ({
            ...prev,
            loading: true
        }))

        try {
            setTimeout(() => {
                setLoginCredentials(prev => ({
                    ...prev,
                    error: null,
                    loading: false,
                    username: "Zubayer",
                    password: "zubayer"
                }))
            }, 2000);
        } catch (error) {
            console.error(error)
            if (isAxiosError(error)) {
                const message = error.response?.data

                setLoginCredentials(prev => ({
                    ...prev,
                    loading: false,
                    error: message
                }))
            }

            setLoginCredentials(prev => ({
                ...prev,
                loading: false,
                error: "Something Went Wrong!"
            }))
        }

    }

    return (<>
        <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold tracking-wide">Login Account</h1>
            <p className="text-sm text-gray-500">Hey, Enter Your Details to Login Your Account</p>
        </div>

        {!loginCredentialErrors.commonError ? null : (
            <p className='ml-2 text-center text-sm text-red-400 tracking-wide'>{loginCredentialErrors.commonError}</p>
        )}
        <form onSubmit={onSubmit} className="mt-5 space-y-2">
            <Input
                name="username"
                handler={(e) => setLoginCredentials(prev => ({
                    ...prev,
                    username: e.target.value
                }))}
                value={loginCredentials.username}
                hint="Username"
                showLabel
                isLoading={loginCredentials.loading}
                error={loginCredentialErrors.username}
            />

            <PasswordInput
                name="password"
                handler={(e) => setLoginCredentials(prev => ({
                    ...prev,
                    password: e.target.value
                }))}
                value={loginCredentials.password}
                hint="Password"
                showLabel
                isLoading={loginCredentials.loading}
                error={loginCredentialErrors.password}
            />
            <button type="button" onClick={() => navigation('/forgot-password')} className="pb-5">Forgot Password?</button>

            <br />
            <Button
                title="Login Account"
                type="submit"
                isLoading={loginCredentials.loading}
            />
        </form>

        <p className="text-center mt-5">
            <span className="text-gray-600 font-light">Don't Have Account?</span> <button type="button" onClick={() => {
                setLoginModal(false);
            }} className="font-bold">Register Now</button>
        </p>
    </>
    )
}
export default LoginModal