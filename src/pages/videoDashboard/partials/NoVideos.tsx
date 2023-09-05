import { FiYoutube } from 'react-icons/fi';

const NoVideos = () => {
	return (
		<div className='flex flex-col place-items-center justify-center h-full select-none'>
			<FiYoutube className='w-20 h-20 text-indigo-500/50' />
			<h1 className='text-slate-400'>No Videos Exist</h1>
		</div>
	);
};

export default NoVideos;
