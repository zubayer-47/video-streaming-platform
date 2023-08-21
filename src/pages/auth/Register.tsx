import { isAxiosError } from "axios";
import { FC, useState } from "react";
import Button from "../../components/Buttons/Button";
import Input, { PasswordInput } from "../../components/Inputs/Input";
import useModal from "../../hooks/useModal";
import { FormHandler } from "../../types/custom";

type RegisterCredentials = {
    username: string | null;
    password: string | null;
    email: string | null;
    confirmPassword: string | null;
    error: string | null;
    loading: boolean;
}

type RegisterErrors = {
    username: string | null;
    password: string | null;
    email: string | null;
    confirmPassword: string | null;
    commonError: string | null;
}

interface RegisterProps { }

const Register: FC<RegisterProps> = () => {
    const modalContext = useModal();
    const [registerCredentials, setRegisterCredentials] = useState<RegisterCredentials>({
        username: null,
        password: null,
        confirmPassword: null,
        email: null,
        error: null,
        loading: false
    });
    const [registerErrors, setRegisterErrors] = useState<RegisterErrors>({
        username: null,
        password: null,
        confirmPassword: null,
        email: null,
        commonError: null,
    });

    const onSubmit: FormHandler = async (e) => {
        e.preventDefault();

        setRegisterCredentials(prev => ({
            ...prev,
            loading: true
        }))

        try {
            setTimeout(() => {
                setRegisterCredentials(prev => ({
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

                console.log(message, error.response);

                setRegisterErrors(prev => ({
                    ...prev,
                    commonError: message
                }))
            }

            setRegisterCredentials(prev => ({
                ...prev,
                loading: false,
                error: "Something Went Wrong!"
            }))
        }

    }

    return (
        <div className="h-fit max-w-102 mx-2 my-auto md:m-auto shadow-xl">
            <div className="bg-white p-7 rounded-xl">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold tracking-wide">Registration</h1>
                    <p className="text-sm text-gray-500">Hey, Enter Your Details to Register Account</p>
                </div>

                {!registerErrors.commonError ? null : (
                    <p className='ml-2 text-center text-sm text-red-400 tracking-wide'>{registerErrors.commonError}</p>
                )}
                <form onSubmit={onSubmit} className="mt-5 space-y-2">
                    <Input
                        name="username"
                        handler={(e) => setRegisterCredentials(prev => ({
                            ...prev,
                            username: e.target.value
                        }))}
                        value={registerCredentials.username}
                        hint="Username"
                        showLabel
                        isLoading={registerCredentials.loading}
                        error={registerErrors.username}
                        isRequired
                    />
                    <Input
                        type="email"
                        name="email"
                        handler={(e) => setRegisterCredentials(prev => ({
                            ...prev,
                            email: e.target.value
                        }))}
                        value={registerCredentials.email}
                        hint="Email"
                        showLabel
                        isLoading={registerCredentials.loading}
                        error={registerErrors.email}
                        isRequired
                    />

                    <PasswordInput
                        name="password"
                        handler={(e) => setRegisterCredentials(prev => ({
                            ...prev,
                            password: e.target.value
                        }))}
                        value={registerCredentials.password}
                        hint="Password"
                        showLabel
                        isLoading={registerCredentials.loading}
                        error={registerErrors.password}
                        isRequired
                    />
                    <PasswordInput
                        name="confirmPassword"
                        handler={(e) => setRegisterCredentials(prev => ({
                            ...prev,
                            confirmPassword: e.target.value
                        }))}
                        value={registerCredentials.confirmPassword}
                        hint="Confirm Password"
                        showLabel
                        isLoading={registerCredentials.loading}
                        error={registerErrors.confirmPassword}
                        isRequired
                    />

                    <br />
                    <Button
                        title="Register"
                        type="submit"
                        isLoading={registerCredentials.loading}
                    />
                </form>

                <p className="text-center mt-5">
                    <span className="text-gray-600 font-light">Already Have an Account?</span> <button type="button" onClick={() => modalContext.updateModal(true)} className="font-bold">Login Now</button>
                </p>
            </div>
        </div>
    )
}
export default Register