/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { FiArrowUp, FiRefreshCw } from 'react-icons/fi';
import Button from '../../../../components/Buttons/Button';
import MaterialInput, {
	MaterialTagInput,
	MaterialTextArea,
	MaterialThumbnail,
} from '../../../../components/Inputs/MaterialInput';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import {
	InputType,
	SelectType,
	TextAreaHandler,
} from '../../../../types/custom';
import AudienceSetting from './partials/AudienceSetting';
import PlaylistSetting from './partials/PlaylistSetting';

interface UploadVideoProps {}

const UploadVideo: FC<UploadVideoProps> = () => {
	const axiosPrivate = useAxiosPrivate();
	const [uploadContent, setUploadContent] = useState<File | null>(null);
	const [thumbnail, setThumbnail] = useState<{
		file: File | null;
		preview: string;
	}>({
		file: null,
		preview: '',
	});
	const [uploadPercentage, setUploadPercentage] = useState(0);

	const [uploadMetadata, setUploadMetadata] = useState({
		videoId: '',
		title: '',
		description: '',
		tags: '',
		status: 'PUBLIC',
		playlist: '',
	});

	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleFile = async (e: InputType) => {
		if (e.target?.files) {
			const content = e.target?.files[0];
			const defaultTitle = content.name.replace('.mp4', '');
			setUploadContent(content);
			setUploadMetadata((prev) => ({
				...prev,
				title: defaultTitle,
				description: defaultTitle,
			}));

			const formData = new FormData();
			formData.append('content', content);
			//Math.round((100 * event.loaded) / event.total)
			const res = await axiosPrivate.post(`/videos/upload`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				onUploadProgress(evt) {
					const total = evt?.total || 0;
					setUploadPercentage(Math.round((100 * evt.loaded) / total));
				},
			});
			setUploadMetadata((prev) => ({ ...prev, videoId: res.data?.videoId }));
		}
	};

	const handleThumbnail = (e: InputType) => {
		if (e.target?.files) {
			const thum = e.target?.files[0];
			setThumbnail({
				file: thum,
				preview: URL.createObjectURL(thum),
			});
		}
	};

	const handleInput = (e: InputType) => {
		const { name, value } = e.target;
		setUploadMetadata((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSelect = (e: SelectType) => {
		const { name, value } = e.target;
		setUploadMetadata((prev) => ({ ...prev, [name]: value?.toUpperCase() }));
	};

	const handleDescription: TextAreaHandler = (e) => {
		const { value } = e.target;
		setUploadMetadata((prev) => ({
			...prev,
			description: value,
		}));
	};

	const handleValidate = () => {
		const err: Record<string, string> = {};
		const { videoId, title, description, tags, status } = uploadMetadata;
		const { file } = thumbnail;

		if (!file) {
			err.thumbnail = 'Thumbnail is mission!';
		}

		if (!videoId) err.videoId = 'Your content file missing!';
		if (!title) err.title = 'Title is required!';
		if (!status) err.status = 'Status is required!';
		if (!description) err.description = 'Description is required!';
		if (!tags) err.tags = 'Tags is required!';

		if (!err?.title && title.length < 10)
			err.title = 'Title should be minimum 10 character!';
		if (!err?.description && description.length < 20)
			err.description = 'Description should be minimum 20 character!';
		// if (!err?.tags && tags?.split(',')) err.tags = 'Tags is required!'

		setErrors(err);
		return !Object.keys(err).length;
	};

	const handlePublish = async () => {
		if (!handleValidate()) return;
		const { videoId, title, description, tags, status, playlist } =
			uploadMetadata;
		const form = new FormData();
		if (thumbnail.file) form.append('thumbnail', thumbnail.file);
		if (playlist) form.append('playlist', playlist);
		form.append('videoId', videoId);
		form.append('title', title);
		form.append('description', description);
		form.append('tags', tags);
		form.append('status', status);
		const res = await axiosPrivate.post(`/videos/publish`, form, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		console.log('res :', res);
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
				{/* meta data */}
				<div className='flex items-stretch gap-3 p-5 border-b border-slate-300'>
					<div className='w-32 h-32 border border-indigo-300 rounded-lg'></div>
					<div className='flex-1 flex flex-col gap-5'>
						<div className='flex justify-end'>
							<Button
								title='Publish'
								type='button'
								handler={handlePublish}
								isLoading={!uploadMetadata?.videoId}
							/>
						</div>
						<div>
							<div className='flex items-center justify-between'>
								{uploadPercentage === 100 ? (
									<div className='text-xs tracking-wide text-slate-700'>
										<span className='text-indigo-500 font-semibold'>
											Complete!
										</span>{' '}
										Now you can PUBLISH your content if you fill the
										requirements
									</div>
								) : (
									<div className='flex items-center gap-2'>
										<p className='font-light text-sm tracking-wide text-slate-500'>
											Your video is uploading...
										</p>
										<FiRefreshCw className='w-4 h-4 animate-spin text-indigo-500' />
									</div>
								)}
								<p className='font-semibold text-slate-400 text-xs'>
									{uploadPercentage}%
								</p>
							</div>

							<div className='w-full mt-3 h-1 bg-indigo-200 rounded-full'>
								<div
									className='h-full bg-indigo-500 rounded-full transition-transform'
									style={{ width: `${uploadPercentage}%` }}
								></div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex items-stretch gap-3'>
					{/* video metadata form */}
					<div className='flex-1 flex flex-col gap-3 px-5 py-3'>
						<h2 className='font-bold text-base tracking-wide text-slate-500'>
							Title & Informations
						</h2>
						<MaterialInput
							title='Title'
							name='title'
							handler={handleInput}
							value={uploadMetadata.title}
							hint='Video title...'
							isLoading={false}
							error={errors?.title}
							isRequired
						/>
						<MaterialTextArea
							title='Description'
							name='description'
							handler={handleDescription}
							value={uploadMetadata.description}
							hint='Video description...'
							isLoading={false}
							error={errors?.description}
							isRequired
						/>
						<MaterialThumbnail
							preview={thumbnail.preview}
							handler={handleThumbnail}
							error={errors?.thumbnail}
						/>
						<MaterialTagInput
							title='Tags'
							name='tags'
							handler={handleInput}
							value={''}
							hint='Video tags... E.g. hello, world'
							isLoading={false}
							error={errors?.tags}
						/>
					</div>
					{/* video metadata aside */}
					<div className='w-48 md:w-52 lg:w-64 p-3 sm:border-l sm:border-slate-300 flex flex-col gap-1'>
						<h2 className='font-bold text-base tracking-wide text-slate-500 mb-5'>
							More Settings
						</h2>
						<AudienceSetting
							status={uploadMetadata.status}
							handle={handleSelect}
						/>
						<PlaylistSetting
							status={uploadMetadata.playlist}
							handle={handleSelect}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UploadVideo;
