import React, { useState } from 'react';
import orderBanner from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../hooks/UseMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = UseMenu()
    const drinks = menu.filter(item => item.category === 'drinks')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet><title>Bisstro Boss | Order</title></Helmet>
            <Cover img={orderBanner} title="Order Food" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ea quos tempore impedit maiores voluptatibus voluptates. Exercitationem praesentium ab ratione."></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='text-center mt-16 mb-16 border-b-4'>
                    <Tab>Salads</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}/>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Order;