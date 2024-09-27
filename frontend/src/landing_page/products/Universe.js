import React from 'react';

function Universe() {
    return ( 
        <div id='universe'>
            <div className='container universe-heading'>
                <h4>Want to know more about our technology stack? Check out the <a href='*'>Zerodha.tech</a> blog.</h4>
            </div>

            <div className='container universe-heading2'>
                <div className='row text-center'>
                    <h2>The Zerodha Universe</h2>
                    <p>Extend your trading and investment experience even further with our partner platforms</p>
                </div>

               <div className='mt-5 row'>
                    <div className='col-4 p-3 universe-img'>
                        <img src="media/images/smallcaseLogo.png" alt='img'></img>
                        <p>Thematic investment platform</p>
                    </div>

                    <div className='col-4 p-3 universe-img'>
                        <img src="media/images/streakLogo.png" alt='img'></img>
                        <p>Thematic investment platform</p>
                    </div>

                    <div className='col-4 p-3 universe-img'>
                        <img src="media/images/sensibullLogo.svg" alt='img'></img>
                        <p>Thematic investment platform</p>
                    </div>

                    <div className='col-4 p-3 universe-img mt-3'>
                        <img src="media/images/zerodhaFundhouse.png" alt='img'></img>
                        <p>Thematic investment platform</p>
                    </div>

                    <div className='col-4 p-3 mt-3 universe-img'>
                        <img src="media/images/tijori.png" alt='img' style={{height: "55px", width:"160px"}}></img>
                        <p>Thematic investment platform</p>
                    </div>
 
                    <div className='col-4 p-3 mt-3 universe-img'>
                        <img src="media/images/dittoLogo.png" alt='img' style={{height: "55px", width:"150px"}}></img>
                        <p>Thematic investment platform</p>
                    </div>
               </div>

                <div className='universe-button'>
                    <button className="btn btn-primary fs-5 mt-4" style={{margin: "25px 0px 0px 0px", borderRadius: "3px", fontWeight: "500", padding:"10px 30px"}}>Sign up now</button>
                </div>
            </div>
        </div>

       

     );
}

export default Universe;