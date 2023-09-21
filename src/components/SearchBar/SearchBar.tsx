import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { FormHandler, InputType } from '../../types/custom';
import PreSearch from './PreSearch';

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const navigate = useNavigate();

	const handleSearchTerm = (e: InputType) => {
		setSearchTerm(e.target.value);
	};

	const onSubmit: FormHandler = (e) => {
		e.preventDefault();

		navigate(`/result?sq=${searchTerm}`);
	};

	return (
		<form
			onSubmit={onSubmit}
			className='flex-1 relative max-w-2xl flex items-stretch group/searchBar'
		>
			<input
				type='search'
				name='search'
				className='hidden md:block w-full pl-5 pr-3 py-2 bg-transparent outline-none tracking-wider search-bar rounded-l-full border border-indigo-200 dark:border-dark-text/20 dark:text-slate-300'
				placeholder='Search'
				value={searchTerm}
				onChange={handleSearchTerm}
				autoComplete='off'
			/>

			<button
				type='submit'
				title='Search'
				className='bg-indigo-100 dark:bg-transparent w-16 grid place-content-center rounded-r-full md:border border-indigo-200 dark:border-dark-text/20'
			>
				<FiSearch className='w-6 h-6 text-slate-700 dark:text-slate-300' />
			</button>
			<PreSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
		</form>
	);
};

export default SearchBar;
