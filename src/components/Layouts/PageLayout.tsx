import { FC } from "react";

type PageLayoutProps = {
    children: React.ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className='fixed inset-0 flex flex-col'>
            {children}
        </div>
    )
}

export default PageLayout