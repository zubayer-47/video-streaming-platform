import { MouseEvent, useRef } from 'react';
import {
	FiChevronRight,
	FiMaximize,
	FiMinimize,
	FiPause,
	FiPlay,
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
	progressRef: React.RefObject<HTMLDivElement>;
	bufferRef: React.RefObject<HTMLDivElement>;
	vidRef: React.RefObject<HTMLVideoElement>;
	isPlay: boolean;
	isMuted: boolean;
	duration: number;
	timeElapsed: number;
	volume: number;
	isFullScreen: boolean;
	settings: PlayerSettingsType;
	thumbnail?: string;
	handleSettings: React.Dispatch<React.SetStateAction<PlayerSettingsType>>;
	handlePlaybackSeed: ButtonClickHandler;
	togglePlay: () => void;
	toggleMute: () => void;
	handleSeekPosition: (pos: number) => void;
	updateVolumeBar: (e: InputType) => void;
	toggleFullScreen: () => void;
};

const VideoController = ({
	progressRef,
	bufferRef,
	vidRef,
	isPlay,
	isMuted,
	duration,
	timeElapsed,
	volume,
	isFullScreen,
	settings,
	thumbnail,
	togglePlay,
	toggleMute,
	handleSeekPosition,
	updateVolumeBar,
	toggleFullScreen,
	handleSettings,
	handlePlaybackSeed,
}: Props) => {
	const seekBarDurationRef = useRef<HTMLDivElement>(null);

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

	const handleSeekBar = (e: MouseEvent<HTMLDivElement>) => {
		const { left, width } = e.currentTarget.getBoundingClientRect();
		const clickedPos = (e.clientX - left) / width;
		handleSeekPosition(clickedPos);
	};

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		// console.log(e.pageX, e.pageY);
		const durationEl = seekBarDurationRef.current;
		const { left, width } = e.currentTarget.getBoundingClientRect();
		if (!durationEl || !vidRef.current) return;

		const durationMs = vidRef.current.duration * 1000 || 0;

		let hoveredTimeSec = (durationMs * ((e.clientX - left) / width)) / 1000;
		if (hoveredTimeSec < 0) hoveredTimeSec = 0;

		const centerPos = 22.5;
		const cursorPos = ((e.pageX - left - centerPos) * 100) / width;

		if (cursorPos < 93) {
			durationEl.classList.remove('seekBar-duration-tracker-end');
			durationEl.classList.add('seekBar-duration-tracker-start');
			durationEl.style.setProperty(
				'--duration-left',
				`${cursorPos < 0.5 ? 0.5 : cursorPos}%`
			);
		} else {
			durationEl.classList.remove('seekBar-duration-tracker-start');
			durationEl.classList.add('seekBar-duration-tracker-end');
			durationEl.style.setProperty('--duration-left', `1%`);
		}
		durationEl.innerText = formateTime(hoveredTimeSec);
	};

	const handleMouseLeave = () => {
		const durationEl = seekBarDurationRef.current;
		if (!durationEl) return;

		durationEl.classList.remove('seekBar-duration-tracker-start');
		durationEl.classList.remove('seekBar-duration-tracker-end');
	};

	return (
		<div
			className={`video-controls-container absolute bottom-0 left-0 right-0 px-1 py-2 z-20 opacity-100 group-hover/video-player-item:opacity-100 transition-opacity duration-300`}
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
			<div
				className='flex items-center w-full h-1 bg-white/40 cursor-pointer hover:h-2 transition-all delay-75'
				onClick={handleSeekBar}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
			>
				{/* Progress Bar */}
				<div className='h-full bg-indigo-500 z-[1]' ref={progressRef} />
				{/* Buffer Bar */}
				<div className='h-full bg-black' ref={bufferRef} />

				{/* seekBar Duration Modal */}
				<div
					className='absolute bottom-[3.2rem] bg-black/70 text-white text-xs px-1 py-0.5 tracking-wider rounded-md hidden'
					ref={seekBarDurationRef}
				></div>
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
