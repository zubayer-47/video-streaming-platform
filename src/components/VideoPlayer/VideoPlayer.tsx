import { useEffect, useRef, useState } from 'react';
import { FiPlay } from 'react-icons/fi';
import defaultThumbnail from '../../assets/demo.jpg';
import { BASE_URL } from '../../libs/axios';
import { InputType } from '../../types/custom';
import VideoController from './partials/VideoController';

type Props = {
	source: string;
	thumbnail?: string;
};

const VideoPlayer = ({ source, thumbnail }: Props) => {
	const vidRef = useRef<HTMLVideoElement>(null);

	const [isPlay, setPlay] = useState(false);
	const [isMuted, setMuted] = useState(false);
	const [duration, setDuration] = useState(0);
	const [timeElapsed, setTimeElapsed] = useState(0);
	const [volume, setVolume] = useState(0);
	const [isFullScreen, setIsFullScreen] = useState(false);

	useEffect(() => {
		const vid = vidRef?.current;

		const play = async () => {
			try {
				await vid!.play();
				setPlay(true);
			} catch (error) {
				console.log('error :', error);
			}
		};

		if (vid) {
			// Events
			vid.addEventListener('loadedmetadata', () => {
				setVolume(vid.volume);
				setDuration(+vid?.duration || 0);
				// AutoPlay
				play();
			});

			vid.addEventListener('timeupdate', () => {
				setTimeElapsed(vid?.currentTime || 0);
			});
		}

		return () => {
			if (vid) {
				vid.removeEventListener('loadedmetadata', () => undefined);
				vid.removeEventListener('timeupdate', () => undefined);
			}
		};
	}, []);

	const togglePlay = () => {
		setPlay((prev) => !prev);
		const video = vidRef?.current;
		if (video?.paused || video?.ended) {
			video.play();
		} else {
			video?.pause();
		}
	};

	const updateSeekBar = (e: InputType) => {
		const video = vidRef?.current;

		if (video) {
			const selectDuration = e.target.value;
			setTimeElapsed(parseFloat(selectDuration) || 0);
			video.currentTime = +selectDuration;
		}
	};

	const updateVolumeBar = (e: InputType) => {
		const video = vidRef?.current;

		if (video) {
			const selectDuration = e.target.value;
			setVolume(parseFloat(selectDuration) || 0);
			video.volume = +selectDuration;
		}
	};

	const toggleMute = () => {
		if (vidRef?.current) {
			vidRef.current.muted = !vidRef.current.muted;
			setMuted((prev) => !prev);
		}
	};

	const toggleFullScreen = () => {
		const video = vidRef?.current;
		if (video) {
			if (!isFullScreen) {
				video.requestFullscreen();
				setIsFullScreen(true);
			} else {
				document.exitFullscreen();
				setIsFullScreen(false);
			}
		}
	};

	return (
		<div className='w-full relative group/video-player-item'>
			<button
				type='button'
				className='absolute inset-0 bg-transparent outline-none grid place-content-center z-10 cursor-default'
				onClick={togglePlay}
			>
				<div
					className={`px-10 py-5 rounded-2xl grid place-content-center bg-indigo-600/50 hover:bg-indigo-600/70 cursor-pointer ${
						!isPlay ? 'block' : 'hidden'
					}`}
				>
					<FiPlay className='w-7 h-7 text-white' />
				</div>
			</button>

			<video
				ref={vidRef}
				width={'100%'}
				height={'auto'}
				poster={thumbnail || defaultThumbnail}
				crossOrigin='anonymous'
				preload='metadata'
				// className='object-fill'
			>
				<source src={`${BASE_URL}/videos/${source}`} type='video/mp4' />
			</video>

			<VideoController
				isPlay={isPlay}
				isMuted={isMuted}
				duration={duration}
				timeElapsed={timeElapsed}
				volume={volume}
				togglePlay={togglePlay}
				toggleMute={toggleMute}
				updateSeekBar={updateSeekBar}
				updateVolumeBar={updateVolumeBar}
				toggleFullScreen={toggleFullScreen}
			/>
		</div>
	);
};

export default VideoPlayer;
