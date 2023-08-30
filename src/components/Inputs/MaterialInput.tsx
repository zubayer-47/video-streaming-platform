import { FiPlus } from 'react-icons/fi';
import { InputType, SelectType, TextAreaHandler } from '../../types/custom';

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
					className={`inline-block uppercase ml-1 mb-1 font-bold text-xs text-slate-600 ${!isRequired ? "" : "after:content-['*'] after:text-red-500"}`}
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
	handler: TextAreaHandler;
	title?: string;
	hint?: string;
	value?: string | null;
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

			{isLoading ? (
				<div className='w-full px-3 py-2 rounded-md bg-transparent outline-none tracking-wider border border-indigo-200'>
					{value?.split(',').map((tag) => (
						<span
							key={tag}
							className='flex-shrink-0 m-0.5 font-medium text-xs tracking-wide text-slate-700 bg-indigo-500/20 px-1 py-0.5 rounded-sm'
						>
							{tag.trim()}
						</span>
					))}
				</div>
			) : (
				<textarea
					name={name}
					id={name}
					className='w-full px-3 py-2 rounded-md bg-transparent outline-none tracking-wider border border-indigo-200'
					placeholder={hint}
					value={value || ''}
					onChange={handler}
					autoComplete='off'
					rows={2}
					disabled={isLoading}
					required={isRequired}
				/>
			)}
			{!error ? null : (
				<p className='ml-2 text-sm text-red-400 tracking-wide'>{error}</p>
			)}
		</div>
	);
};

type ThumbType = {
	preview: string;
	handler: (e: InputType) => void;
	isLoading?: boolean;
	error?: string;
};

export const MaterialThumbnail = ({
	preview,
	handler,
	isLoading,
	error,
}: ThumbType) => {
	return (
		<div className='flex-col gap-2'>
			<p className='uppercase ml-1 mb-1 font-bold tracking-wide text-xs text-slate-500'>
				Thumbnail
			</p>
			<label
				htmlFor='thumbnail'
				className='w-36 h-24 relative grid place-content-center border border-dashed border-indigo-300 rounded-lg cursor-pointer overflow-hidden'
			>
				<FiPlus className='w-6 h-6 stroke-1 text-indigo-600' />
				<input
					type='file'
					name='thumbnail'
					id='thumbnail'
					onChange={handler}
					className='hidden'
					accept='image/*'
					disabled={isLoading}
				/>
				{preview && (
					<img
						src={preview}
						alt='thumbnail image'
						className='absolute inset-0 w-full h-full object-cover'
					/>
				)}
			</label>
			{!error ? null : (
				<p className='ml-2 text-sm text-red-400 tracking-wide'>{error}</p>
			)}
		</div>
	);
};

type OptionsType = {
	id: string;
	name: string;
};

type SelectProp = {
	name: string;
	value?: string | null;
	defValue: string;
	options: OptionsType[];
	handler: (e: SelectType) => void;
	defDisable?: boolean;
	isLoading?: boolean;
	isRequired?: boolean;
	error?: string | null;
};

export const InlineSelectInput = ({
	name,
	value,
	defValue,
	options,
	handler,
	defDisable = false,
	isLoading = false,
	isRequired = false,
}: SelectProp) => {
	return (
		<select
			name={name}
			id={name}
			className='inline-block outline-none bg-transparent py-2 text-right font-bold text-slate-500'
			onChange={handler}
			value={value || ''}
			disabled={isLoading}
			required={isRequired}
		>
			<option value={defValue} disabled={defDisable}>
				{defValue}
			</option>
			{options.map((op) => (
				<option key={op.id} value={op.id}>
					{op.name}
				</option>
			))}
		</select>
	);
};
