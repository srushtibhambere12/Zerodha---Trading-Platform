import React from 'react';

 function RightSection(
    {imageUrl, 
    productName, 
    productDescription, 
    learnMore}) {
    return ( 
        <div className='container'>
            <div className='row product-img'>
                <div className='col-lg-5 col-md-5 col-sm-12 product-content p-5'>
                    <h1>{productName}</h1>
                    <p className='mt-4'>{productDescription}</p>

                    <div className='product-link'>
                        <a href={learnMore}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>

                <div className='col-lg-1 col-md-1'></div>

                <div className='col-lg-6 col-md-6 col-sm-12 img1'>
                    <img src={imageUrl} alt='img'></img>
                </div>
            </div>
       </div>
     );
 }
 
 export default RightSection;