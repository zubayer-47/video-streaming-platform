import React from 'react';
import { FiRefreshCw } from 'react-icons/fi';
type BtnProp = {
    title: string;
    handler?: () => void;
    type?: 'button' | 'submit';
    children?: React.ReactNode;
    transparent?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    classes?: string
};
const FollowButton = ({
    title,
    handler,
    type = 'button',
    isDisabled,
    isLoading,
    classes
}: BtnProp) => {
    return (
        <button
            type={type}
            className={`px-5 py-1.5 rounded-full outline-none tracking-wide bg-indigo-100 font-semibold ${isDisabled && 'opacity-50'} ${classes}`}
            onClick={handler}
            disabled={isLoading || isDisabled}
        >
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