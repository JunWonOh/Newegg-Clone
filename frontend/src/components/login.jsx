import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: '',
            password: ''
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

        const userInfo = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(userInfo);

        axios.post('/', {
            caller: 'login',
            userInfo
        })
            .then(response => {
                if (response.data) {
                    console.log('success!!!!!!')
                    window.location.href = '/'
                } else {
                    console.log("Login error: incorrect info");
                }
            })
    }

    render() {
        return (
            <div>
                <section id="login-area">
                        <div class="main-div row">
                            <div class="main-login col-sm-4">
                                <h1>SIGN IN</h1>
                                <form action="/login" method="POST">
                                    <div class="form-group">
                                        <label>Email address</label>
                                        <input type="email" value={this.state.username} onChange={this.onChangeUsername} class="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        <small id="emailHelp" name="password" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" value={this.state.password} onChange={this.onChangePassword} class="form-control" placeholder="Password"/>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                    </div>
                                    <button type="submit" class="login-btn btn btn-primary" onClick={ (e) => this.handleSubmit(e) }>SIGN IN</button><p>New to Newegg Clone? <a href="/register">Sign up</a></p>
                                </form>
                            </div>
                            <div class="alt-login col-sm-4">
                                <div class="google-login card">
                                    <div class="card-body">
                                        <a class="google-anchor btn btn-block" href="http://localhost:3001/auth/google" role="button">
                                            <i class="fab fa-google"></i>
                                            Sign In with Google
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        );
    }
}
