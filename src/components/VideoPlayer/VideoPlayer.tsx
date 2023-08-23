import { FiPlay } from 'react-icons/fi';
import defaultThumbnail from '../../assets/demo.jpg';
// import { BASE_URL } from '../../libs/axios';
import usePlayer from './hooks/usePlayer';
import VideoController from './partials/VideoController';

type Props = {
	source: string;
	thumbnail?: string;
};

const VideoPlayer = ({ source, thumbnail }: Props) => {
	const {
		parentRef,
		vidRef,
		removeThumbnail,
		isPlay,
		isMuted,
		duration,
		timeElapsed,
		volume,
		isFullScreen,
		settings,
		setSettings,
		togglePlay,
		updateSeekBar,
		updateVolumeBar,
		toggleMute,
		toggleFullScreen,
		handlePlaybackSeed,
	} = usePlayer();

	return (
		<div className='w-full relative group/video-player-item' ref={parentRef}>
			{!removeThumbnail && (
				<div
					className='video-thumb object-fill'
					style={{ backgroundImage: `url(${thumbnail || defaultThumbnail})` }}
				/>
			)}

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

			<VideoController
				isPlay={isPlay}
				isMuted={isMuted}
				duration={duration}
				timeElapsed={timeElapsed}
				volume={volume}
				isFullScreen={isFullScreen}
				settings={settings}
				handleSettings={setSettings}
				handlePlaybackSeed={handlePlaybackSeed}
				togglePlay={togglePlay}
				toggleMute={toggleMute}
				updateSeekBar={updateSeekBar}
				updateVolumeBar={updateVolumeBar}
				toggleFullScreen={toggleFullScreen}
			/>

			<video
				ref={vidRef}
				width={'100%'}
				height={'auto'}
				crossOrigin='anonymous'
				preload='auto'
				className='w-full h-full'
			>
				{/* <source src={`${BASE_URL}/videos/${source}`} type='video/mp4' /> */}
				<source src={source} type='video/mp4' />
				<track
					label='English'
					kind='subtitles'
					srcLang='en'
					src='captions/vtt/sintel-en.vtt'
					default
				/>
				<track
					label='Deutsch'
					kind='subtitles'
					srcLang='de'
					src='captions/vtt/sintel-de.vtt'
				/>
				<track
					label='Español'
					kind='subtitles'
					srcLang='es'
					src='captions/vtt/sintel-es.vtt'
				/>
			</video>
		</div>
	);
};

export default VideoPlayer;
