import {
	FiChevronRight,
	FiMaximize,
	FiMinimize,
	FiPause,
	FiPlay,
	// FiPlayCircle,
	FiSettings,
	FiVolume1,
	FiVolume2,
	FiVolumeX,
} from 'react-icons/fi';
import '../../../index.css';
import { formateTime } from '../../../libs/helper';
import { ButtonClickHandler, InputType } from '../../../types/custom';
import { PlayerSettingsType } from '../hooks/usePlayer';
import PlaybackSpeed from './widgets/PlaybackSpeed';
import Subtitle from './widgets/Subtitle';

type Props = {
	isPlay: boolean;
	isMuted: boolean;
	duration: number;
	timeElapsed: number;
	volume: number;
	isFullScreen: boolean;
	settings: PlayerSettingsType;
	handleSettings: React.Dispatch<React.SetStateAction<PlayerSettingsType>>;
	handlePlaybackSeed: ButtonClickHandler;
	togglePlay: () => void;
	toggleMute: () => void;
	updateSeekBar: (e: InputType) => void;
	updateVolumeBar: (e: InputType) => void;
	toggleFullScreen: () => void;
};

const VideoController = ({
	isPlay,
	isMuted,
	duration,
	timeElapsed,
	volume,
	isFullScreen,
	settings,
	togglePlay,
	toggleMute,
	updateSeekBar,
	updateVolumeBar,
	toggleFullScreen,
	handleSettings,
	handlePlaybackSeed,
}: Props) => {
	const volIcon = () => {
		if (!isMuted) {
			return volume < 0.5 ? (
				<FiVolume1 className='w-5 h-5 text-white stroke-2' />
			) : (
				<FiVolume2 className='w-5 h-5 text-white stroke-2' />
			);
		}
		return <FiVolumeX className='w-5 h-5 text-red-500 fill-white stroke-1' />;
	};

	return (
		<div
			className={`video-controls-container absolute bottom-0 left-0 right-0 px-1 py-2 z-20 opacity-0 group-hover/video-player-item:opacity-100 transition-opacity duration-300`}
		>
			{/* settings popup window gose here  */}
			<div
				className={`absolute py-1 right-3 bg-black/75 rounded-xl overflow-hidden bottom-14`}
			>
				{settings.visibleWindow === 'settings' && (
					<ul>
						<li>
							<button
								className='text-white px-3 py-2 w-full flex gap-8 items-center justify-between hover:bg-black/50'
								onClick={() =>
									handleSettings((prev) => ({
										...prev,
										visibleWindow: 'playback',
									}))
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
									handleSettings((prev) => ({
										...prev,
										visibleWindow: 'subtitle',
									}))
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
									handleSettings((prev) => ({
										...prev,
										visibleWindow: 'quality',
									}))
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
				)}
				{settings.visibleWindow === 'playback' && (
					<PlaybackSpeed
						settings={settings}
						handleSettings={handleSettings}
						handlePlaybackSeed={handlePlaybackSeed}
					/>
				)}
				{settings.visibleWindow === 'subtitle' && (
					<Subtitle settings={settings} handleSettings={handleSettings} />
				)}
			</div>
			{/* Video SeekBar */}
			<div className='flex items-center'>
				<input
					type='range'
					className='w-full h-1 hover:h-2 video-range bg-white/40'
					step={0.1}
					max={duration}
					value={timeElapsed}
					onChange={updateSeekBar}
				/>
			</div>
			{/* Video Controller Information */}
			<div className='mt-1 flex items-center justify-between gap-1.5'>
				{/* Left side settings */}
				<div className='flex items-center gap-1.5'>
					{/* Video Play/Pause */}
					<button
						type='button'
						className='p-1 bg-transparent outline-none'
						onClick={togglePlay}
					>
						{!isPlay ? (
							<FiPlay className='w-5 h-5 fill-white text-transparent' />
						) : (
							<FiPause className='w-5 h-5 fill-white text-transparent' />
						)}
					</button>
					{/* Video timestamps */}
					<div className='flex items-center gap-1 text-white text-sm'>
						<span>{formateTime(timeElapsed)}</span>
						<span>/</span>
						<span>{formateTime(duration)}</span>
					</div>
					{/* Video Volume */}
					<div className='flex items-center gap-1 group/video-player-volume'>
						<button
							type='button'
							className='p-1 bg-transparent outline-none'
							onClick={toggleMute}
						>
							{volIcon()}
						</button>
						<input
							type='range'
							min='0'
							max='1'
							step='0.1'
							className='invisible opacity-0 group-hover/video-player-volume:visible group-hover/video-player-volume:opacity-100 volume-range h-1 hover:h-2 w-14 bg-white/40 mr-3 transition-opacity duration-300'
							value={!isMuted ? volume : 0}
							onChange={updateVolumeBar}
						/>
					</div>
				</div>
				{/* Right side settings */}
				<div className='flex items-center gap-1.5'>
					<button
						type='button'
						className='p-1 bg-transparent outline-none'
						onClick={() =>
							handleSettings((prev) => ({
								...prev,
								visibleWindow:
									prev.visibleWindow === 'settings' ? 'none' : 'settings',
							}))
						}
					>
						<FiSettings
							className={`w-5 h-5 text-white stroke-2 ${
								settings.visibleWindow === 'none'
									? '-rotate-[20deg]'
									: 'rotate-[20deg]'
							} transition-transform`}
						/>
					</button>
					<button
						type='button'
						className='p-1 bg-transparent outline-none'
						onClick={toggleFullScreen}
					>
						{!isFullScreen ? (
							<FiMaximize className='w-5 h-5 text-white stroke-2' />
						) : (
							<FiMinimize className='w-5 h-5 text-white stroke-2' />
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default VideoController;
