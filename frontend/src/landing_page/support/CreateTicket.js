import React from 'react';

function CreatePage() {
    return ( 
        <div className='container'>
            <div className='row p-3'>
                <h2 className='support-heading mb-4'>To create a ticket, select a relevent topic</h2>
                <div className='mb-5 mt-3'>
                    <div className='row between support-link'>
                        <div className='four columns'>
                            <h5 className='card-title'><i class="bi bi-plus-circle"></i> Account Opening</h5>
                            <li><a href=''>Getting started</a></li>
                            <li><a href=''>Online</a></li>
                            <li><a href=''>Offline</a></li>
                            <li><a href=''>Charges</a></li>
                            <li><a href=''>Company,Partnership and HUF</a></li>
                            <li><a href=''>Non Resident Indian (NRI)</a></li>
                        </div>
                        <div className='four columns'>
                            <h5 className='card-title'><i class="fa-regular fa-user"></i> Your Zerodha Account</h5>
                            <li><a href=''>Login Credential</a></li>
                            <li><a href=''>Your Profile</a></li>
                            <li><a href=''>Account modification and segment addition</a></li>
                            <li><a href=''>CMR & DP ID</a></li>
                            <li><a href=''>Nomination</a></li>
                            <li><a href=''>Transfer and conversion of shares</a></li>
                        </div>
                        <div className='four columns'>
                            <h5 className='card-title'><i class="fa-solid fa-chart-line"></i> Trading and Markets</h5>
                            <li><a href=''>Trading FAQs</a></li>
                            <li><a href=''>Kite</a></li>
                            <li><a href=''>Margins</a></li>
                            <li><a href=''>Product and order types</a></li>
                            <li><a href=''>Corporate actions</a></li>
                            <li><a href=''>Kite features</a></li>
                        </div>
                    </div>

                    <div className='row between mt-5 support-link'>
                        <div className='four columns'>
                            <h5 className='card-title'><i class="bi bi-wallet"></i> Funds</h5>
                            <li><a href=''>Fund withdrawal</a></li>
                            <li><a href=''>Adding funds</a></li>
                            <li><a href=''>Adding bank accounts</a></li>
                            <li><a href=''>eMandates</a></li>
                        </div>
                        <div className='four columns'>
                            <h5 className='card-title'><i class="fa-regular fa-user"></i> Console</h5>
                            <li><a href=''>IPO</a></li>
                            <li><a href=''>Portfolio</a></li>
                            <li><a href=''>Funds statement</a></li>
                            <li><a href=''>Profile</a></li>
                            <li><a href=''>Reports</a></li>
                            <li><a href=''>Referral program</a></li>
                        </div>
                        <div className='four columns'>
                            <h5 className='card-title'><i class="fas fa-coins"></i> Coins</h5>
                            <li><a href=''>Understanding mutual funds and Coin</a></li>
                            <li><a href=''>Coin app</a></li>
                            <li><a href=''>Coin web</a></li>
                            <li><a href=''>Transactions and reports</a></li>
                            <li><a href=''>National Pension Scheme (NPS)</a></li>
                        </div>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default CreatePage;