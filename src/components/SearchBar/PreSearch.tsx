import { useRef } from 'react';
import { FiClock, FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

type Props = {
	searchTerm: string;
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export default function PreSearch({ searchTerm, setSearchTerm }: Props) {
	const ulRef = useRef<HTMLUListElement>(null);
	// const [searchValue, setSearchValue] = useState('');
	// query.set('search_query', searchTerm);

	// const handleSearch = debounce((e: ButtonClickHandler) => {});

	return (
		<ul
			ref={ulRef}
			className={`absolute top-12 bg-indigo-100 dark:bg-dark-modal rounded-xl py-1.5 w-full overflow-hidden hidden group-focus-within/searchBar:block border border-indigo-200/50 dark:border-dark-text/20 shadow-md`}
		>
			<SearchPreview setSearchTerm={setSearchTerm} search={searchTerm} />
			<SearchPreview
				setSearchTerm={setSearchTerm}
				history='Zara Zara Bahekta Hai'
			/>
			<SearchPreview
				setSearchTerm={setSearchTerm}
				history='history search query'
			/>
			<SearchPreview setSearchTerm={setSearchTerm} history='Pre search query' />
		</ul>
	);
}

type SP = {
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
	search?: string;
	history?: string;
};

const SearchPreview = ({ setSearchTerm, search, history }: SP) => {
	const navigate = useNavigate();

	return (
		<li className='flex w-full items-stretch hover:bg-indigo-200/50 dark:hover:bg-dark-overlay-100'>
			<button
				onClick={() => {
					if (search) {
						setSearchTerm(search);
						navigate(`/result?sq=${search}`);
					} else if (history) {
						setSearchTerm(history);
						navigate(`/result?sq=${history}`);
					}
				}}
				className='flex flex-1 items-center gap-2 px-3 py-1.5 tracking-wide font-semibold text-slate-700 dark:text-slate-300'
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
			</button>
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
