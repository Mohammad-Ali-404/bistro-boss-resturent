import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-items bg-fixed text-white pt-8 my-20 '>
           <SectionTitle
            heading={"---Check it out---"}
            subHeading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className='md:flex justify-center bg-slate-500 bg-opacity-60 items-center pt-12 pb-20 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 '>
                    <p>March 20, 2023</p>
                    <h2>WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;