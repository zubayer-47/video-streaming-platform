import { isAxiosError } from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import Input from "../../components/Inputs/Input";
import CenterLayout from "../../components/Layouts/CenterLayout";
import PageLayout from "../../components/Layouts/PageLayout";
import { UserContext } from "../../contexts/user/Provider";
import { FormHandler } from "../../types/custom";

type LoginCredentials = {
    username: string | null;
    password: string | null;
    error: string | null;
    loading: boolean;
}

export default function LoginPage() {
    const { state, dispatch } = useContext(UserContext);
    const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({ username: null, password: null, error: null, loading: false });
    const navigation = useNavigate()

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

    return (
        <PageLayout>
            <CenterLayout noWidth>
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold tracking-wide">User Login</h1>
                    <p>Hey, Enter Your Details to get Sign In to Your Account</p>
                </div>

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
                    />

                    <Input
                        name="password"
                        handler={(e) => setLoginCredentials(prev => ({
                            ...prev,
                            password: e.target.value
                        }))}
                        value={loginCredentials.password}
                        hint="Password"
                        showLabel
                    />

                    <p>Forgot Password?</p>

                    <br />
                    <Button
                        title="Submit"
                        type="submit"
                        isLoading={loginCredentials.loading}
                    />
                </form>

                <p className="text-center mt-5">
                    <span className="text-gray-600 font-light">Don't Have Account?</span> <button type="button" onClick={() => {
                        navigation('/register')
                    }} className="font-bold">Register Now</button>
                </p>
            </CenterLayout>
        </PageLayout>
    )
}
