import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        // <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top" style={{ boxShadow: "2px 1px 2px #eee" }}>
            <div className='container p-2'>
                <Link className="navbar-brand" to="/">
                    <img src='media/images/logo.svg' alt='logo' style={{ width: "20%" }}></img>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <form className="form-inline my-2 my-lg-0">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/support">Support</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
        // </div>
    );
}

export default Navbar;