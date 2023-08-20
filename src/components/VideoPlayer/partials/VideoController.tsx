import {
	// FiChevronRight,
	FiMaximize,
	FiPause,
	FiPlay,
	// FiPlayCircle,
	FiSettings,
	FiVolume2,
	FiVolumeX,
} from 'react-icons/fi';
import { formateTime } from '../../../libs/helper';
import { InputType } from '../../../types/custom';

type Props = {
	isPlay: boolean;
	isMuted: boolean;
	duration: number;
	timeElapsed: number;
	volume: number;
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
	togglePlay,
	toggleMute,
	updateSeekBar,
	updateVolumeBar,
	toggleFullScreen,
}: Props) => {
	return (
		<div className='absolute bottom-0 left-0 right-0 px-1 py-2 z-20 opacity-100 group-hover/video-player-item:opacity-100 transition-opacity duration-300'>
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
						onClick={toggleFullScreen}
					>
						<FiSettings className='w-5 h-5 text-white stroke-2' />
					</button>
					<button
						type='button'
						className='p-1 bg-transparent outline-none'
						onClick={toggleFullScreen}
					>
						<FiMaximize className='w-5 h-5 text-white stroke-2' />
					</button>
				</div>
			</div>

			{/* settings popup window gose here  */}
			<div className='absolute -top-20 right-0 bg-black/80 rounded-xl'>
				{/* <ul>
					<li className='px-3.5 py-1.5 text-white flex items-center justify-between'>
						<span className='flex items-center gap-1'>
							<FiPlayCircle className='w-5 h-5 stroke-1' />
							<span>Playback Speed</span>
						</span>
						<span className='flex items-center gap-1 text-xs'>
							<span className='underline'>Normal</span>
							<FiChevronRight className='w-5 h-5 stroke-1' />
						</span>
					</li>
					<li className='px-3.5 py-1.5 text-white flex items-center justify-between'>
						<span className='flex items-center gap-1'>
							<FiPlayCircle className='w-5 h-5 stroke-1' />
							<span>Subtitle</span>
						</span>
						<span className='flex items-center gap-1 text-xs'>
							<span className='underline'>Off</span>
							<FiChevronRight className='w-5 h-5 stroke-1' />
						</span>
					</li>
					<li className='px-3.5 py-1.5 text-white flex items-center justify-between'>
						<span className='flex items-center gap-1'>
							<FiPlayCircle className='w-5 h-5 stroke-1' />
							<span>Quality</span>
						</span>
						<span className='flex items-center gap-1 text-xs'>
							<span className='underline'>Auto</span>
							<FiChevronRight className='w-5 h-5 stroke-1' />
						</span>
					</li>
				</ul> */}
			</div>
		</div>
	);
};

export default VideoController;
