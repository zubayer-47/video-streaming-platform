import { FC } from 'react';

interface ChannelNavLayoutProps {
    children: React.ReactNode;
}

const ChannelNavLayout: FC<ChannelNavLayoutProps> = ({ children }) => {
    return <div className="max-w-7xl mx-auto flex gap-5 mt-5">
        {children}
    </div>
}
export default ChannelNavLayout