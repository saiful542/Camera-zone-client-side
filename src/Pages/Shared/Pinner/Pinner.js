import React from 'react';

const Pinner = () => {
    return (
        <div>
            <div className="mt-2 " >
                <div className="spinner-grow p-3 fs-6 my-5 mx-1 bg-warning bg-opacity-100" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow p-3 fs-6 my-5 mx-1 bg-warning bg-opacity-75" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow p-3 fs-6 my-5 mx-1 bg-warning bg-opacity-50" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow p-3 fs-6 my-5 mx-1 bg-warning bg-opacity-25" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow p-3 fs-6 my-5 mx-1 bg-warning bg-opacity-10" role="status">
                    <span className="sr-only">Loading...</span>
                </div>

            </div>

        </div>
    );
};

export default Pinner;