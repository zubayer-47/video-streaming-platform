import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { InputType } from '../../types/custom';
import PreSearch from './PreSearch';

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchTerm = (e: InputType) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div className='flex-1 relative max-w-2xl flex items-stretch group/searchBar'>
			<input
				type='search'
				name='search'
				className='w-full pl-5 pr-3 py-2 bg-transparent outline-none tracking-wider search-bar rounded-l-full border border-indigo-200'
				placeholder='Search'
				value={searchTerm}
				onChange={handleSearchTerm}
				autoComplete='off'
			/>

			<button
				type='button'
				title='Search'
				className='bg-indigo-100 w-16 grid place-content-center rounded-r-full border border-indigo-200'
			>
				<FiSearch className='w-6 h-6 text-slate-700' />
			</button>
			<PreSearch searchTerm={searchTerm} />
		</div>
	);
};

export default SearchBar;
