/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import Button from '../../../../components/Buttons/Button';
import MaterialInput, {
	MaterialTagInput,
	MaterialTextArea,
} from '../../../../components/Inputs/MaterialInput';
import { InputType } from '../../../../types/custom';

interface UploadVideoProps {}

const UploadVideo: FC<UploadVideoProps> = () => {
	const [uploadContent, setUploadContent] = useState<File | null>(null);
	const [uploadPercentage, setUploadPercentage] = useState(10);

	const [uploadMetadata, setUploadMetadata] = useState({
		title: '',
		description: '',
		tags: '',
	});

	const handleFile = (e: InputType) => {
		if (e.target?.files) {
			const content = e.target?.files[0];
			const defaultTitle = content.name.replace('.mp4', '');
			setUploadContent(content);
			setUploadMetadata((prev) => ({
				...prev,
				title: defaultTitle,
				description: defaultTitle,
			}));
			console.log('content :', content);
		}
	};

	if (!uploadContent) {
		return (
			<div className='flex-1 flex items-center justify-center overflow-y-scroll'>
				<div className='w-full mx-5 md:mx-0 md:w-3/5 bg-white rounded-lg p-5 shadow-lg'>
					<h1 className='mb-3 text-2xl text-center font-semibold uppercase tracking-wide text-slate-600'>
						you can upload a video
					</h1>
					<p className='text-sm text-center text-slate-400 font-medium tracking-wider'>
						Click on the button & select a video file to upload
					</p>

					<div className='my-7 grid place-content-center'>
						<label htmlFor='uploadVid'>
							<div className='inline-flex items-center bg-indigo-400 rounded-lg shadow-lg shadow-indigo-300 cursor-pointer'>
								<FiArrowUp className='w-5 h-5 text-white stroke-white m-2' />
								<span className='text-white font-medium tracking-wide uppercase p-2 border-l border-indigo-300'>
									upload
								</span>
							</div>
							<input
								type='file'
								name=''
								id='uploadVid'
								className='hidden'
								onChange={handleFile}
								accept='video/mp4,video/x-m4v,video/*'
							/>
						</label>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className='flex-1 overflow-y-scroll p-3 md:p-10'>
			<div className='w-full bg-white rounded-lg'>
				<div className='flex items-stretch gap-3 p-5 border-b border-slate-300'>
					<div className='w-32 h-32 border border-indigo-300 rounded-lg'></div>
					<div className='flex-1'>
						<div className='flex justify-end'>
							<Button title='Publish' type='button' isLoading={false} />
						</div>
						<div className='mt-2'>
							<p className='mb-2 font-light text-sm tracking-wide text-slate-400'>
								Your video is{' '}
								<span className='text-indigo-300 font-medium'>
									uploading...
								</span>
							</p>
							<div className='w-full h-1 bg-indigo-200 rounded-full'>
								<div
									className='h-full bg-indigo-500 rounded-full transition-transform'
									style={{ width: `${uploadPercentage}%` }}
								></div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex items-start gap-3'>
					{/* video metadata form */}
					<div className='flex-1 flex flex-col gap-3 px-5 py-3'>
						<MaterialInput
							title='Title'
							name='title'
							handler={(e) => {}}
							value={uploadMetadata.title}
							hint='Video title...'
							isLoading={false}
							error={''}
							isRequired
						/>
						<MaterialTextArea
							title='Description'
							name='description'
							handler={(e) => {}}
							value={uploadMetadata.description}
							hint='Video description...'
							isLoading={false}
							error={''}
							isRequired
						/>
						<MaterialTagInput
							title='Tags'
							name='tags'
							handler={(e) => {}}
							value={''}
							hint='Video tags... E.g. hello, world'
							isLoading={false}
							error={''}
						/>
					</div>
					{/* video metadata aside */}
					<div className='w-48 md:w-52 lg:w-64 p-3 sm:border-l sm:border-slate-300'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
						reiciendis excepturi ea qui sapiente mollitia repellendus eos
						veritatis vitae explicabo quis dicta aliquam distinctio, id
						similique? Minima, magnam numquam. Nihil, odio? Fuga labore deserunt
						reprehenderit quis voluptatem quisquam velit suscipit vero dolorum
						excepturi sint porro pariatur sequi, similique dolores neque dicta!
						Reiciendis nemo facilis voluptates amet dolore qui reprehenderit
						tempore corrupti? Ut a earum sint
					</div>
				</div>
			</div>
		</div>
	);
};

export default UploadVideo;
