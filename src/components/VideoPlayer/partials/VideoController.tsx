import {
	FiChevronLeft,
	FiChevronRight,
	FiMaximize,
	FiMinimize,
	FiPause,
	FiPlay,
	// FiPlayCircle,
	FiSettings,
	FiVolume2,
	FiVolumeX
} from 'react-icons/fi';
import '../../../index.css';
import { formateTime } from '../../../libs/helper';
import { ButtonClickHandler, InputType } from '../../../types/custom';

type Props = {
	isPlay: boolean;
	isMuted: boolean;
	duration: number;
	timeElapsed: number;
	volume: number;
	isFullScreen: boolean;
	isSettings: boolean;
	isPlaybackSpeedVisible: boolean;
	playbackSpeed: string;
	togglePlay: () => void;
	toggleMute: () => void;
	updateSeekBar: (e: InputType) => void;
	updateVolumeBar: (e: InputType) => void;
	toggleFullScreen: () => void;
	toggleSettings: () => void;
	togglePlaybackSpeedVisible: () => void;
	selectPlaybackSpeed: ButtonClickHandler
};

const VideoController = ({
	isPlay,
	isMuted,
	duration,
	timeElapsed,
	volume,
	isFullScreen,
	isSettings,
	isPlaybackSpeedVisible,
	playbackSpeed,
	togglePlay,
	toggleMute,
	updateSeekBar,
	updateVolumeBar,
	toggleFullScreen,
	toggleSettings,
	togglePlaybackSpeedVisible,
	selectPlaybackSpeed
}: Props) => {

	return (
		<div className={`video-controls-container absolute bottom-0 left-0 right-0 px-1 py-2 z-20 opacity-0 group-hover/video-player-item:opacity-100 transition-opacity duration-300 ${!isPlay ? "opacity-100" : "opacity-0"}`}>
			{/* Video SeekBar */}
			<div className='flex items-center'>
				<input
					type='range'
					className='w-full h-1 hover:h-2 video-range bg-white/20'
					step={0.1}
					max={duration}
					value={timeElapsed}
					onChange={updateSeekBar}
				/>
			</div>
			{/* Video Controller Information */}
			<div className='mt-1 flex items-center justify-between gap-1.5'>
				<div className='flex items-center gap-1.5'>
					{/* Video Play/Pause */}
					<button
						type='button'
						className='p-1 bg-transparent outline-none'
						onClick={togglePlay}
					>
						{!isPlay ? (
							<FiPlay className='w-5 h-5 fill-white stroke-1' />
						) : (
							<FiPause className='w-5 h-5 fill-white stroke-1' />
						)}
					</button>
					{/* Video timestamps */}
					<div className='flex items-center gap-1 text-white'>
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
							{!isMuted ? (
								<FiVolume2 className='w-5 h-5 text-white stroke-2' />
							) : (
								<FiVolumeX className='w-5 h-5 fill-white stroke-1' />
							)}
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
				<div className='flex items-center gap-1.5'>
					<button
						type='button'
						className='p-1 bg-transparent outline-none'
						onClick={toggleSettings}
					>
						<FiSettings className={`w-5 h-5 text-white stroke-2 ${!isSettings ? "-rotate-[20deg] transition-transform" : "rotate-[20deg] transition-transform"}`} />
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

			{/* settings popup window gose here  */}
			<div className={`absolute py-1 right-4 bg-black/75 rounded-xl overflow-hidden ${!isPlaybackSpeedVisible ? "-top-32" : "-top-64"}`}>
				{!isSettings ? null : (
					<ul>
						<li>
							<button className='text-white px-3 py-2 w-full flex gap-8 items-center justify-between hover:bg-black/50' onClick={togglePlaybackSpeedVisible}>
								<span className='flex items-center gap-2'>
									<span className='text-md text-gray-300'>Playback Speed</span>
								</span>
								<span className='flex items-center text-xs'>
									<span className='underline text-gray-300'>{playbackSpeed || "Normal"}</span>
									<FiChevronRight className='w-5 h-5 stroke-1 text-gray-300' />
								</span>
							</button>
						</li>
						<li>
							<button type='button' className='text-white px-3 py-2  w-full flex gap-8 items-center justify-between hover:bg-black/50'>
								<span className='flex items-center gap-2'>
									<span className='text-md text-gray-300'>Subtitle</span>
								</span>
								<span className='flex items-center text-xs'>
									<span className='underline text-gray-300'>Off</span>
									<FiChevronRight className='w-5 h-5 stroke-1 text-gray-300' />
								</span>
							</button>
						</li>
						<li>
							<button type='button' className='text-white px-3 py-2  w-full flex gap-8 items-center justify-between hover:bg-black/50'>
								<span className='flex items-center gap-2'>
									<span className='text-md text-gray-300'>Quality</span>
								</span>
								<span className='flex items-center text-xs'>
									<span className='underline text-gray-300'>Auto</span>
									<FiChevronRight className='w-5 h-5 stroke-1 text-gray-300' />
								</span>
							</button>
						</li>
					</ul>
				)}
				{!isPlaybackSpeedVisible ? null : (
					<ul className='w-60'>
						<li className='border-b border-gray-300/30'>
							<button type='button' className='text-white px-3 py-2 w-full flex gap-8 items-center justify-between hover:bg-black/50' onClick={togglePlaybackSpeedVisible}>
								<span className='flex items-center'>
									<FiChevronLeft className='w-5 h-5 text-gray-300' />
									<span className='text-md text-gray-300'>Playback Speed</span>
								</span>
							</button>
						</li>
						<li>
							<button type='button' onClick={selectPlaybackSpeed} className='text-white px-3 py-2  w-full flex gap-8 items-center justify-between hover:bg-black/50' name='0.25'>
								<span className='flex items-center gap-2'>
									<span className='text-md text-gray-300'>0.25</span>
								</span>
							</button>
						</li>
						<li>
							<button type='button' onClick={selectPlaybackSpeed} className='text-white px-3 py-2  w-full flex gap-8 items-center justify-between hover:bg-black/50' name='0.5'>
								<span className='flex items-center gap-2'>
									<span className='text-md text-gray-300'>0.5</span>
								</span>
							</button>
						</li>
						<li>
							<button type='button' onClick={selectPlaybackSpeed} className='text-white px-3 py-2  w-full flex gap-8 items-center justify-between hover:bg-black/50' name='Normal'>
								<span className='flex items-center gap-2'>
									<span className='text-md text-gray-300'>Normal</span>
								</span>
							</button>
						</li>
						<li>
							<button type='button' onClick={selectPlaybackSpeed} className='text-white px-3 py-2  w-full flex gap-8 items-center justify-between hover:bg-black/50' name='1.25'>
								<span className='flex items-center gap-2'>
									<span className='text-md text-gray-300'>1.25</span>
								</span>
							</button>
						</li>
						<li>
							<button type='button' onClick={selectPlaybackSpeed} className='text-white px-3 py-2  w-full flex gap-8 items-center justify-between hover:bg-black/50' name='2'>
								<span className='flex items-center gap-2'>
									<span className='text-md text-gray-300'>2</span>
								</span>
							</button>
						</li>
					</ul>
				)}
			</div>
		</div>
	);
};

export default VideoController;
