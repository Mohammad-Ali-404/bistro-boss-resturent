/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Home/Banner';
import Catagory from './Home/Catagory/Catagory';
import PopularMenu from './Home/PopularMenu/PopularMenu';
import Featured from './Home/Featured/Featured';
import Testimonial from './Home/Testimonial/Testimonial';
import Contact from './Home/Contact/Contact';
import OrderChef from './Home/OrderChef/OrderChef';
import { Helmet } from 'react-helmet-async';
import Cover from './Shared/Cover/Cover';
import BannerImage from '../assets/home/chef-service.jpg';
const Home = () => {
    return (
        <div>
            <Helmet><title>Bisstro Boss | Home</title></Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <Cover img={BannerImage} title="Bistro Boss" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."></Cover>
            <PopularMenu description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."></PopularMenu>
            <Contact></Contact>
            <OrderChef></OrderChef>
            <Featured></Featured>
            <Testimonial></Testimonial>
            home
        </div>
    );
};

export default Home;