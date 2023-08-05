import { FaCircleUser } from "react-icons/fa6";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { useParams } from "react-router-dom";
import videoImage from '../../../assets/demo.jpg';
import FollowButton from "../../../components/Buttons/FollowButton";

export default function VideoView() {
    const { videoID } = useParams();

    return (
        <div className="w-full mx-10 lg:mx-24 flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
                <button className="w-full h-[600px] ">
                    <img src={videoImage} className="w-full h-full object-cover" />
                </button>

                <p>How to Build Your Perfect Resume: Learn from a FAANG Employee Example!</p>

                <div className="flex justify-between gap-3">
                    <div className="flex gap-2 items-center">
                        <FaCircleUser className="h-10 w-10 col-span-1" />
                        <p className="flex flex-col justify-center">
                            <span className="font-[500]">Stack Learner</span>
                            <span className="text-sm">94.3k followers</span>
                        </p>

                        <FollowButton classes="ml-5" title="Follow" />
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="flex items-center gap-1 bg-indigo-100 rounded-full">
                            <button type="button" className="flex items-center gap-1">
                                <FiThumbsUp className="h-5 w-5 col-span-1" />
                                <span>630</span>
                            </button>
                            {/* <span className="w-3 bg-gray-800"></span> */}
                            <button type="button" className=" px-2 border-black hover:bg-indigo-200 p-2 h-full w-full">
                                <FiThumbsDown className="h-5 w-5" />
                            </button>
                        </div>

                    </div>
                </div>

                <div className="bg-indigo-100/70 hover:bg-indigo-100 p-3 rounded-xl">
                    <p>How to Build Your Perfect Resume: Learn from a FAANG Employee Example!
                        Are you ready to take your career to new heights and secure your dream job at a top tech company? Join us on this exclusive journey inside the mind of a FAANG employee as we unveil the secrets of their perfect resume! In this eye-opening video, you'll discover the exact strategies and tips used by the industry's finest to stand out from the crowd and impress recruiters.

                        Music from #InAudio: https://inaudio.org/
                        Reality
                    </p>
                </div>
            </div>

            <div className="w-96">
                <p>asdjkasbhkddkj aasdjhask das</p>
            </div>
        </div>
    )
}
