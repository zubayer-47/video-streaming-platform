import { useState } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import videoImage from '../../../../assets/demo.jpg';
import FollowButton from '../../../../components/Buttons/FollowButton';
import { trunc } from '../../../../libs/helper';
import CommentSection from './CommentSection';

export default function ContentBio() {
    const [descStatus, setDescStatus] = useState(false);

    return (
        <div className="flex-1 flex flex-col  w-full">
            <button className="w-full  bg-red-400 ">
                <img src={videoImage} className="w-full max-h-96 sm:max-h-104 md:max-h-106 lg:max-h-110 object-cover" />
            </button>

            <p className='text-lg font-bold mt-5'>How to Build Your Perfect Resume: Learn from a FAANG Employee Example!</p>

            <div className="flex flex-col md:flex-row justify-between gap-3 mt-2 mb-4">
                <div className="flex justify-between gap-2 items-center">
                    <div className='flex gap-2'>
                        <Link to='/@stacklearner'>
                            <FaCircleUser className="h-10 w-10" />
                        </Link>
                        <p className="flex flex-col justify-center">
                            <Link to={'/@stacklearner'} className="font-bold">Stack Learner</Link>
                            <span className="text-sm text-gray-800">94.3k followers</span>
                        </p>
                    </div>

                    <FollowButton classes="md:ml-5 py-2.5 md:py-3" title="Follow" />
                </div>

                <div className="flex gap-2 items-center">
                    <div className="flex items-center bg-indigo-100 rounded-full overflow-hidden">
                        <button type="button" className="flex items-center gap-1.5 px-4 border-black hover:bg-indigo-200/50 py-3 h-full w-full">
                            <FiThumbsUp className="h-6 w-6" />
                            <span>630</span>
                        </button>
                        <span className="w-1 h-6 bg-gray-800"></span>
                        <button type="button" className="px-4 border-black hover:bg-indigo-200/50 py-3 h-full w-full">
                            <FiThumbsDown className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            <div onClick={() => !descStatus ? setDescStatus(true) : undefined} className={`text-left bg-indigo-400/20 hover:bg-indigo-500/20 p-3 rounded-xl ${!descStatus ? "cursor-pointer" : "cursor-text"}`}>
                <p className='font-medium space-x-2'>
                    <span>6k views</span>
                    <span>2days ago</span>
                </p>
                <p className='font-normal text-gray-700'>
                    {trunc("How to Build Your Perfect Resume: Learn from a FAANG Employee Example! Are you ready to take your career to new heights and secure your dream job at a top tech company? Join us on this exclusive journey inside the mind of a FAANG employee as we unveil the secrets of their perfect resume! In this eye-opening video, you'll discover the exact strategies and tips used by the industry's finest to stand out from the crowd and impress recruiters. Music from #InAudio: https://inaudio.org/ Reality How to Build Your Perfect Resume: Learn from a FAANG Employee Example! Are you ready to take your career to new heights and secure your dream job at a top tech company? Join us on this exclusive journey inside the mind of a FAANG employee as we unveil the secrets of their perfect resume! In this eye-opening video, you'll discover the exact strategies and tips used by the industry's finest to stand out from the crowd and impress recruiters. Music from #InAudio: https://inaudio.org/ Reality How to Build Your Perfect Resume: Learn from a FAANG Employee Example! Are you ready to take your career to new heights and secure your dream job at a top tech company? Join us on this exclusive journey inside the mind of a FAANG employee as we unveil the secrets of their perfect resume! In this eye-opening video, you'll discover the exact strategies and tips used by the industry's finest to stand out from the crowd and impress recruiters.Music from #InAudio: https://inaudio.org/Reality", !descStatus ? 500 : undefined)}
                    <button onClick={() => {
                        setDescStatus(false)
                        console.log(descStatus)
                    }} className={`font-bold  ml-auto ${!descStatus ? "inline-block" : "block"}`}>{!descStatus ? "more" : "Show less"}</button>
                </p>
            </div>
            <CommentSection />
        </div>
    )
}
