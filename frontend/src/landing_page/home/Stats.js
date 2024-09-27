import React from 'react';
import { Link } from 'react-router-dom';

function Stats() {
    return ( 
        <div className='container-fluid p-5'>
            <div className='row p-3'>
                <div className='col-lg-5 col-md-5 col-sm-12 p-2'>
                    <h2 style={{marginBottom: "40px"}}>Trust with confidence</h2>
                    <h4>Customer-first always</h4>
                    <p style={{margin: "5px 0px 32px", color: "#666666"}}>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>

                    <h4>No spam or gimmicks</h4>
                    <p style={{marginBottom: "32px", color: "#666666"}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h4>The Zerodha universe</h4>
                    <p style={{marginBottom: "32px", color: "#666666"}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h4>Do better with money</h4>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>

                <div className='col-1'></div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img src='media/images/ecosystem.png' alt='img' style={{width: "95%"}}></img>
                    <div className='text-center'>
                        <Link style={{textDecoration: "none"}} href='' className='mx-5'>Explore our products <i class="fa-solid fa-arrow-right-long"></i></Link>
                        <Link style={{textDecoration: "none"}} to='*'>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;