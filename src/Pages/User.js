import React from 'react'
import Hero from '../Components/Hero';
import { NearRestaurantList } from '../Components/Near-restaurant-list';
import { PopularList } from '../Components/Popular-rastaurant-list';

function User() {
    return (
        <div>
            <Hero />
            <PopularList />
            <NearRestaurantList />
        </div>
    )
}

export default User;