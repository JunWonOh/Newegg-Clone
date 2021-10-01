import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        
        this.state = {
            username: '',
            password: '',
            welcome: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post('/', {
            caller: 'login',
            username: this.state.username,
            password: this.state.password,
            withCredentials: true
        })
            .then(response => {
                if (response.data) {
                    if (response.data === "No User Exists") {
                        this.setState({
                            welcome: 'ERROR: ' + response.data
                        })
                    } else {
                        this.setState({
                            welcome: 'Welcome. Logging in...'
                        })
                        //redirect to home
                        window.location.href = '/'
                    }
                } else {
                    this.setState({
                        welcome: 'ERROR: Could not find username/password in database'
                    })
                    console.log("Login error: incorrect info");
                }
                console.log(response.data);
            })
            .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
    }
    
    GetStatus(currentUserID) {
        if (currentUserID === undefined || currentUserID === "ERROR: No User Exists" || currentUserID === 'ERROR: Could not find username/password in database') {
            return (
                <p style={{color: "red", fontSize: "1rem", marginTop: "30px"}}>{currentUserID}</p>
            )
        } else {
            return (
                <p style={{color: "green", fontSize: "1rem", marginTop: "30px"}}>{currentUserID}</p>
            );
        }
    }
    render() {
        return (
            <div>
                <section id="login-area">
                        <div className="main-div row">
                            <div className="main-login col-sm-4">
                                <h1>SIGN IN</h1>
                                <form action="/login" method="POST">
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" value={ this.state.username } onChange={ this.onChangeUsername } className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        <small id="emailHelp" name="password" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" value={ this.state.password } onChange={ this.onChangePassword } className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input"/>
                                        <label className="form-check-label">Remember me</label>
                                    </div>
                                    <button type="submit" className="login-btn btn btn-primary" onClick={ (e) => this.handleSubmit(e) }>SIGN IN</button><p>New to Newegg Clone? <a href="/register">Sign up</a></p>
                                </form>
                            </div>
                            <div className="alt-login col-sm-4">
                                <div className="google-login card">
                                    <div className="card-body">
                                        <a className="google-anchor btn btn-block" href="http://localhost:3001/auth/google" role="button">
                                            <i className="fab fa-google"></i>
                                            Sign In with Google
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        { this.GetStatus(this.state.welcome) }
                </section>
            </div>
        );
    }
}
