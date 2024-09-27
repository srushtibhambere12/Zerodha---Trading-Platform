import React from 'react';

function Pricing() {
    return ( 
       <div className='container pt-5'>
            <div className='row'>
                <div className='col-lg-4 col-md-5 col-sm-12'>
                    <h2 className='mb-3'>Unbeatale pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a style={{textDecoration: "none"}} href=''>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-lg-2 col-md-1'></div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='row text-center p-3'>
                        <div className='col-lg-6 col-md-6 col-sm-12 p-2 border rounded'>
                            <h1 className='mb-3'>₹0</h1>
                            <p style={{margin: "16px 0px 15px"}}>Free equity delivery and direct <br></br>mutual funds</p>
                        </div>
                        
                        <div className='col-lg-6 col-md-6 col-sm-12 p-2 border rounded'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
     );
}

export default Pricing;