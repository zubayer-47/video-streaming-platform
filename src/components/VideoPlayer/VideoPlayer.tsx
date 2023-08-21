import { useCallback, useEffect, useRef, useState } from 'react';
import { FiPlay } from 'react-icons/fi';
import defaultThumbnail from '../../assets/demo.jpg';
// import { BASE_URL } from '../../libs/axios';
import { ButtonClickHandler, InputType } from '../../types/custom';
import VideoController from './partials/VideoController';

type Props = {
	source: string;
	thumbnail?: string;
};

const VideoPlayer = ({ source, thumbnail }: Props) => {
	const parentRef = useRef<HTMLDivElement>(null);
	const vidRef = useRef<HTMLVideoElement>(null);

	const [isPlay, setPlay] = useState(false);
	const [isMuted, setMuted] = useState(false);
	const [duration, setDuration] = useState(0);
	const [timeElapsed, setTimeElapsed] = useState(0);
	const [volume, setVolume] = useState(0);
	const [isSettings, setIsSettings] = useState(false);
	const [isPlaybackSpeedVisible, setIsPlaybackSpeedVisible] = useState(false);
	const [playbackSpeed, setPlaybackSpeed] = useState('');
	const [isVideoQualityVisible, setIsVideoQualityVisible] = useState(false);
	const [videoQuality, setVideoQuality] = useState('');
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
				// console.log(vid.duration)
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
		if (isSettings) {
			setIsSettings(false);
		}
		const video = vidRef?.current;
		// console.log(video?.paused || video?.ended)
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

	const toggleFullScreen = useCallback(async () => {
		const parent = parentRef?.current;
		if (parent) {
			if (!document.fullscreenElement) {
				await parent.requestFullscreen();
			} else {
				await document.exitFullscreen();
			}
		}
	}, []);

	const toggleSettings = () => {
		setIsSettings((prev) => !prev);
	};

	const togglePlaybackSpeedVisible = useCallback(() => {
		setIsPlaybackSpeedVisible((prev) => !prev);
		setIsSettings((prev) => !prev);
	}, []);

	const toggleVideoQualityVisible = useCallback(() => {
		setIsVideoQualityVisible((prev) => !prev);
		setIsSettings((prev) => !prev);
	}, []);

	const selectSettingsMode: ButtonClickHandler = useCallback(
		(e) => {
			switch (e.currentTarget.id) {
				case "playback": {
					setPlaybackSpeed(e.currentTarget.name);
					togglePlaybackSpeedVisible();
					break;
				}
				case "quality": {
					setVideoQuality(e.currentTarget.name);
					toggleVideoQualityVisible();
				}
			}
		},
		[togglePlaybackSpeedVisible, toggleVideoQualityVisible]
	);

	useEffect(() => {
		function onFullscreenChange() {
			setIsFullScreen(!!document.fullscreenElement);
		}
		document.addEventListener('fullscreenchange', onFullscreenChange);

		return () =>
			document.removeEventListener('fullscreenchange', onFullscreenChange);
	}, []);

	return (
		<div className='w-full relative group/video-player-item' ref={parentRef}>
			<button
				type='button'
				className='absolute inset-0 bg-transparent outline-none grid place-content-center z-10 cursor-default'
				onClick={togglePlay}
			>
				<div
					className={`px-10 py-5 rounded-2xl grid place-content-center bg-indigo-600/50 hover:bg-indigo-600/70 cursor-pointer ${!isPlay ? 'block' : 'hidden'
						}`}
				>
					<FiPlay className='w-7 h-7 text-white' />
				</div>
			</button>

			<VideoController
				isPlay={isPlay}
				isMuted={isMuted}
				duration={duration}
				timeElapsed={timeElapsed}
				volume={volume}
				isFullScreen={isFullScreen}
				isSettings={isSettings}
				isPlaybackSpeedVisible={isPlaybackSpeedVisible}
				playbackSpeed={playbackSpeed}
				isQualityVisible={isVideoQualityVisible}
				quality={videoQuality}
				togglePlaybackSpeedVisible={togglePlaybackSpeedVisible}
				togglePlay={togglePlay}
				toggleMute={toggleMute}
				updateSeekBar={updateSeekBar}
				updateVolumeBar={updateVolumeBar}
				toggleFullScreen={toggleFullScreen}
				toggleSettings={toggleSettings}
				toggleQualityVisible={toggleVideoQualityVisible}
				selectSettingsMode={selectSettingsMode}
			/>

			<video
				ref={vidRef}
				width={'100%'}
				height={'auto'}
				poster={thumbnail || defaultThumbnail}
				crossOrigin='anonymous'
				preload='auto'
				className='w-full h-full'
			>
				{/* <source src={`${BASE_URL}/videos/${source}`} type='video/mp4' /> */}
				<source src={source} type='video/mp4' />
			</video>
		</div>
	);
};

export default VideoPlayer;
