import { FC } from 'react';
import { BsDot } from 'react-icons/bs';
import demoImg from '../../../../assets/demo.jpg';
import ChannelNavLayout from '../../../../components/Layouts/ChannelNavLayout';

interface FeaturedProps {}

const Featured: FC<FeaturedProps> = () => {
	return (
		<ChannelNavLayout>
			<div className='flex gap-5'>
				<img
					className='h-52 w-96 object-cover rounded-2xl'
					src={demoImg}
					alt=''
				/>

				<div className='max-w-xl'>
					<h1 className='line-clamp-1 font-medium dark:text-slate-300 text-inherit'>
						Think in a Redux way - On demand video only React Redux course by
						Learn with Sumit
					</h1>

					<p className='my-2 text-gray-700/90 dark:text-dark-text text-sm'>
						<span>5,002 views</span>
						<BsDot className='inline-block' />
						<span>3 weeks ago</span>
					</p>

					<p className='line-clamp-6 text-sm dark:text-dark-text text-inherit'>
						It's all about teaching web development skills and techniques in an
						efficient and practical manner. If you are just getting started in
						web development, "Learn with Sumit" has all the tools you need to
						learn the newest and most popular technologies to convert you from a
						no stack to full stack developer. "Learn with Sumit" also deep dives
						into advanced topics using the latest best practices for you
						seasoned web developers. "Learn with Sumit" was founded by Sumit
						Saha who is a Tech Entrepreneur also Founded Analyzen - the first
						ever Digital Agency in Bangladesh. He is specialized in Full Stack
						Web Development. Sumit started "Learn with Sumit" in order to share
						his passion for web development, and do what he truly loves - teach
						and inspire new web developers. Over the years, he has taught many
						colleagues and friends the joys of web development, and cannot wait
						to teach you.
					</p>
				</div>
			</div>
		</ChannelNavLayout>
	);
};
export default Featured;
