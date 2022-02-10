import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar2 = () => {
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
                    
                    <Link to="/vendor" ><button><span className="nav-link">Become a Vendor </span></button></Link>
                </div>
            </div>
        </div>
    </nav>
</>
  )
}

export default Navbar2