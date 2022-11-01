import React, { useContext } from 'react'
import { LoginContext } from '../context/DataContext';
import DetailRestaurantList from '../Components/Detail-restaurant-list'


function DetailRestaurants() {
    return (
        <div style={{ backgroundColor: "#e5e5e5", minHeigt: "100vh" }}>
            <DetailRestaurantList />
        </div>
    )
}

export default DetailRestaurants;