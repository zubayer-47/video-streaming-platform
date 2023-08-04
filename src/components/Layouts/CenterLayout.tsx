import { FC, ReactNode } from "react";

type PropType = {
    children: ReactNode;
    noWidth?: boolean;
    smWidth?: boolean;
};

const CenterLayout: FC<PropType> = ({ children, noWidth, smWidth }) => {
    return (
        <div className="h-screen flex justify-center place-items-center">
            <div className={`mx-3 md:mx-0 p-4 rounded-xl shadow-md bg-white ${!noWidth && 'md:w-11/12 lg:w-4/5'
                } ${smWidth && 'md:max-w-md lg:max-w-lg'}`}>
                {children}
            </div>
        </div>
    )
}
export default CenterLayout
