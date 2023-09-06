import { useRef } from 'react';
import { FiClock, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

type Props = {
	searchTerm: string;
};

export default function PreSearch({ searchTerm }: Props) {
	const ulRef = useRef<HTMLUListElement>(null);
	// const [searchValue, setSearchValue] = useState('');
	// query.set('search_query', searchTerm);

	// const handleSearch = debounce((e: ButtonClickHandler) => {});

	return (
		<ul
			ref={ulRef}
			className={`absolute top-12 bg-indigo-100 rounded-xl py-1.5 w-full overflow-hidden hidden group-focus-within/searchBar:block border border-indigo-200/50 shadow-md`}
		>
			<SearchPreview search={searchTerm} />
			<SearchPreview history='Zara Zara Bahekta Hai' />
			<SearchPreview history='history search query' />
			<SearchPreview history='Pre search query' />
		</ul>
	);
}

type SP = {
	search?: string;
	history?: string;
};

const SearchPreview = ({ search, history }: SP) => {
	return (
		<li className='flex items-stretch hover:bg-indigo-200/50'>
			<Link
				to={`/result?sq=${search || history}`}
				className='flex flex-1 items-center gap-2 px-3 py-1.5 tracking-wide font-semibold text-slate-700'
			>
				{!history ? (
					<>
						{!search ? null : (
							<>
								<FiSearch className='w-4 h-4' />
								<p>{search}</p>
							</>
						)}
					</>
				) : (
					<>
						<FiClock className='w-4 h-4' />
						<p>{history}</p>
					</>
				)}
			</Link>
			{!history ? null : (
				<div className='px-2 grid place-content-center'>
					<button
						type='button'
						className='px-1.5 py-1 text-xs text-red-400 hover:text-red-600 font-medium rounded-full hover:bg-red-400/30'
					>
						Remove
					</button>
				</div>
			)}
		</li>
	);
};
