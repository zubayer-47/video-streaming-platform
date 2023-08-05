import dayjs from "dayjs";
import { FaCircleUser } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import demoImg from '../../../assets/demo.jpg';

export default function VideoContent() {
  const channelName = 'Standford Graduate School of Business';
  const createdAt = dayjs('2023-08-04').toNow(true)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {new Array(30).fill(true).map(() => (
        <div className="max-w-full">
          <Link to={`/video123`} className="relative">
            <img className="max-h-56 md:max-h-52 w-full rounded-md object-cover" src={demoImg} alt="thumbnail" />

            <div className="absolute bottom-1 right-1 flex gap-1">
              <p className="flex items-center gap-1 bg-gray-900/95 text-white rounded-md py-1 px-1.5 text-xs tracking-wide">
                <FiEye className="w-3 h-3 text-gray-300" />
                <span>7.6M</span>
              </p>
              <p className="bg-gray-900/95 text-white rounded-md py-1 px-1.5 text-xs tracking-wide">11:43:21</p>
            </div>
          </Link>

          <div className="grid grid-cols-8 gap-2 place-items-center mt-2">
            <FaCircleUser className="h-8 w-8 col-span-1" />
            <Link to='/video123' className="font-semibold text-sm tracking-wide col-span-7">
              LEADERSHIP LAB: The Craft of Writing Effectively UChicago Social Sciences
            </Link>
          </div>
          <div className="grid grid-cols-8 place-items-start items-center">
            <div className="col-start-2 col-span-7 w-full flex justify-between mt-2">
              <Link to={'/channel123'} className="text-sm text-gray-700 tracking-wide">{channelName.length > 25 ? channelName.split('').slice(0, 25).join('') + '...' : channelName}</Link>

              <p className="text-gray-700 text-sm">{createdAt} ago</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
