import Image from 'next/image';
import React from 'react'
import LoginImage from '/public/imgs/login.png';

function LoginBody() {
    return (
        <>
            <section class="login p-t-90">
                <div class="container">
                    <div class="login-content">
                        <div class="row gx-5">
                            <div class="col-md-5">
                                <div class="login-box center">
                                    <h5 class="orange">Login</h5>
                                    <p>New to LOGO DESIGN ? <a href="#" class="anch-color">Sign Up</a></p>
                                    <span class="d-block">
                                        By logging in, you agree to logo design’s <a href="#" class="anch-color">Terms of Service</a> and <a href="#" class="anch-color">Privacy Policy</a>.
                                    </span>
                                    <form class="login-form" action="">
                                        <div class="mb-3">
                                            <input type="email" class="form-control" placeholder="Email"/>
                                        </div>
                                        <div class="mb-2">
                                            <input type="password" class="form-control" placeholder="Password"/>
                                        </div>
                                        <a href="#" class="anch-color d-flex justify-content-end">Forgot password?</a>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                        <span class="d-flex justify-content-end">Don’t have an account&nbsp;<a href="#" class="anch-color">Sign Up</a></span>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="login-img"><Image src={LoginImage} alt="..."/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginBody