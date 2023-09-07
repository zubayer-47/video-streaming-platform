import { FC } from 'react';
import { useSubmit } from 'react-router-dom';

type PageLayoutProps = {
	children: React.ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
	return <div className='fixed inset-0 flex flex-col'>{children}</div>;
};
useSubmit;
export default PageLayout;
