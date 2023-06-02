import React from 'react';
import { Helmet } from 'react-helmet-async';
import UseMenu from '../../hooks/UseMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import menuImg from '../../assets/menu/banner3.jpg'
const Menu = () => {
    const [menu] = UseMenu()
    const todaysOffer = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet><title>Bisstro Boss | Menu</title></Helmet>
            {/* main cover  */}
            <SectionTitle heading="---Don't miss---" subHeading="TODAY'S OFFER"/>
            {/* offered menu items */}
            <MenuCategory items={todaysOffer} title={"Today's Offer"} coverImg={menuImg} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."}></MenuCategory>
            {/* desserts menu items */}
            <MenuCategory items={desserts} title={"dessert"} coverImg={dessertImg} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} title={"pizza"} coverImg={pizzaImg} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."></MenuCategory>    
            {/* salad menu items */}
            <MenuCategory items={salad} title={"salad"} coverImg={saladImg} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soup} title={"soup"} coverImg={soupImg} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."/>
            {/* Drinks menu items */}
            <MenuCategory items={drinks} title={"drinks"} coverImg={menuImg} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."/>
        </div>
    );
};

export default Menu;