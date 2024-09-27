import React from 'react';

function NotFound() {
    return ( 
        <div className='container p-5 mb-5 mt-5'>
            <div className='row text-center'>
                <h2>404 Not Found</h2>
                <p style={{fontSize: "20px"}}>
                    Sorry, the page you are looking for does not exist.
                </p>
            </div>
        </div>
    );
}

export default NotFound;