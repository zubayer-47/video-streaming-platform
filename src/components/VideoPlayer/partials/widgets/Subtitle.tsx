import { FiChevronLeft } from 'react-icons/fi';
import { PlayerSettingsType } from '../../hooks/usePlayer';

type Props = {
	settings: PlayerSettingsType;
	handleSettings: React.Dispatch<React.SetStateAction<PlayerSettingsType>>;
	subtitles?: string[];
};

const Subtitle = ({
	settings,
	handleSettings,
	subtitles = ['Off', 'English UK', 'Hindi (India)'],
}: Props) => {
	return (
		<ul className='w-60'>
			<li className='border-b border-gray-300/30'>
				<button
					type='button'
					className='text-white px-3 py-2 w-full flex gap-8 items-center justify-between hover:bg-black/50'
					onClick={() =>
						handleSettings((prev) => ({ ...prev, visibleWindow: 'none' }))
					}
				>
					<span className='flex items-center'>
						<FiChevronLeft className='w-5 h-5 text-gray-300' />
						<span className='text-md text-gray-300'>Subtitle/CC</span>
					</span>
				</button>
			</li>

			{subtitles.map((subtitle) => (
				<li key={subtitle}>
					<button
						type='button'
						onClick={() =>
							handleSettings((prev) => ({
								...prev,
								visibleWindow: 'none',
								subtitle,
							}))
						}
						className={`text-white px-3 py-2  w-full flex gap-8 items-center justify-between ${
							settings.subtitle === subtitle
								? 'bg-black/60'
								: 'hover:bg-black/50'
						}`}
					>
						<span className='flex items-center gap-2'>
							<span className='text-md text-gray-300'>{subtitle}</span>
						</span>
					</button>
				</li>
			))}
		</ul>
	);
};

export default Subtitle;
