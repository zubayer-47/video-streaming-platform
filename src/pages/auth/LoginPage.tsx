import { useContext, useState } from "react";
import Input from "../../components/Inputs/Input";
import CenterLayout from "../../components/Layouts/CenterLayout";
import PageLayout from "../../components/Layouts/PageLayout";
import { UserContext } from "../../contexts/user/Provider";
import { FormHandler } from "../../types/custom";

type LoginCredentials = {
    email: string | null;
    password: string | null;
}

export default function LoginPage() {
    const { state, dispatch } = useContext(UserContext);
    const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({ email: null, password: null });

    const onSubmit: FormHandler = async (e) => {
        e.preventDefault();

    }

    return (
        <PageLayout>
            <CenterLayout>
                <div className="text-center">
                    <h1 className=" font-bold tracking-wide">User Login</h1>
                    <p>Hey, Enter Your Details to get Sign In to Your Account</p>
                </div>

                <form onSubmit={onSubmit}>
                    <Input
                        name="email"
                        handler={(e) => setLoginCredentials(prev => ({
                            ...prev,
                            email: e.target.value
                        }))}
                        value={state.user?.username}
                    />
                </form>
            </CenterLayout>
        </PageLayout>
    )
}
