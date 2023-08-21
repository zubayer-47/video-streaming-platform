import { FC } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { ButtonClickHandler } from '../../../types/custom';

interface SettingsModalProps {
    header: string;
    values: string[];
    goBack: () => void;
    selectMode: ButtonClickHandler
}

const SettingsModal: FC<SettingsModalProps> = ({ header, values, goBack, selectMode }) => {
    const id = header.split(' ')[0].toLowerCase();

    return (
        <ul className='w-60'>
            <li className='border-b border-gray-300/30'>
                <button type='button' className='text-white px-3 py-2 w-full flex gap-8 items-center justify-between hover:bg-black/50' onClick={goBack}>
                    <span className='flex items-center'>
                        <FiChevronLeft className='w-5 h-5 text-gray-300' />
                        <span className='text-md text-gray-300'>{header}</span>
                    </span>
                </button>
            </li>

            {values.map(v => (
                <li>
                    <button type='button' onClick={selectMode} className='text-white px-3 py-2  w-full flex gap-8 items-center justify-between hover:bg-black/50' name={v} id={id}>
                        <span className='flex items-center gap-2'>
                            <span className='text-md text-gray-300'>{v}</span>
                        </span>
                    </button>
                </li>
            ))}
        </ul>
    )
}
export default SettingsModal