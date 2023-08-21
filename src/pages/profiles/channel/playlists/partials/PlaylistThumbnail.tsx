import { FC } from 'react';
import { CgPlayList } from 'react-icons/cg';
import { FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import dummyImg from '../../../../../assets/demo.jpg';

interface PlaylistThumbnailProps { }

const PlaylistThumbnail: FC<PlaylistThumbnailProps> = () => {
    return (
        <Link to='/watch/js_for_beginners'>
            <div className='relative rounded-lg overflow-hidden group/preview'>
                <div className='invisible group-hover/preview:visible h-36 w-full absolute top-0 right-0 left-0 bottom-0 bg-black/90'>
                    <p className='h-full w-full flex place-items-center justify-center gap-2'>
                        <FiPlay className="text-gray-100 w-5 h-5" />
                        <span className="text-gray-100">PLAY ALL</span>
                    </p>
                </div>
                <img src={dummyImg} className='h-36 w-full object-cover' alt="playlist thumbnail" />
                <div className='bg-gray-800/50 absolute bottom-0 left-0 right-0 flex justify-between items-center pr-1'>
                    <CgPlayList className="text-gray-50 h-6 w-6" />

                    <span className='text-gray-50 text-sm'>2 videos</span>
                </div>
            </div>

            <h1 className='line-clamp-2 font-medium my-2'>JavaScript Bangla Tutorial | JS Bangla Tutorial Series for Beginners</h1>
            <Link to='/playlist/js_for_beginners' className='text-sm font-medium text-gray-600'>View full playlist</Link>

        </Link>
    )
}

export default PlaylistThumbnail