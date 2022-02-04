import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Link as HashLink} from 'react-scroll';

const Navbar = () => {
    return (
        <>  
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                <div className="container">
                    <Link to="/"><span className="navbar-brand" href="#">Kashback</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav" style={{marginLeft: "auto"}}>
                            <HashLink className='nav-link navbar-item' style={{cursor:"pointer"}} activeClass="active" to='how_it_works' spy={true} smooth={true} offset={-100} duration={500}>How it works</HashLink>
                            <HashLink className='nav-link navbar-item' style={{cursor:"pointer"}} activeClass="active" to='advantages' spy={true} smooth={true} offset={-100} duration={500}>Advantages</HashLink>
                            <HashLink className='nav-link navbar-item' style={{cursor:"pointer"}} activeClass="active" to='faq' spy={true} smooth={true} offset={-100} duration={500}>FAQs</HashLink>
                            <HashLink className='nav-link navbar-item' style={{cursor:"pointer", marginRight:"10px"}} activeClass="active" to='contact' spy={true} smooth={true} offset={-100} duration={500}>Contact</HashLink>
                            <Link to="/vendor" ><button><span className="nav-link">Become a Vendor </span></button></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
