import React from 'react';
import axios from 'axios';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: ''
        }
    }

    onChangeLastname(e) {
        this.setState({
            lastname: e.target.value
        })
    }

    onChangeFirstname(e) {
        this.setState({
            firstname: e.target.value
        })
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
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            password: this.state.password
        }

        axios.post('/', {
            caller: 'register',
            userInfo
        })
            .then(response => {
                if (response.data) {
                    console.log('gfasdfsadf');
                    // this.setState({
                    //     redirectTo: '/'
                    // })
                    window.location.href = '/'
                } else {
                    console.log("Register error: incorrect info");
                }
            })
    }

    render() {
        return (
            <div>
                <section id="login-area">
                    <div class="main-div row">
                        <div class="main-login col-sm-4">
                            <h1>REGISTER</h1>
                            <form action="/register" method="POST">
                                <div class="form-group">
                                    <label>First Name</label>
                                    <input type="text" value={this.state.firstname} onChange={this.onChangeFirstname} class="form-control" aria-describedby="emailHelp" placeholder="First Name" />
                                </div>
                                <div class="form-group">
                                    <label>Last Name</label>
                                    <input type="text" value={this.state.lastname} onChange={this.onChangeLastname} class="form-control" aria-describedby="emailHelp" placeholder="Last Name" />
                                </div>
                                <div class="form-group">
                                    <label>Email address</label>
                                    <input type="email" value={this.state.username} onChange={this.onChangeUsername} class="form-control"aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" value={this.state.password} onChange={this.onChangePassword} class="form-control" placeholder="Password" />
                                </div>
                                <div class="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" class="form-control" placeholder="Password" />
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input"/>
                                    <label class="form-check-label">Remember me</label>
                                </div>
                                <button type="submit" class="login-btn btn btn-primary" onClick={ (e) => this.handleSubmit(e) }>REGISTER</button>
                            </form>
                        </div>
                        <div class="alt-login col-sm-4">
                            <div class="google-login card">
                                <div class="card-body">
                                    <a class="google-anchor btn btn-block" href="http://localhost:3001/auth/google" role="button">
                                        <i class="fab fa-google"></i>
                                        Register with Google
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