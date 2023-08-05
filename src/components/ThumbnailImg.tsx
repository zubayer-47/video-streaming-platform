import dayjs from 'dayjs';
import { FC } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

type ThumbnailImgProps = {
    demoImg: string;
    isList?: boolean
}

const ThumbnailImg: FC<ThumbnailImgProps> = ({ demoImg, isList }) => {

    const channelName = 'Standford Graduate School of Business';
    const title = "LEADERSHIP LAB: The Craft of Writing Effectively UChicago Social Sciences The Craft of Writing Effectivel"
    const createdAt = dayjs('2023-08-04').toNow(true);

    return (
        <>
            <div>
                <Link to={'/video123'} className='relative'>
                    <img
                        className={`rounded-md object-cover ${!isList ? "w-full max-h-56 md:max-h-52" : "w-40 max-h-24"}`}
                        src={demoImg}
                        alt='thumbnail'
                    />

                    <div className='absolute bottom-1 right-1 flex gap-1'>
                        <p className='bg-gray-900/80 text-white rounded-md py-1 px-1.5 text-xs tracking-wider'>
                            7.6M
                        </p>
                        <p className='bg-gray-900/80 text-white rounded-md py-1 px-1.5 text-xs tracking-wider'>
                            11:43:21
                        </p>
                    </div>
                </Link>
            </div>

            <div className={`gap-2 ${!isList ? "mt-3 flex" : "flex-1 mt-0"}`}>
                {!isList ? <FaCircleUser className={`h-16 w-16`} /> : null}
                <div className='flex flex-col gap-1'>
                    <Link
                        to='/video123'
                        className={`text-sm tracking-wide text-gray-800 ${!isList ? "font-bold" : "font-medium"}`}
                    >
                        {!isList ? title : title.length > 80 ? title.split('').slice(0, 80).join('') + '...' : title}
                    </Link>
                    <div className={`flex ${!isList ? "items-center gap-3" : "flex-col justify-center "}`}>
                        <Link
                            to={'/channel123'}
                            className={`text-sm text-gray-700 tracking-wide ${!isList ? "font-bold" : "font-normal"}`}
                        >
                            {channelName.length > 20
                                ? channelName.split('').slice(0, 20).join('') + '...'
                                : channelName}
                        </Link>

                        <p className='text-gray-500 text-sm'>{createdAt} ago</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThumbnailImg
