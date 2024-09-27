import React from 'react';

 function LeftSection({
        imageUrl, 
        productName, 
        productDescription, 
        tryDemo, 
        learnMore, 
        googlePlay, 
        appStore}) {
    return ( 
       <div className='container'>
            <div className='row product-img mb-5'>
                <div className='col-lg-6 col-md-6 col-sm-12 mt-5 img1'>
                    <img src={imageUrl} alt='img'></img>
                </div>

                <div className='col-lg-1 col-md-1'></div>

                <div className='col-lg-5 col-md-5 col-sm-12 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p className='mt-4'>{productDescription}</p>

                    <div className='product-link'>
                        <a href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href={learnMore} style={{marginLeft: "70px"}}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    
                    <div className='mt-4'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' alt='img'></img></a>
                        <a href={appStore}><img src='media/images/appStoreBadge.svg' alt='img' style={{marginLeft: "30px"}}></img></a>
                    </div>
                </div>
            </div>
       </div>
     );
 }
 
 export default LeftSection;