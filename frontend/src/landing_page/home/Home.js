import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import Education from './Education';
import Stats from './Stats';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';


function Home() {
    return ( 
        <>
           
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
          
        </>
     );
}

export default Home;