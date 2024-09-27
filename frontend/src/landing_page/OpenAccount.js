import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5 mt-5'>
            <div className='row text-center'>
                <h2>Open a Zerodha account</h2>
                <p 
                    style={{fontSize: "18px"}}>
                        Modern platforms and apps, ₹0 investments, and 
                        flat ₹20 intraday and F&O trades.
                </p>
                
                <div>
                    <button 
                        className="btn btn-primary fs-5 mt-4" 
                        style={{margin: "25px 0px 0px 0px", 
                        borderRadius: "3px", fontWeight: "500", 
                        padding:"10px 30px"}}>
                            Sign up Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;