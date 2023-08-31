import React, { ReactNode } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
type BtnProp = {
    title: string | null;
    handler?: () => void;
    type?: 'button' | 'submit';
    children?: React.ReactNode;
    transparent?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    classes?: string;
    icon?: ReactNode;
    bg?: string
};

const FollowButton = ({
    title,
    handler,
    type = 'button',
    isDisabled,
    isLoading,
    classes,
    icon,
    bg
}: BtnProp) => {
    return (
        <button
            type={type}
            className={`rounded-full outline-none tracking-wider  font-semibold ${!bg ? "text-gray-50 bg-gray-900 hover:bg-gray-800" : bg} ${!icon ? "px-6" : "flex items-center gap-2 px-3"} ${isDisabled && 'opacity-50'} ${classes}`}
            onClick={handler}
            disabled={isLoading || isDisabled}
        >
            {!icon ? null : icon}

            <span className='flex items-center'>
                <span className='text-sm md:text-md'>{title}</span>
                {!isLoading ? null : (
                    <FiRefreshCw className='ml-2 w-5 h-5 stroke-2 text-white animate-spin' />
                )}
            </span>
        </button>
    );
};

export default FollowButton;