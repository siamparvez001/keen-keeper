import React from 'react';
import Banner from './Banner';
import Friends from './Friends';
// import { useLoaderData } from 'react-router';

const Home = () => {
    // const data = useLoaderData()
    // console.log(data, "data from home")
    return (
        <div>
            <div>
                <Banner></Banner>
                <Friends></Friends>
            </div>
        </div>
    );
};

export default Home;