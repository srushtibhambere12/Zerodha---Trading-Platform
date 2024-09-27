import React from 'react';

function Hero() {
    return ( 
        <div>
            <div className='container pricing-hero'>
                <div className='row text-center pricing-heading'>
                    <h1>Pricing</h1>
                    <p style={{fontSize: "20px"}}>Free equity investments and flat ₹20 intraday and F&O trades</p>
                </div>
            </div>

            <div className='row between text-center border-top border-bottom pb-5'>
                <div className='four columns pricing-img pricing-data'>
                <img src='media/images/pricing0.svg' alt='img'></img>
                        <h3>Free equity delivery</h3>
                        <p>All equity delivery investment (NSE, BSE), <br></br>are absolute free - ₹ 0 brokerage.</p>
                </div>
                <div className="four columns pricing-img pricing-data">
                <img src='media/images/pricingEquity.png' alt='img'></img>
                        <h3>Intraday and F&O trades</h3>
                        <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="four columns pricing-img pricing-data">
                <img src='media/images/pricing0.svg' alt='img'></img>
                        <h3>Free direct MF</h3>
                        <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>

            {/* <div className='container'>
                <div className='row p-5 m-4 border-bottom'>
                    <div className='col-lg-4 col-md-4 col-sm-12 pricing-img text-center'>
                        <img src='media/images/pricing0.svg' alt='img'></img>
                        <h3>Free equity delivery</h3>
                        <p>All equity delivery investment (NSE, BSE), <br></br>are absolute free - ₹ 0 brokerage.</p>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 pricing-img text-center'>
                    <img src='media/images/pricing0.svg' alt='img'></img>
                        <h3>Intraday and F&O trades</h3>
                        <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 pricing-img text-center'>
                    <img src='media/images/pricingMF.svg' alt='img'></img>
                        <h3>Free direct MF</h3>
                        <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div> */}
        </div>
     );
}

export default Hero;
