import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Buttons/Button';
import Input, { PasswordInput } from '../../../components/Inputs/Input';
import useAuth from '../../../hooks/useAuth';
import useModal from '../../../hooks/useModal';
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
	const { state, login } = useAuth();
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

		login(form.username, form.password);
	};

	return (
		<>
			<div className='text-center space-y-2'>
				<h1 className='text-2xl font-bold tracking-wide'>Login Account</h1>
				<p className='text-sm text-gray-500'>
					Hey, Enter Your Details to Login Your Account
				</p>
			</div>

			{!state.authError ? null : (
				<p className='text-center text-sm text-red-400 tracking-wide'>
					{state.authError.message}
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
