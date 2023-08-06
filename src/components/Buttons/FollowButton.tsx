import React, { ReactNode } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
type BtnProp = {
    title: string;
    handler?: () => void;
    type?: 'button' | 'submit';
    children?: React.ReactNode;
    transparent?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    classes?: string;
    icon?: ReactNode;
};
const FollowButton = ({
    title,
    handler,
    type = 'button',
    isDisabled,
    isLoading,
    classes,
    icon
}: BtnProp) => {
    return (
        <button
            type={type}
            className={`rounded-full outline-none tracking-wider bg-indigo-200/50 hover:bg-indigo-200/90 font-semibold ${!icon ? "px-6" : "flex items-center gap-2 px-3"} ${isDisabled && 'opacity-50'} ${classes}`}
            onClick={handler}
            disabled={isLoading || isDisabled}
        >
            {!icon ? null : icon}

            <span className='flex items-center'>
                <span>{title}</span>
                {!isLoading ? null : (
                    <FiRefreshCw className='ml-2 w-5 h-5 stroke-2 text-white animate-spin' />
                )}
            </span>
        </button>
    );
};

export default FollowButton;