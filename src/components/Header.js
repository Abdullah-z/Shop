import React from 'react';
import "../../src/assets/css/custom.css"
import "../../src/assets/css/templatemo.css"
import "../../src/assets/css/bootstrap.min.css"
import { NavLink } from 'react-router-dom';
// import "../../src/assets/js/jquery-1.11.0.min.js"
// import "../../src/assets/js/jquery-migrate-1.2.1.min.js"
// import "../../src/assets/js/custom.js"
// import "../../src/assets/js/templatemo.js"
// import "../../src/assets/js/bootstrap.bundle.min.js"


   
    
   





const Header = () => {
  return <div>

<nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">

            <a className="navbar-brand text-success logo h1 align-self-center" href="/">
                Shop
            </a>

            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                <div className="flex-fill">
                    <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto" >
                        <li className="nav-item" >
                            <NavLink className="nav-link active" exact to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/about" style={{ textDecoration: 'none' }}>About</NavLink>
                        </li>
                        <li className="nav-item text-decoration-none">
                            <NavLink className="nav-link" exact to="/shop" style={{ textDecoration: 'none' }}>Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" style={{ textDecoration: 'none' }}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar align-self-center d-flex">
                    <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                        <div className="input-group">
                            <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..."/>
                            <div className="input-group-text">
                                <i className="bi bi-search mr-3"></i>
                            </div>
                        </div>
                    </div>
                    <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                        <i className="bi bi-search mr-3"></i>
                    </a>
                    <a className="nav-icon position-relative text-decoration-none" href="#">
                        <i className="bi bi-cart4 mr-3"></i>
                        <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                    </a>
                    <a className="nav-icon position-relative text-decoration-none" href="#">
                        <i className="bi bi-person-fill mr-3"></i>
                        {/* <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span> */}
                    </a>
                </div>
            </div>

        </div>
    </nav>




    

  </div>;
};

export default Header;
