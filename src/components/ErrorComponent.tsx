import React from 'react';

const ErrorComponent: React.FC<{ error: string }> = ({error}) => {

    return (
        <div className="flex w-[400px] justify-center items-center bg-pink-200 border-pink-500 border-l-4 p-4 mt-8">
            <p className="text-pink-800 font-bold">{error}</p>
        </div>
    );
};

export default ErrorComponent;
