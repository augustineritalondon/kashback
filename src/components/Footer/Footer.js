import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-5 col-md-3 col-12'>
                    <h1>Kashback</h1>
                </div>
                <div className='col-lg-7 col-md-9 col-12'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3 col-6 mt-3'>
                            <h5>About</h5>
                            <ul>
                                <li>Company</li>
                                <li>Careers</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-3 col-6 mt-3'>
                            <h5>Legal</h5>
                            <ul>
                                <li>Terms of use</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-3 col-6 mt-3'>
                            <h5>Socials</h5>
                            <ul>
                                <li><i className="fab fa-facebook-f"></i> Facebook</li>
                                <li><i className="fab fa-twitter"></i> Twitter</li>
                                <li><i className="fab fa-instagram"></i> Instagram</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
};

export default Footer;
