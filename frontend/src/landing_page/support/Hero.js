import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id='support-hero'>
             <div className='p-5 kite-login' id='supportWrapper'>
                <h3>Support Portal</h3>
                <a href='*'>Track tickets</a>
             </div>
             <div className='row v-align between mr-5'>
                <div className='col-7 kite-login supportWrapper'>
                    <h4>Search for an answer or browse help topics to create a ticket</h4>
                    <div className='search-input-grp mt-5'>
                        <input className="form-control fs-6" id='search-text' placeholder='Eg: how do i activate F&O, why is my order getting rejected ...'></input>
                    </div>
                    <br></br>
                    <a href='*'>Track account opening</a>
                    <a href='*'>Track segment activation</a>
                    <a href='*'>Intraday margins</a>
                    <a href='*'>Kite user manual</a>
                </div>
                <div className='col-5 support-links'>
                    <h4>Featured</h4>
                    <ol>
                        <li><a href='*'>Surveillance measure on scrips - August 2024</a></li>
                        &nbsp;
                        <li><a href='*'>Latest Intraday leverages and Square-off timings</a></li>
                        &nbsp;
                    </ol>
 
                </div>
             </div>
        </section>
    );
}

export default Hero;