import React from 'react';

function Register() {
    return (
        <div>
            <section>
                <h1>hello</h1>
            </section>
            <section id="login-area">
                <div class="main-div row">
                    <div class="main-login col-sm-4">
                        <h1>REGISTER</h1>
                        <form action="/register" method="POST">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Confirm Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <button type="submit" class="login-btn btn btn-primary">REGISTER</button>
                        </form>
                    </div>
                    <div class="alt-login col-sm-4">
                        <div class="google-login card">
                            <div class="card-body">
                                <a class="google-anchor btn btn-block" href="/auth/google" role="button">
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

export default Register;