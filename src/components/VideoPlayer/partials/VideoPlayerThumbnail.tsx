import React, { useEffect, useRef } from 'react';

type TProps = {
	thumbnail?: string;
};

const VideoPlayerThumbnail: React.FC<TProps> = ({ thumbnail }) => {
	const thumbRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!thumbRef.current || !thumbnail) return;

		const thumb = thumbRef.current;
		const imageURL = `${
			import.meta.env.VITE_API_URI
		}/static/thumbnails/${thumbnail}`;

		const image = new Image();

		const onLoad = () => {
			thumb.style.backgroundImage = `url(${imageURL})`;
		};
		image.addEventListener('load', onLoad);
		image.src = imageURL;
		return () => {
			image.removeEventListener('load', onLoad);
		};
	}, [thumbnail]);

	return (
		<div
			ref={thumbRef}
			className='video-thumb object-fill'
			// style={{
			// 	backgroundImage: `url(${
			// 		(thumbnail &&
			// 			`${import.meta.env.VITE_API_URI}/static/thumbnails/${thumbnail}`) ||
			// 		defaultThumbnail
			// 	})`,
			// }}
		/>
	);
};

export default VideoPlayerThumbnail;
