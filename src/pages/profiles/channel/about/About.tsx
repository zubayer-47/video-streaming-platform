import { FC } from 'react';
import { FiFlag } from 'react-icons/fi';
import { PiShareFat } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import FollowButton from '../../../../components/Buttons/FollowButton';
import ChannelNavLayout from '../../../../components/Layouts/ChannelNavLayout';

interface AboutProps { }

const About: FC<AboutProps> = () => {
    return <ChannelNavLayout>
        <div className="flex gap-5">
            <div className='flex-1 space-y-5'>
                <h1 className='font-medium text-lg text-gray-800'>Description</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt unde doloribus aspernatur quidem nam harum earum corporis officiis laudantium! Quae sapiente cumque optio rem numquam. Et repudiandae dolores quidem culpa laudantium enim nisi quo praesentium ipsam eos exercitationem illum ad aliquam voluptas eum minima ratione nihil error modi eveniet, doloribus consequuntur. Consectetur numquam illo eaque praesentium recusandae consequuntur ea earum. Iste illo incidunt aspernatur sapiente at porro, laboriosam a impedit, assumenda natus temporibus officiis dignissimos quod similique adipisci reprehenderit sit ex aut aliquam minima nostrum quia explicabo quisquam ut. Necessitatibus, dolore illo dignissimos neque dolorem dolorum quis mollitia ratione inventore animi sequi id tenetur! Eveniet excepturi neque voluptas omnis amet a sequi. Dolores numquam fugit nobis ipsam aliquid molestias odit odio quis unde! Voluptatem fugit earum, placeat odit temporibus voluptate corrupti quos aspernatur fugiat ea, consectetur neque molestias eius non incidunt minus ratione tempora corporis impedit porro doloribus vel aperiam sint. Quaerat nihil minima iure, voluptatum deleniti quos deserunt enim? Cum culpa a error dolores cupiditate, id nulla tempore itaque incidunt exercitationem voluptate consequatur! Vel iusto placeat neque labore, pariatur veniam officiis possimus hic quibusdam ipsum sequi vero itaque quas corporis ea dolorum, quae excepturi quasi maiores in, eveniet natus!
                </p>

                <hr className='border border-gray-200' />

                <div>
                    <h1 className='font-medium text-lg text-gray-800 mb-3'>Details</h1>
                    <div>
                        <span className='text-gray-700 text-sm'>For business inquiries: </span>
                        <FollowButton bg='bg-gray-400/30 text-gray-900 py-2' title='View email address' classes='ml-7' />
                    </div>
                    <div >
                        <span className='text-gray-700 text-sm'>Location: </span>
                        <span className='text-gray-700 text-sm ml-28'>Bangladesh</span>
                    </div>
                </div>
                <hr className='border border-gray-200' />

                <h1 className='font-medium text-lg text-gray-800 mb-3'>Links</h1>
                <div className='grid grid-cols-2 gap-5'>
                    <Link to='/' className='text-blue-700 text-sm'>
                        Website
                    </Link>
                    <Link to='/' className='text-blue-700 text-sm'>
                        Facebook
                    </Link>
                    <Link to='/' className='text-blue-700 text-sm'>
                        GitHub
                    </Link>
                    <Link to='/' className='text-blue-700 text-sm'>
                        Instagram
                    </Link>
                    <Link to='/' className='text-blue-700 text-sm'>
                        Facebook Page
                    </Link>
                    <Link to='/' className='text-blue-700 text-sm'>
                        Linkedin
                    </Link>
                </div>
            </div>

            <div className='w-80 space-y-3'>
                <h1 className='font-medium'>Stats</h1>
                <hr className='border border-gray-200' />
                <p>Joined Sep 20,2010</p>
                <hr className='border border-gray-200' />
                <p>9,057,547 views</p>
                <hr className='border border-gray-200' />

                <div className='flex gap-10 items-center'>
                    <button type='button'>
                        <FiFlag className="w-5 h-5" />
                    </button>

                    <button type='button'>
                        <PiShareFat className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    </ChannelNavLayout>
}
export default About