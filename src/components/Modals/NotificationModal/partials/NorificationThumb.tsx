import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { BooleanSetStateType } from '../../../../types/custom';

interface NotificationThumbProps {
    channelLink: string;
    videoLink: string;
    channelThumb: React.ReactNode;
    title: string;
    timestamps: string;
    contentThumb: string;
    setModalOpen: BooleanSetStateType;
}

const NotificationThumb: FC<NotificationThumbProps> = ({ channelLink, videoLink, channelThumb, contentThumb, timestamps, title, setModalOpen }) => {
    const navigate = useNavigate();

    return <div className='flex gap-5 p-3'>
        <button type='button' onClick={() => {
            navigate(`/${channelLink}`)
            setModalOpen(false)
        }} className="w-20 h-fit p-2 rounded-full border-2 border-gray-400">
            {channelThumb}
        </button>

        <div>
            <button type='button' onClick={() => {
                navigate(`/watch/${videoLink}`)
                setModalOpen(false)
            }}
                className={`text-sm text-left text-gray-800 font-medium`}
            >
                {title}
            </button>
            <p className='text-gray-600 rounded-md text-xs mt-2'>
                {timestamps} day ago
            </p>
        </div>

        <img
            className='w-72 h-16 rounded-xl object-cover'
            src={contentThumb}
            alt='thumbnail'
        />
    </div>
}

export default NotificationThumb;