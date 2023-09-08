import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import demoImg from '../../assets/demo.jpg';

const SearchPage = () => {
	return (
		<div className='flex flex-col gap-4 max-w-[70rem] mx-auto mt-5'>
			{new Array(10).fill(false).map(() => (
				<div className={`flex m-3 md:m-0 gap-2 flex-col'`}>
					{/* <Link
						to={'/'}
						className={`relative rounded-md overflow-hidden bg-indigo-200/40 w-72 md:w-96 lg:w-96 xl:w-80 h-24 md:h-36 lg:h-44 xl:h-48`}
					>
						<img
							className='object-cover absolute top-0 left-0 right-0 bottom-0'
							src={demoImg}
							alt='thumbnail'
							crossOrigin='anonymous'
						/>

						<div className='absolute bottom-1 right-1 flex gap-1'>
							<p className='bg-gray-900/80 text-white rounded-md py-1 px-1.5 text-xs tracking-wider'>
								2M
							</p>
							<p className='bg-gray-900/80 text-white rounded-md py-1 px-1.5 text-xs tracking-wider'>
								02:20
							</p>
						</div>
					</Link> */}
					<Link
						to={'/'}
						className={`relative w-40 sm:w-60 lg:w-72 h-28 sm:h-36 lg:h-44 rounded-md overflow-hidden bg-indigo-200/40 `}
					>
						<img
							className='w-full h-full object-cover'
							src={demoImg}
							alt='thumbnail'
							crossOrigin='anonymous'
						/>

						<div className='absolute bottom-1 right-1 flex gap-1'>
							<p className='bg-gray-900/80 text-white rounded-md py-1 px-1.5 text-xs tracking-wider'>
								2M
							</p>
							<p className='bg-gray-900/80 text-white rounded-md py-1 px-1.5 text-xs tracking-wider'>
								02:20
							</p>
						</div>
					</Link>

					<div className='flex-1'>
						<Link to={'/watch?v=asd'}>
							<h1 className='w-full md:w-10/12 lg:w-3/5 font-bold md:font-medium line-clamp-2 text-sm md:text-base dark:text-slate-300'>
								How to Learn TypeScript in 10 Seconds for Fresher How to Learn
								How How to Learn TypeScript in 10 Seconds for Fresher How to How
								How to Learn TypeScript in 10 Seconds for Fresher How to Learn
							</h1>
						</Link>
						<p className='text-xs text-slate-600 dark:text-dark-text mt-1'>
							1 month ago
						</p>

						<div className='flex gap-1.5 items-center my-1.5 md:my-3'>
							<Link to={'ch/asd'}>
								<FaCircleUser className={`h-6 w-6`} />
							</Link>

							<Link
								to={'ch/asd'}
								className='text-slate-700 dark:text-slate-400 text-sm font-medium flex-shrink-0'
							>
								Zubayer
							</Link>
						</div>
						<p className='text-sm text-slate-600 dark:text-dark-text line-clamp-2 w-full md:w-9/12'>
							In this tutorial we will teach you how to learn ts in 10 seconds
							with the help of Rasel Dev. so, let's start In this tutorial we
							will teach you how to learn ts in 10 seconds with the help of will
							teach you how to learn ts in 10 seconds with the help of Rasel
							Dev. so, let's start
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default SearchPage;
