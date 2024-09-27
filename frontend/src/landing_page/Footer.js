import React from 'react';


function Footer() {
    return (
        <footer id='footer'>
            <div className='container'>
                <div className='row between'>
                    <div className='col-lg-3 col-md-3 col-sm-5'>
                        <img src='media/images/logo.svg' style={{ width: "70%", padding: "10px 0px" }}></img>
                        <p className='footer-socials'>
                            &copy; 2010 - 2024, Zerodha Broking Ltd. 
                            <br></br>All rights reserved.
                        </p>
                        <div className='socials'>
                            <i class="fa-brands fa-x-twitter"></i>
                            <i class="fa-brands fa-square-facebook icon"></i>
                            <i class="fa-brands fa-instagram icon"></i>
                            <i class="fa-brands fa-linkedin-in icon"></i>
                        </div>
                        <hr className='hr'></hr>
                        <div className='socials'>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-whatsapp"></i>
                            <i class="fa-brands fa-telegram icon"></i>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12 footer-link'>
                        <p className='fs-5 footer-name'>Comapny</p>
                        <li><a href=''>About</a></li>
                        <li><a href=''>Pricing</a></li>
                        <li><a href=''>Products</a></li>
                        <li><a href=''>Referral programme</a></li>
                        <li><a href=''>Careers</a></li>
                        <li><a href=''>Zerodha.tech</a></li>
                        <li><a href=''>Press & media</a></li>
                        <li><a href=''>Zerodha Cares (CSR)</a></li>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12 footer-link'>
                        <p className='fs-5 footer-name'>Support</p>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Support portal</a></li>
                        <li><a href="">Z-Connect blog</a></li>
                        <li><a href="">List of charges</a></li>
                        <li><a href="">Downloads & resources</a></li>
                        <li><a href="">Videos</a></li>
                        <li><a href="">Market overview</a></li>
                        <li><a href="">How to file a complaint?</a></li>
                        <li><a href="">Status of your complaints</a></li>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12 footer-link'>
                        <p className='fs-5 footer-name'>Account</p>
                        <li><a href=''>Open an account</a></li>
                        <li><a href=''>Fund transfer</a></li>
                    </div>
                </div>

                <div className="footer-para" style={{marginTop: "40px"}}>
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href=''>complaints@zerodha.com</a>, for DP related to <a href=''>dp@zerodha.com.</a> Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>

                    <p>Procedure to file a complaint on <a href=''>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                    <p><a href=''>Smart Online Dispute Resolution</a> | <a href=''>Grievances Redressal Mechanism</a></p>

                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href=''>create a ticket here</a>.</p>

                </div>
            </div>
        </footer>
    );
}

export default Footer;