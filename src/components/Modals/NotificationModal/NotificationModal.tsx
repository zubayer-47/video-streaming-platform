import { FC } from 'react';
import { FiUser } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import demoImg from '../../../assets/demo.jpg';
import { BooleanSetStateType } from '../../../types/custom';
import NotificationThumb from './partials/NorificationThumb';

interface NotificationModalProps {
	setOpen: BooleanSetStateType;
}

const NotificationModal: FC<NotificationModalProps> = ({ setOpen }) => {
	return (
		<div className='w-full sm:w-102 fixed right-0 md:right-24 top-14 bg-slate-100 dark:bg-dark-modal dark:border border-dark-overlay-200 dark:shadow-lg py-3 rounded-xl shadow-2xl z-30 overflow-hidden'>
			<h1 className='font-medium text-slate-800 dark:text-slate-300 border-b border-slate-300 dark:border-dark-text/30 px-3 pb-2'>
				Notifications
			</h1>

			<div className='h-104 overflow-auto scrollbar-thin scrollbar-track-slate-200/90 scrollbar-thumb-slate-400/90 scrollbar-thumb-rounded-full'>
				{new Array(20).fill(false).map(() => (
					<NotificationThumb
						key={uuidv4()}
						channelLink='stacklearner'
						videoLink='124'
						channelThumb={
							<FiUser className='w-full h-full dark:text-slate-300 text-inherit' />
						}
						title='Think in a Redux way - On demand video only React Redux course by Learn with Sumit'
						timestamps='1'
						contentThumb={demoImg}
						setModalOpen={setOpen}
					/>
				))}
			</div>
		</div>
	);
};
export default NotificationModal;
