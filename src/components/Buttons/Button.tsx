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
};
const Button = ({
    title,
    handler,
    type = 'button',
    transparent,
    isDisabled,
    isLoading
}: BtnProp) => {
    return (
        <button
            type={type}
            className={`px-4 p-2 rounded-lg outline-none tracking-wide ${isDisabled && 'opacity-50'
                } ${transparent
                    ? 'bg-transparent text-indigo-500 hover:underline'
                    : 'bg-indigo-500 text-white'
                }`}
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

export default Button;