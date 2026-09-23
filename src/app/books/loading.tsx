import React from 'react';

const loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <span className="loading loading-bars loading-xl"></span>
            <h2>Loading books ...</h2>
        </div>
    );
};

export default loading;