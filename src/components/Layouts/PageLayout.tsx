import { FC } from "react";

type PageLayoutProps = {
    children: React.ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className="bg-indigo-50">
            <div className='max-w-full md:max-w-2xl lg:max-w-4xl mx-2 md:mx-auto xl:max-w-5xl'>
                {children}
            </div>
        </div>
    )
}

export default PageLayout