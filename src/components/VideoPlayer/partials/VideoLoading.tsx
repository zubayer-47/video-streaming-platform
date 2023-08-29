import React from 'react';
import { FiLoader } from 'react-icons/fi';

const VideoLoading = () => {
	return (
		<div className='absolute inset-0 grid place-content-center bg-black/50'>
			<FiLoader className='w-12 h-12 animate-spin text-indigo-200 z-10' />
		</div>
	);
};

export default VideoLoading;
