import React from 'react';

const SpinComponent: React.FC  = () => {
    return (
        <div className="flex justify-center items-center mt-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-700"></div>
        </div>
    );
};

export default SpinComponent;
