import { FC, useState } from 'react';
import Button from '../../components/Buttons/Button';
import Input, { PasswordInput } from '../../components/Inputs/Input';
import useAuth from '../../hooks/useAuth';
import { BooleanSetStateType, FormHandler, InputType } from '../../types/custom';

interface Props {
    setIsForgetPass: BooleanSetStateType;
    setIsLogin: BooleanSetStateType;
}

const LoginPage: FC<Props> = ({ setIsForgetPass, setIsLogin }) => {
    const { state, login } = useAuth();
    const [form, setForm] = useState({
        username: '',
        password: '',
    });

    const handleInput = (e: InputType) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit: FormHandler = async (e) => {
        e.preventDefault();

        login(form.username, form.password);
    };

    return (
        <div className="h-fit max-w-102 mx-2 my-auto md:m-auto shadow-xl bg-white p-7 rounded-xl">
            <div className='text-center space-y-2'>
                <h1 className='text-2xl font-bold tracking-wide'>Login Account</h1>
                <p className='text-sm text-gray-500'>
                    Hey, Enter Your Details to Login Your Account
                </p>
            </div>

            {!state.authError ? null : (
                <p className='text-center text-sm text-red-400 tracking-wide'>
                    {state.authError?.message}
                </p>
            )}
            <form onSubmit={onSubmit} className='mt-5 space-y-2'>
                <Input
                    name='username'
                    handler={handleInput}
                    value={form.username}
                    hint='Username'
                    showLabel
                    isLoading={state.authLoading}
                    isRequired
                />

                <PasswordInput
                    name='password'
                    handler={handleInput}
                    value={form.password}
                    hint='Password'
                    showLabel
                    isLoading={state.authLoading}
                    isRequired
                />
                <button
                    type='button'
                    onClick={() => setIsForgetPass(true)}
                    className='pb-5'
                >
                    Forgot Password?
                </button>

                <br />
                <Button title='Login Account' type='submit' isLoading={state.authLoading} />
            </form>

            <p className='text-center mt-5'>
                <span className='text-gray-600 font-light'>Don't Have an Account?</span>{' '}
                <button
                    type='button'
                    onClick={() => setIsLogin(false)}
                    className='font-bold'
                >
                    Register Now
                </button>
            </p>
        </div>
    );
};
export default LoginPage;































// import { isAxiosError } from "axios";
// import { useState } from "react";
// import Button from "../../components/Buttons/Button";
// import Input, { PasswordInput } from "../../components/Inputs/Input";
// import useModal from "../../hooks/useModal";
// import { FormHandler } from "../../types/custom";

// type LoginCredentials = {
//     username: string | null;
//     password: string | null;
//     error: string | null;
//     loading: boolean;
// }

// type LoginErrors = {
//     username: string | null;
//     password: string | null;
//     commonError: string | null;
// }

// const LoginPage = () => {
//     const modalContext = useModal();
//     const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
//         username: null,
//         password: null,
//         error: null,
//         loading: false
//     });
//     const [loginErrors, setLoginErrors] = useState<LoginErrors>({
//         username: null,
//         password: null,
//         commonError: null,
//     });

//     const onSubmit: FormHandler = async (e) => {
//         e.preventDefault();

//         setLoginCredentials(prev => ({
//             ...prev,
//             loading: true
//         }))

//         try {
//             setTimeout(() => {
//                 setLoginCredentials(prev => ({
//                     ...prev,
//                     error: null,
//                     username: "Zubayer",
//                     password: "zubayer"
//                 }))
//             }, 2000);
//         } catch (error) {
//             console.error(error)
//             if (isAxiosError(error)) {
//                 const message = error.response?.data

//                 console.log(message, error.response);

//                 setLoginErrors(prev => ({
//                     ...prev,
//                     commonError: message
//                 }))
//             }

//             setLoginCredentials(prev => ({
//                 ...prev,
//                 error: "Something Went Wrong!"
//             }))
//         } finally {
//             setLoginCredentials(prev => ({
//                 ...prev,
//                 loading: false
//             }))

//         }

//     }

//     return (
//         <div className="h-fit max-w-102 mx-2 my-auto md:m-auto shadow-xl">
//             <div className="bg-white p-7 rounded-xl">
//                 <div className="text-center space-y-2">
//                     <h1 className="text-2xl font-bold tracking-wide">Log In</h1>
//                     <p className="text-sm text-gray-500">Hey, Enter Your Details to Login Account</p>
//                 </div>

//                 {!loginErrors.commonError ? null : (
//                     <p className='ml-2 text-center text-sm text-red-400 tracking-wide'>{loginErrors.commonError}</p>
//                 )}
//                 <form onSubmit={onSubmit} className="mt-5 space-y-2">
//                     <Input
//                         name="username"
//                         handler={(e) => setLoginCredentials(prev => ({
//                             ...prev,
//                             username: e.target.value
//                         }))}
//                         value={loginCredentials.username}
//                         hint="Username"
//                         showLabel
//                         isLoading={loginCredentials.loading}
//                         error={loginErrors.username}
//                         isRequired
//                     />

//                     <PasswordInput
//                         name="password"
//                         handler={(e) => setLoginCredentials(prev => ({
//                             ...prev,
//                             password: e.target.value
//                         }))}
//                         value={loginCredentials.password}
//                         hint="Password"
//                         showLabel
//                         isLoading={loginCredentials.loading}
//                         error={loginErrors.password}
//                         isRequired
//                     />

//                     <br />
//                     <Button
//                         title="Login"
//                         type="submit"
//                         isLoading={loginCredentials.loading}
//                     />
//                 </form>

//                 <p className="text-center mt-5">
//                     <span className="text-gray-600 font-light">Already Have an Account?</span> <button type="button" onClick={() => modalContext.updateModal(true)} className="font-bold">Login Now</button>
//                 </p>
//             </div>
//         </div>
//     )
// }
// export default LoginPage