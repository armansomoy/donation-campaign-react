import React from 'react';
import Banner from '../Banner/Banner';
import Donations from '../Donations/Donations';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Donation Website | Home</title>
            </Helmet>
           <Banner></Banner>
           <Donations></Donations>
        </div>
    );
};

export default Home;