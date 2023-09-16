import dayjs from 'dayjs';
import demoImg from '../../assets/demo.jpg';
import Section from '../../components/Section';

const SearchPage = () => {
	return (
		<Section
			channelName='Zubayer'
			chnLink='something'
			desc="In this tutorial we will teach you how to learn ts in 10 seconds with
					the help of Rasel Dev. so, let's start In this tutorial we will teach
					you how to learn ts in 10 seconds with the help of will teach you how
					to learn ts in 10 seconds with the help of Rasel Dev. so, let's start"
			thumbnail={demoImg}
			timeStamp='02:00'
			title='Search Page How to Learn TypeScript in 10 Seconds for Fresher How to Learn How
						How to Learn TypeScript in 10 Seconds for Fresher How to How How to
						Learn TypeScript in 10 Seconds for Fresher How to Learn'
			uploadedAt={dayjs('20-11-2022').toNow(true)}
			vidLink='asd'
			views='2M'
		/>
	);
};

export default SearchPage;
