import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem';
import UseMenu from '../../../hooks/UseMenu';

const PopularMenu = () => {
    const [menu] = UseMenu()
   const PopularMenu = menu.filter(item => item.category === 'popular')
    return (
        <section className='mb-12'>
            <SectionTitle
            heading={"---Check it out---"}
            subHeading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    PopularMenu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;