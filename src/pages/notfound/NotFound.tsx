import { FC } from 'react';

interface NotFoundProps { }

const NotFound: FC<NotFoundProps> = () => {
    return (
        <div className='flex justify-center items-center w-full min-h-screen bg-gray-200'>
            <p className='text-3xl italic text-gray-400'>
                Something went <span className='font-bold'>wrong</span>.
            </p>
        </div>
    );
}
export default NotFound