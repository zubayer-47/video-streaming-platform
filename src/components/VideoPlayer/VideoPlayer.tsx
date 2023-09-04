import { FiChevronRight, FiPlay } from 'react-icons/fi';
import Ads from './Ads';
import usePlayer from './hooks/usePlayer';
import VideoController from './partials/VideoController';
import VideoLoading from './partials/VideoLoading';
import VideoPlayerThumbnail from './partials/VideoPlayerThumbnail';

type Props = {
	source: string;
	thumbnail?: string;
};

const VideoPlayer = ({ source, thumbnail }: Props) => {
	// const [show, setShow] = useState(false);
	const {
		parentRef,
		vidRef,
		vidSrcRef,
		progressRef,
		bufferRef,
		contextRef,
		isWaiting,
		removeThumbnail,
		isPlay,
		isMuted,
		duration,
		timeElapsed,
		volume,
		isFullScreen,
		settings,
		setSettings,
		handleContextMenu,
		handlePlayPause,
		handleSeekPosition,
		updateVolumeBar,
		toggleMute,
		toggleFullScreen,
		handlePlaybackSeed,
	} = usePlayer(source);

	return (
		<>
			<div
				className='w-full relative group/video-player-item rounded overflow-hidden'
				ref={parentRef}
				onContextMenu={handleContextMenu}
			>
				{isWaiting && <VideoLoading />}
				{!removeThumbnail && <VideoPlayerThumbnail thumbnail={thumbnail} />}

				<button
					type='button'
					className='absolute inset-0 bg-transparent outline-none grid place-content-center z-10 cursor-default'
					onClick={handlePlayPause}
				>
					<div
						className={`px-10 py-5 rounded-2xl grid place-content-center bg-indigo-600/50 hover:bg-indigo-600/70 cursor-pointer ${
							!isPlay ? 'block' : 'hidden'
						}`}
					>
						<FiPlay className='w-7 h-7 text-white' />
					</div>
				</button>

				<Ads />

				<VideoController
					progressRef={progressRef}
					bufferRef={bufferRef}
					vidRef={vidRef}
					isPlay={isPlay}
					isMuted={isMuted}
					duration={duration}
					timeElapsed={timeElapsed}
					volume={volume}
					isFullScreen={isFullScreen}
					settings={settings}
					handleSettings={setSettings}
					handlePlaybackSeed={handlePlaybackSeed}
					togglePlay={handlePlayPause}
					toggleMute={toggleMute}
					handleSeekPosition={handleSeekPosition}
					updateVolumeBar={updateVolumeBar}
					toggleFullScreen={toggleFullScreen}
				/>

				<video
					ref={vidRef}
					width={'100%'}
					height={'auto'}
					crossOrigin='anonymous'
					preload='auto'
					autoPlay={true}
					className='w-full h-full aspect-video'
				>
					<source ref={vidSrcRef} src='' type='video/mp4' />
					{/* <source src={source} type='video/mp4' /> */}
					{/* <track
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
					/> */}
				</video>
			</div>
			<ul
				ref={contextRef}
				className={`hidden py-1 bg-black/75 rounded-xl z-50`}
			>
				<li>
					<button
						className='text-white px-3 py-2 w-full flex gap-8 items-center justify-between hover:bg-black/50'
						onClick={() =>
							// handleSettings((prev) => ({
							// 	...prev,
							// 	visibleWindow: 'playback',
							// }))
							console.log('')
						}
					>
						<span className='flex items-center gap-2'>
							<span className='text-md text-gray-300'>Playback Speed</span>
						</span>
						<span className='flex items-center text-xs'>
							<span className='underline text-gray-300'>
								{settings?.playback === 1 ? 'Normal' : settings?.playback}
							</span>
							<FiChevronRight className='w-5 h-5 stroke-1 text-gray-300' />
						</span>
					</button>
				</li>
				<li>
					<button
						type='button'
						className='text-white px-3 py-2 w-full flex gap-8 items-center justify-between hover:bg-black/50'
						onClick={() =>
							// handleSettings((prev) => ({
							// 	...prev,
							// 	visibleWindow: 'subtitle',
							// }))
							console.log('')
						}
					>
						<span className='flex items-center gap-2'>
							<span className='text-md text-gray-300'>Subtitle</span>
						</span>
						<span className='flex items-center text-xs'>
							<span className='underline text-gray-300'>
								{settings?.subtitle || 'Off'}
							</span>
							<FiChevronRight className='w-5 h-5 stroke-1 text-gray-300' />
						</span>
					</button>
				</li>
				<li>
					<button
						type='button'
						className='text-white px-3 py-2  w-full flex gap-8 items-center justify-between hover:bg-black/50'
						onClick={() =>
							// handleSettings((prev) => ({
							// 	...prev,
							// 	visibleWindow: 'quality',
							// }))
							console.log('')
						}
					>
						<span className='flex items-center gap-2'>
							<span className='text-md text-gray-300'>Quality</span>
						</span>
						<span className='flex items-center text-xs'>
							<span className='underline text-gray-300'>
								{settings?.quality || 'Auto'}
							</span>
							<FiChevronRight className='w-5 h-5 stroke-1 text-gray-300' />
						</span>
					</button>
				</li>
			</ul>
		</>
	);
};

export default VideoPlayer;
