import { MouseEvent, useRef } from 'react';
import {
	FiChevronRight,
	FiMaximize,
	FiMinimize,
	FiPause,
	FiPlay,
	FiRotateCcw,
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
		if (hoveredTimeSec < 0) {
			hoveredTimeSec = 0;
		}

		durationEl.classList.add('seekBar-duration-tracker');
		durationEl.style.setProperty(
			'--duration-left',
			`${((e.pageX - left - 23) * 100) / width}%`
		);
		durationEl.innerText = formateTime(hoveredTimeSec);
	};

	const handleMouseLeave = () => {
		const durationEl = seekBarDurationRef.current;
		if (!durationEl) return;

		durationEl.classList.remove('seekBar-duration-tracker');
	};

	return (
		<div
			className={`video-controls-container absolute bottom-0 left-0 right-0 px-1 py-2 z-20 opacity-100 group-hover/video-player-item:opacity-100 transition-opacity duration-300`}
		>
			{/* ads */}
			<div className='flex justify-between items-center'>
				<div className='bg-white flex items-center gap-2 w-fit px-2 py-3 rounded-md overflow-hidden mb-3'>
					{/* logo */}
					<div className=' w-10 h-10 bg-emerald-500/70 p-1.5 rounded-full'>
						<FiRotateCcw className='w-full h-full text-white' />
					</div>

					<div>
						<h1 className='text-sm font-[500] -mb-1'>Tone Matters</h1>
						<span className='text-sm text-slate-500'>grammarly.com</span>
					</div>

					<button className='bg-indigo-700 text-sm text-slate-200 px-2 py-1 rounded-2xl ml-2'>
						Try Now
					</button>
				</div>

				<div>
					<span>4</span>
				</div>
			</div>

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
					className='bg-indigo-800/90 text-white hidden px-1 rounded-md'
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
