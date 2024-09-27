import React from 'react';
 function Brokerage() {
    return ( 
        <div className='pb-4'>
            <div className='container p-5'>
                <div className='row brokerage-heading between v-align'>
                    <div className='text-center four columns'>
                        <h5><a href='*'>Brokerage calculator</a></h5>
                    </div>
                    <div className='text-center four columns'>
                        <h5><a href='*'>List of charges</a></h5>
                    </div>
                </div>
            </div>

            <div className='container'>
                <ul className='list-items text-muted'>
                    <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                    <li>Digital contract notes will be sent via e-mail.</li>
                    <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                </ul>
            </div>
        </div>
     );
 }
 
 export default Brokerage;