import React from 'react';
import './Home.css'
import img from '../../img/img.jpg'
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <div className='display-container'>
                <div className='half-width'>
                    <h1>Welcome to</h1>
                    <h1 style={{ color: "rgb(16, 118, 212)" }}>PARTEX Shop</h1>
                    <p>This is the site of main shop of Partex Shop. Here you can find so may items like partex computer tables, reading tables, daining tables and so on. So feel free to browse more for experiencing more products. The tables are made from the World’s best Quality Melamine Faced Chip Board with PVC edging by automatic edge bending machine. It is more familiar for fully Knock down system by using imported High Quality Rust Free Hardware Fittings.</p>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
            <Review></Review>

        </div>
    );
};

export default Home;