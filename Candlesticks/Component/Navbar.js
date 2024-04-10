import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/logo.jpg';

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="container-fluid sticky-top navbars h-300">
            <div className="row">
                <div className="col d-flex inline-item">
                    <img src={logo} alt="" width="60px" height="60px" style={{ borderRadius: "40px" }} className="" />
                    <h1 className="pt-2 ms-4" style={{ textDecoration: "none",color:"darkgreen",fontFamily:"roboto" }}>Trade Spark </h1>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-md-center mt-2 justify-content-start">
                    <nav className="mt-3 me-4">
                        <ul className="list-inline">
                            <li className={`list-inline-item ps-3 ${location.pathname === '/' ? 'underline' : ''}`}>
                                <Link to="/" className="text-dark menu text-decoration-none">Home</Link>
                            </li>
                            <li className={`list-inline-item ps-3  ${location.pathname === '/Candle' ? 'underline' : ''}`}>
                                <Link to="/Candle" className="text-dark menu text-decoration-none">Candle</Link>
                            </li>
                            <li className={`list-inline-item ps-3  ${location.pathname === '/About' ? 'underline' : ''}`}>
                                <Link to="/Aboutus" className="text-dark menu text-decoration-none">About Us</Link>
                            </li>
                        
                        </ul>
                    </nav>
                </div>
            </div>
            
        </div>
    );
}

export default Navbar;
