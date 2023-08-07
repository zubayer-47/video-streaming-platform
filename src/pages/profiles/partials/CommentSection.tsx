import { FC } from 'react'
import { FaCircleUser } from 'react-icons/fa6'
import { MdSort } from 'react-icons/md'

interface CommonSectionProps { }

const CommonSection: FC<CommonSectionProps> = () => {
    return <section className='mt-4'>
        <div className="flex items-center gap-5 my-2">
            <p>146 Comments</p>
            <button className='flex gap-0.5 items-center'>
                <MdSort className="w-6 h-6 fill-gray-600" />
                <span>Sort by</span>
            </button>
        </div>

        <div className='flex items-center gap-3'>
            <FaCircleUser className="w-8 h-8 fill-blue-500/80" />
            <form className="w-full">
                <div className="flex items-center border-b border-gray-300 py-0.5">
                    <input className="appearance-none bg-transparent border-none w-full text-sm text-gray-700 py-0.5 px-1 tracking-wide leading-tight focus:outline-none" type="text" placeholder="Add a comment..." />
                </div>
            </form>
        </div>
        {new Array(20).fill(' ').map(() => (
            <Comment />
        ))}
    </section>
}
export default CommonSection;

interface CommentProps { }
const Comment: FC<CommentProps> = () => {
    return <div className="flex gap-3 w-11/12 my-5">
        <FaCircleUser className="w-14 h-14 -mt-2" />
        <div>
            <p className='text-sm flex gap-1 items-center'>
                <span className='font-medium tracking-wide'>@zubayer47</span>
                <span className='text-gray-500 text-xs'>20 minutes ago</span>
            </p>

            <p className='text-sm'>
                This song, is so good, every time i listen this music and it makes me cry so hard than even i lost conscious sometimes, life is so hard but also beautiful, your choices are everything that matters, i love life and always respect the women that respects you
            </p>
        </div>
    </div>
}