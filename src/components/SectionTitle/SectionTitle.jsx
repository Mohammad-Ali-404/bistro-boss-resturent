import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-3/12 mx-auto'>
            <p className='text-yellow-500 text-2xl mt-8 mb-4 font-semibold text-center'>{heading}</p>
            <p className='text-3xl mb-8 border-y-4 p-2 font-semibold text-center'>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;