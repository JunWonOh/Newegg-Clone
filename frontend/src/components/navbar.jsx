import React from "react";
import axios from 'axios';

function CheckSubmit(e, query) {
    if (e.key === "Enter") {
        window.location.href = "/p/" + query;
    }
}

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeQuery = this.onChangeQuery.bind(this);

        this.state = {
            query: '',
            userId: 'Sign in/Register'
        }
    }

    componentDidMount() {
        console.log('pinging...')
        axios.get('http://localhost:3001/userinfo', {
            withCredentials: true
        })
            .then(response => {
                console.log(response.data[0].username)
                this.setState({userId: response.data[0].username})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeQuery(e) {
        console.log(e.target.value);
        this.setState({
            query: e.target.value
        })
    }

    formatUsername(username) {
        if (username === "Sign in/Register") {
            return username;
        } else {
            if (username.length > 15) {
                return username.slice(0, 10) + '...';
            }  else {
                return username;
            }
        }
    }

    render() {
        return (
            <div>
            <section id="navigation-bar">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="hamburger-menu"> 
                        <a className="nav-link" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bars fa-2x"></i>
                        </a>
                        <div className="ham-dropdown-menu dropdown-menu noselect" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another action</a>
                            <a className="dropdown-item" href="/">Something else here</a>
                        </div>
                    </div>
                    <a className="navbar-brand" href="/"><img src="/images/Newegg-clone-logo.png" alt="logo"></img></a>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a className="category-selector nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            All
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/p/cpu">CPU</a>
                                <a className="dropdown-item" href="/p/gpu">GPU</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="www.google.com">Something else here</a>
                            </div>
                        </li>
                        <li className="search-bar-li">
                            <div className="input-group">
                                <div className="form-outline">
                                <input type="search" id="form1" className="search-bar form-control" value={this.state.query} onChange={this.onChangeQuery} onKeyPress={ (e) => CheckSubmit(e, this.state.query) }/>
                                </div>
                                <a href={"/p/" + this.statequery}>
                                    <button type="button" className="search-submit-btn btn btn-outline-light">
                                    <i className="search-hourglass fas fa-search"></i>
                                    </button>
                                </a>
                            </div>
                        </li>
                        <li className="register">
                        <div className="reg-div">
                            <a className="register-btn" href="/login">
                            <div className="flex-container">
                                <div className="item"><i className="fas fa-user-circle fa-2x"></i></div>
                                <div className="item register-welcome">
                                <div className="subtext">Welcome</div>
                                <div>{ this.formatUsername(this.state.userId)}</div>
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
        )
    }
}