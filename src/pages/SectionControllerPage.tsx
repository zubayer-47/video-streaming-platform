import { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useQuery from '../hooks/useQuery';
import History from './history/History';
import SearchPage from './search/SearchPage';
import WatchLater from './watchLater/WatchLater';

const SectionControllerPage = () => {
	const query = useQuery();

	let content: ReactNode;
	if (!query.get('sec')) content = <SearchPage />;
	else if (query.get('sec') === 'history') content = <History />;
	else if (query.get('sec') === 'wl') content = <WatchLater />;

	return (
		<div className='flex flex-col gap-4 max-w-[70rem] mx-auto mt-5'>
			{new Array(10).fill(false).map(() => (
				<div key={uuidv4()}>{content}</div>
			))}
		</div>
	);
};

export default SectionControllerPage;
