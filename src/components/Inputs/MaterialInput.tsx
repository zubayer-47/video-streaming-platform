import { InputType, TextAreaHandler } from '../../types/custom';

type InputProp = {
	name: string;
	handler: (e: InputType) => void;
	type?: string;
	title?: string;
	hint?: string;
	value?: string | null;
	isLoading?: boolean;
	isRequired?: boolean;
	error?: string | null;
};

const MaterialInput = ({
	name,
	handler,
	type = 'text',
	title = '',
	hint = '',
	value,
	isLoading = false,
	isRequired = false,
	error = '',
}: InputProp) => {
	return (
		<div className='bg-transparent flex-1'>
			{title && (
				<label
					htmlFor={name}
					className='inline-block uppercase ml-1 mb-1 font-bold text-xs text-slate-500'
				>
					{title}
				</label>
			)}
			<input
				type={type}
				name={name}
				id={name}
				className='w-full px-3 py-2 rounded-md bg-transparent outline-none tracking-wider border border-indigo-200'
				placeholder={hint}
				value={value || ''}
				onChange={handler}
				autoComplete='off'
				disabled={isLoading}
				required={isRequired}
			/>
			{!error ? null : (
				<p className='ml-2 text-sm text-red-400 tracking-wide'>{error}</p>
			)}
		</div>
	);
};

export default MaterialInput;

type TextAreaProp = {
	name: string;
	handler: TextAreaHandler;
	title?: string;
	hint?: string;
	value?: string | null;
	isLoading?: boolean;
	isRequired?: boolean;
	error?: string | null;
};

export const MaterialTextArea = ({
	name,
	handler,
	title = '',
	hint = '',
	value,
	isLoading = false,
	isRequired = false,
	error = '',
}: TextAreaProp) => {
	return (
		<div className='bg-transparent flex-1'>
			{title && (
				<label
					htmlFor={name}
					className='inline-block uppercase ml-1 mb-1 font-bold text-xs text-slate-500'
				>
					{title}
				</label>
			)}
			<textarea
				name={name}
				id={name}
				className='w-full px-3 py-2 rounded-md bg-transparent outline-none tracking-wider border border-indigo-200'
				placeholder={hint}
				value={value || ''}
				onChange={handler}
				autoComplete='off'
				rows={4}
				disabled={isLoading}
				required={isRequired}
			/>
			{!error ? null : (
				<p className='ml-2 text-sm text-red-400 tracking-wide'>{error}</p>
			)}
		</div>
	);
};

type InputTagProp = {
	name: string;
	handler: (e: InputType) => void;
	title?: string;
	hint?: string;
	value?: string | null;
	values?: string[];
	isLoading?: boolean;
	isRequired?: boolean;
	error?: string | null;
};

export const MaterialTagInput = ({
	name,
	handler,
	title = '',
	hint = '',
	value,
	values = [],
	isLoading = false,
	isRequired = false,
	error = '',
}: InputTagProp) => {
	return (
		<div className='bg-transparent flex-1'>
			{title && (
				<label
					htmlFor={name}
					className='inline-block uppercase ml-1 mb-1 font-bold text-xs text-slate-500'
				>
					{title}
				</label>
			)}
			<div className='w-full px-3 py-2 rounded-md bg-transparent outline-none tracking-wider border border-indigo-200'>
				{values.map((tag) => (
					<span
						key={tag}
						className='flex-shrink-0 m-0.5 font-medium text-xs tracking-wide bg-indigo-500/50 text-white px-1 py-0.5 rounded-md'
					>
						{tag}
					</span>
				))}
				<input
					type={'text'}
					name={name}
					id={name}
					className='w-full bg-transparent outline-none tracking-wider'
					placeholder={hint}
					value={value || ''}
					onChange={handler}
					autoComplete='off'
					disabled={isLoading}
					required={isRequired}
				/>
			</div>
			{!error ? null : (
				<p className='ml-2 text-sm text-red-400 tracking-wide'>{error}</p>
			)}
		</div>
	);
};
