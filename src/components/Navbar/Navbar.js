import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <>  
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Kashback</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav" style={{marginLeft: "auto"}}>
                        <Link to="/vendor"><button><a className="nav-link" href="#">Become a Vendor</a></button></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
