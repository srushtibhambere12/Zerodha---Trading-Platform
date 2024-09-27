import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='HeroImg' className='mb-5'></img>
                <h1>Invest in everything</h1>
                <p style={{fontSize: "20px"}}>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <div>
                <button className="btn btn-primary fs-5 mt-4" style={{margin: "25px 0px 0px 0px", borderRadius: "3px", fontWeight: "500", padding:"10px 30px"}}>Sign up Now</button>
                </div>
            </div>
        </div>
     );
}

export default Hero;