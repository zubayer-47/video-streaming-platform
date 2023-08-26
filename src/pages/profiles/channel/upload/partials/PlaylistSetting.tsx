import { FiFilePlus } from 'react-icons/fi';
import { InlineSelectInput } from '../../../../../components/Inputs/MaterialInput';
import { SelectType } from '../../../../../types/custom';

type Props = {
	status: string;
	handle: (e: SelectType) => void;
};

const PlaylistSetting = ({ status, handle }: Props) => {
	return (
		<div className='flex items-center justify-between gap-2 text-xs'>
			<div className='flex items-center gap-1'>
				<FiFilePlus className='w-4 h-4 text-slate-500' />
				<span className='font-normal tracking-wide text-slate-600'>
					Playlist
				</span>
			</div>
			<InlineSelectInput
				name='playlist'
				value={status}
				defValue='Add to Playlist'
				handler={handle}
				options={[
					{ id: 'PUBLIC', name: 'Public' },
					{ id: 'PRIVATE', name: 'Private' },
				]}
			/>
		</div>
	);
};

export default PlaylistSetting;
