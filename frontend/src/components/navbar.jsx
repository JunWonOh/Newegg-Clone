import React from "react";

function Navbar(){
    return (
        <div>
            <section id="navigation-bar">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="hamburger-menu"> 
                    <a className="nav-link" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-bars fa-2x"></i>
                    </a>
                    <div className="ham-dropdown-menu dropdown-menu noselect" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                    </div>
                    <a className="navbar-brand" href="/"><img src="/images/Newegg-clone-logo.png" alt="logo"></img></a>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a className="category-selector nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            All
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">CPU</a>
                                <a className="dropdown-item" href="#">GPU</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="www.google.com">Something else here</a>
                            </div>
                        </li>
                        <li className="search-bar-li">
                            <div className="input-group">
                                <div className="form-outline">
                                <input type="search" id="form1" className="search-bar form-control" />
                                </div>
                                <button type="button" className="search-submit-btn btn btn-outline-light">
                                <i className="search-hourglass fas fa-search"></i>
                                </button>
                            </div>
                        </li>
                        <li className="register">
                        <div className="reg-div">
                            <a className="register-btn" href="/login">
                            <div className="flex-container">
                                <div className="item"><i className="fas fa-user-circle fa-2x"></i></div>
                                <div className="item register-welcome">
                                <div className="subtext">Welcome</div>
                                <div>Sign in/Register</div>
                                </div>
                            </div>
                            </a>
                        </div>
                        </li>
                        <li className="checkout">
                            <a href="/cart"><i className="cart-btn fas fa-shopping-cart fa-2x"></i></a>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    );
}

export default Navbar;