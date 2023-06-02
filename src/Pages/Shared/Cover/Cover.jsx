import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({img, title, description}) => {
    return (
        <Parallax
        blur={{ min: -40, max: 40}}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
       <div>
            <div className="hero h-[550px]">
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-6/12">
                        <h1 className=" mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-2">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    </Parallax>
        
    );
};

export default Cover;