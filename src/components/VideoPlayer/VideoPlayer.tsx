import { FiChevronRight, FiPlay } from 'react-icons/fi';
import useQuery from '../../hooks/useQuery';
import Playlist from '../../pages/profiles/video/partials/Playlist';
import { MetaDataType } from '../../types/custom';
import usePlayer from './hooks/usePlayer';
import VideoController from './partials/VideoController';
import VideoLoading from './partials/VideoLoading';
import VideoPlayerThumbnail from './partials/VideoPlayerThumbnail';

type Props = {
	source: string;
	metaData: MetaDataType;
	isLoading: boolean;
	thumbnail?: string;
};

const VideoPlayer = ({ source, metaData, isLoading, thumbnail }: Props) => {
	const query = useQuery();

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
		availableAds,
		setSettings,
		handleContextMenu,
		handlePlayPause,
		handleSeekPosition,
		updateVolumeBar,
		toggleMute,
		toggleFullScreen,
		handlePlaybackSeed,
	} = usePlayer(source);

	const isPlaylistExist = query.has('p');

	return (
		<div
			className={`${!isPlaylistExist ? '' : 'flex flex-col lg:flex-row gap-5'}`}
		>
			<div className='flex-1'>
				<div
					className='w-full flex-1 relative group/video-player-item rounded overflow-hidden'
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

					{/* {availableAds.length ? null : <Ads />} */}
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
						ads={availableAds}
						thumbnail={thumbnail}
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
						autoPlay
						className={`aspect-video  ${
							!isPlaylistExist ? '2xl:h-[80vh]' : 'h-full '
						}`}
					>
						<source ref={vidSrcRef} src='' type='video/mp4' />
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
			</div>

			{isPlaylistExist && (
				<Playlist
					vidRef={vidRef}
					playlist={metaData.playlist}
					isLoading={isLoading}
				/>
			)}
		</div>
	);
};

export default VideoPlayer;
