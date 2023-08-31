import { FC } from 'react';

type Props = {
    isList?: boolean;
};

const VideoDashboardLoader: FC<Props> = ({
    isList = false,
}: Props) => {
    return (
        <div className={`animate-pulse flex m-3 md:m-0 ${!isList ? 'flex-col gap-5' : 'flex-row gap-2'}`
        }>
            <div className={`bg-gray-300 rounded-xl ${!isList
                ? 'w-full h-52 sm:h-[11.5rem] md:h-[14rem]'
                : 'w-36 h-24'
                }`}></div>

            <div className='flex-1 flex gap-2'>
                {!isList && (
                    <p className={`bg-gray-300 h-9 w-9 rounded-full`}></p>
                )}

                <div className='flex-1 flex flex-col gap-1.5'>
                    <h1 className='bg-gray-300 h-3 w-4/5 rounded-xl'></h1>
                    <div
                        className={`flex items-center text-xs tracking-wide ${!isList ? 'gap-3' : 'gap-1.5'
                            }`}
                    >
                        <h1 className="bg-gray-300 h-3 w-2/6 mt-2 rounded-full"></h1>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default VideoDashboardLoader;