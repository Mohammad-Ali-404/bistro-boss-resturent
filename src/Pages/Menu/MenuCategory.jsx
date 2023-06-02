import React, { useState } from 'react';
import MenuItem from '../Shared/MenuItem';
import Cover from '../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, coverImg, title , description}) => {
    const [showAll, setShowAll] = useState(false)
    return (
        <div className=' mb-16'>
            {title && <Cover img={coverImg} title={title} description={description}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 my-16'>
                { showAll ?
                    items.map(item => <MenuItem key={item._id} item={item} ></MenuItem>) 
                    : 
                    items.slice(0, 6)
                    .map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                }
            </div>
                <div className="text-center">
                        {!showAll && (
                        <button
                            onClick={() => setShowAll(true)}
                            className="btn btn-sm btn-secondary my-4"
                          >
                            Show All
                        </button>
                    )}
                </div>
                <div className='text-center'>
                    <Link to={`/order/${title}`}><button className='btn btn-outline border-0 border-b-4 mt-4'>Order Your Food</button></Link>
                </div>
            </div>
    );
};

export default MenuCategory;