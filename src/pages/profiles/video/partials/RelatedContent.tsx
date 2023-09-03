import { v4 as uuidv4 } from 'uuid';
import demoImg from '../../../../assets/demo.jpg';
import ProfileThumbnail from '../../../../components/ProfileThumbnail';
// import VideoDashboardLoader from '../../../../components/loaders/VideoDashboardLoader';

export default function RelatedContent() {
	return (
		<>
			{new Array(10).fill(true).map(() => (
				<ProfileThumbnail
					key={uuidv4()}
					thumbnail={demoImg}
					views='7.6M'
					timeStamp='05:44'
					title='LEADERSHIP LAB: The Craft of Writing Effectively UChicago Social Sciences The Craft of Writing Effectivel'
					channelName={'Standford Graduate School of Business'}
					chnLink='/channel123'
					vidLink='/watch/video12340'
					uploadedAt='1month'
					isList
				/>
			))}

			{/* {new Array(10).fill(false).map(() => (
                <VideoDashboardLoader isList />
            ))} */}
		</>
	);
}
