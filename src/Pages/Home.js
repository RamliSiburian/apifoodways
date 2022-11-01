import React from 'react'
import Hero from '../Components/Hero'
import { NearRestaurantList } from '../Components/Near-restaurant-list';
import { PopularList } from '../Components/Popular-rastaurant-list';

function Home() {
    return (
        <>
            <Hero />
            <PopularList />
            <NearRestaurantList />
        </>
    )
}

export default Home; 