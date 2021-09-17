import React from "react";

function Navbar(){
    return (
        <div>
            <section id="navigation-bar">
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <div class="hamburger-menu"> 
                    <a class="nav-link" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-bars fa-2x"></i>
                    </a>
                    <div class="ham-dropdown-menu dropdown-menu noselect" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                    </div>
                    <a class="navbar-brand" href="/"><img src="images/Newegg-clone-logo.png" alt="logo"></img></a>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item dropdown">
                            <a class="category-selector nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            All
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">CPU</a>
                                <a class="dropdown-item" href="#">GPU</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="www.google.com">Something else here</a>
                            </div>
                        </li>
                        <li class="search-bar-li">
                            <div class="input-group">
                                <div class="form-outline">
                                <input type="search" id="form1" class="search-bar form-control" />
                                </div>
                                <button type="button" class="search-submit-btn btn btn-outline-light">
                                <i class="search-hourglass fas fa-search"></i>
                                </button>
                            </div>
                        </li>
                        <li class="register">
                        <div class="reg-div">
                            <a class="register-btn" href="/login">
                            <div class="flex-container">
                                <div class="item"><i class="fas fa-user-circle fa-2x"></i></div>
                                <div class="item register-welcome">
                                <div class="subtext">Welcome</div>
                                <div>Sign in/Register</div>
                                </div>
                            </div>
                            </a>
                        </div>
                        </li>
                        <li class="checkout">
                            <a href="/cart"><i class="cart-btn fas fa-shopping-cart fa-2x"></i></a>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    );
}

export default Navbar;