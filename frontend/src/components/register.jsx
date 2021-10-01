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
                    window.location.href = '/';
                } else {
                    console.log("Register error: incorrect info");
                }
            })
            .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
    }

    render() {
        return (
            <div>
                <section id="login-area">
                    <div className="main-div row">
                        <div className="main-login col-sm-4">
                            <h1>REGISTER</h1>
                            <form action="/register" method="POST">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" value={this.state.firstname} onChange={ this.onChangeFirstname } className="form-control" aria-describedby="emailHelp" placeholder="First Name" />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" value={this.state.lastname} onChange={ this.onChangeLastname } className="form-control" aria-describedby="emailHelp" placeholder="Last Name" />
                                </div>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" value={this.state.username} onChange={ this.onChangeUsername } className="form-control"aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" value={this.state.password} onChange={ this.onChangePassword } className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input"/>
                                    <label className="form-check-label">Remember me</label>
                                </div>
                                <button type="submit" className="login-btn btn btn-primary" onClick={ (e) => this.handleSubmit(e) }>REGISTER</button>
                            </form>
                        </div>
                        <div className="alt-login col-sm-4">
                            <div className="google-login card">
                                <div className="card-body">
                                    <a className="google-anchor btn btn-block" href="http://localhost:3001/auth/google" role="button">
                                        <i className="fab fa-google"></i>
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