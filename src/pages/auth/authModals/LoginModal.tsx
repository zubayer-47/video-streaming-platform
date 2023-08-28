import { isAxiosError } from 'axios';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Buttons/Button';
import Input, { PasswordInput } from '../../../components/Inputs/Input';
import useAuth from '../../../hooks/useAuth';
import useModal from '../../../hooks/useModal';
import axios from '../../../libs/axios';
import {
	BooleanSetStateType,
	FormHandler,
	InputType,
} from '../../../types/custom';

interface LoginModalProps {
	setIsForgetPass: BooleanSetStateType;
}

const LoginModal: FC<LoginModalProps> = ({ setIsForgetPass }) => {
	const navigation = useNavigate();
	const { dispatch } = useAuth();
	const modalContext = useModal();

	const [form, setForm] = useState({
		username: '',
		password: '',
		error: '',
		loading: false,
	});

	const handleInput = (e: InputType) => {
		setForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit: FormHandler = async (e) => {
		e.preventDefault();

		setForm((prev) => ({
			...prev,
			loading: true,
		}));

		try {
			const res = await axios.post(
				`/auth/signin`,
				{ username: form.username, password: form.password },
				{
					headers: { 'Content-Type': 'application/json' },
					withCredentials: true,
				}
			);

			const resData = res?.data;

			localStorage.setItem('access_token', resData?.token);
			dispatch({
				type: 'SET_AUTH',
				payload: resData,
			});
		} catch (error) {
			console.error(error);
			if (isAxiosError(error)) {
				const message = error.response?.data;

				setForm((prev) => ({
					...prev,
					loading: false,
					error: message,
				}));
			}

			setForm((prev) => ({
				...prev,
				loading: false,
				error: 'Something Went Wrong!',
			}));
		}
	};

	return (
		<>
			<div className='text-center space-y-2'>
				<h1 className='text-2xl font-bold tracking-wide'>Login Account</h1>
				<p className='text-sm text-gray-500'>
					Hey, Enter Your Details to Login Your Account
				</p>
			</div>

			{!form.error ? null : (
				<p className='text-center text-sm text-red-400 tracking-wide'>
					{form.error}
				</p>
			)}
			<form onSubmit={onSubmit} className='mt-5 space-y-2'>
				<Input
					name='username'
					handler={handleInput}
					value={form.username}
					hint='Username'
					showLabel
					isLoading={form.loading}
					isRequired
				/>

				<PasswordInput
					name='password'
					handler={handleInput}
					value={form.password}
					hint='Password'
					showLabel
					isLoading={form.loading}
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
				<Button title='Login Account' type='submit' isLoading={form.loading} />
			</form>

			<p className='text-center mt-5'>
				<span className='text-gray-600 font-light'>Don't Have an Account?</span>{' '}
				<button
					type='button'
					onClick={() => {
						modalContext.updateModal(false);
						navigation('/auth');
					}}
					className='font-bold'
				>
					Register Now
				</button>
			</p>
		</>
	);
};
export default LoginModal;
