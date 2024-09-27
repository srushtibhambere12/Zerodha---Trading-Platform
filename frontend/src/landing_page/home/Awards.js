import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-5'>
                    <img src='media/images/largestBroker.svg' alt="img"></img>
                </div>

                <div className='col-lg-6 col-sm-12 p-5 mt-5'>
                    <h2>Largest stock broker in India</h2>
                    <p className='mb-5'>1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <ul>
                                <li>Futures and Options</li>
                            </ul>
                            <ul>
                                <li>Commodity derivatives</li>
                            </ul>
                            <ul>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                        <ul>
                                <li>Stocks & IPOs</li>
                            </ul>
                            <ul>
                                <li>Direct mutual funds</li>
                            </ul>
                            <ul>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>

                    <img src='media\images\pressLogos.png' alt='img' style={{width: "100%"}}></img>

                </div>
            </div>
        </div>
     );
}

export default Awards;