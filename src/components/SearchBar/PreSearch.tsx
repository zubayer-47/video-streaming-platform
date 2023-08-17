import { FiClock, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

type SP = {
	search: string;
	isHistory?: boolean;
};
const SearchPreview = ({ search, isHistory }: SP) => {
	return (
		<li className='flex items-stretch hover:bg-indigo-200/50'>
			<Link
				to={'/'}
				className='flex flex-1 items-center gap-2 px-3 py-1.5 tracking-wide font-semibold text-slate-700'
			>
				{!isHistory ? (
					<FiSearch className='w-4 h-4' />
				) : (
					<FiClock className='w-4 h-4' />
				)}
				<p>{search}</p>
			</Link>
			{!isHistory ? null : (
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

const PreSearch = () => {
	return (
		<ul className='absolute top-12 bg-indigo-100 rounded-xl py-1.5 w-full overflow-hidden hidden pre-search'>
			<SearchPreview search='Alan Walker Mashup' isHistory />
			<SearchPreview search='Zara Zara Bahekta Hai' isHistory />
			<SearchPreview search='history search query' isHistory />
			<SearchPreview search='Pre search query' />
		</ul>
	);
};

export default PreSearch;
