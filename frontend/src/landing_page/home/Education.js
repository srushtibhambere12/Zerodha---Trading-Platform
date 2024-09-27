import React from 'react';

function Education() {
    return ( 
        <div className='container pt-5'>
            <div className='row pt-5'>
                <div className='col-lg-5 col-md-5 col-sm-12 pt-4'>
                    <img src='media/images/education.svg' alt='img' style={{width: "95%"}}></img>
                    {/* <div className='text-center'>
                        <a style={{textDecoration: "none"}} href='' className='mx-5'>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a style={{textDecoration: "none"}} href=''>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div> */}
                </div>

                <div className='col-1'></div>

                <div className='col-lg-6 col-md-6 col-sm-12 p-2 pt-4'>
                    <h4 style={{marginBottom: "20px"}}>Free and open market education</h4>
                    <p style={{margin: "16px 0px 15px"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a style={{textDecoration: "none"}} href=''>Varsity  <i class="fa-solid fa-arrow-right-long"></i></a>

                    <p style={{margin: "30px 0px 15px"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a style={{textDecoration: "none"}} href=''>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
            </div>
        </div>
     );
}

export default Education;