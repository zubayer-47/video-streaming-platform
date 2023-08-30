import { FiGlobe, FiLock } from 'react-icons/fi';
import { InlineSelectInput } from '../../../../../components/Inputs/MaterialInput';
import { SelectType } from '../../../../../types/custom';

type Props = {
	status: string;
	handle: (e: SelectType) => void;
};

const AudienceSetting = ({ status, handle }: Props) => {
	return (
		<div className='flex items-center justify-between gap-2 text-xs'>
			<div className='flex items-center gap-1'>
				{status === 'PUBLIC' ? (
					<FiGlobe className='w-4 h-4 text-slate-500' />
				) : (
					<FiLock className='w-4 h-4 text-slate-500' />
				)}
				<span className='font-normal tracking-wide text-slate-600'>
					Audience
				</span>
			</div>
			<InlineSelectInput
				name='status'
				value={status.toUpperCase()}
				defValue='Change Audience'
				handler={handle}
				defDisable
				options={[
					{ id: 'PUBLIC', name: 'Public' },
					{ id: 'PRIVATE', name: 'Private' },
				]}
			/>
		</div>
	);
};

export default AudienceSetting;
