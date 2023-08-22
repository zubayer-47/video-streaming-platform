import { FiChevronLeft } from 'react-icons/fi';
import { ButtonClickHandler } from '../../../../types/custom';
import { PlayerSettingsType } from '../../hooks/usePlayer';

type Props = {
	settings: PlayerSettingsType;
	handleSettings: React.Dispatch<React.SetStateAction<PlayerSettingsType>>;
	handlePlaybackSeed: ButtonClickHandler;
	playbacks?: number[];
};

const PlaybackSpeed = ({
	settings,
	handleSettings,
	handlePlaybackSeed,
	playbacks = [0.25, 0.5, 1.0, 1.5, 2],
}: Props) => {
	return (
		<ul className='w-60'>
			<li className='border-b border-gray-300/30'>
				<button
					type='button'
					className='text-white px-3 py-2 w-full flex gap-8 items-center justify-between hover:bg-black/50'
					onClick={() =>
						handleSettings((prev) => ({
							...prev,
							visibleWindow: 'none',
						}))
					}
				>
					<span className='flex items-center'>
						<FiChevronLeft className='w-5 h-5 text-gray-300' />
						<span className='text-md text-gray-300'>Playback Speed</span>
					</span>
				</button>
			</li>

			{playbacks.map((rate) => (
				<li key={rate}>
					<button
						type='button'
						onClick={handlePlaybackSeed}
						className={`text-white px-3 py-2  w-full flex gap-8 items-center justify-between ${
							settings.playback === rate ? 'bg-black/60' : 'hover:bg-black/50'
						}`}
						name={rate + ''}
					>
						<span className='flex items-center gap-2'>
							<span className='text-md text-gray-300'>
								{rate === 1 ? 'Normal' : rate}
							</span>
						</span>
					</button>
				</li>
			))}

			{/* <li>
				<button
					type='button'
					onClick={handlePlayback}
					className='text-white px-3 py-2  w-full flex gap-8 items-center justify-between hover:bg-black/50'
					name='0.25'
				>
					<span className='flex items-center gap-2'>
						<span className='text-md text-gray-300'>0.25</span>
					</span>
				</button>
			</li>
			<li>
				<button
					type='button'
					onClick={handlePlayback}
					className='text-white px-3 py-2  w-full flex gap-8 items-center justify-between hover:bg-black/50'
					name='0.5'
				>
					<span className='flex items-center gap-2'>
						<span className='text-md text-gray-300'>0.5</span>
					</span>
				</button>
			</li>
			<li>
				<button
					type='button'
					onClick={handlePlayback}
					className='text-white px-3 py-2  w-full flex gap-8 items-center justify-between hover:bg-black/50'
					name='Normal'
				>
					<span className='flex items-center gap-2'>
						<span className='text-md text-gray-300'>Normal</span>
					</span>
				</button>
			</li>
			<li>
				<button
					type='button'
					onClick={handlePlayback}
					className='text-white px-3 py-2  w-full flex gap-8 items-center justify-between hover:bg-black/50'
					name='1.25'
				>
					<span className='flex items-center gap-2'>
						<span className='text-md text-gray-300'>1.25</span>
					</span>
				</button>
			</li>
			<li>
				<button
					type='button'
					onClick={handlePlayback}
					className='text-white px-3 py-2  w-full flex gap-8 items-center justify-between hover:bg-black/50'
					name='2'
				>
					<span className='flex items-center gap-2'>
						<span className='text-md text-gray-300'>2</span>
					</span>
				</button>
			</li> */}
		</ul>
	);
};

export default PlaybackSpeed;
