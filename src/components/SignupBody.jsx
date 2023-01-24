import Image from 'next/image';
import React from 'react'
import LoginImage from '/public/imgs/login.png';

function SignupBody() {
    return (
        <>
            <section class="signup p-t-90">
                <div class="container">
                    <div class="login-content">
                        <div class="row gx-5">
                            <div class="col-md-5">
                                <div class="login-box center">
                                    <h5 class="orange">Sign Up Now</h5>
                                    <p>Connect with great local businesses</p>
                                    <form class="login-form signup-form">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <input type="text" class="form-control" placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <input type="text" class="form-control" placeholder="Last Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <input type="email" class="form-control" placeholder="Email" />
                                        </div>
                                        <div class="mb-3">
                                            <input type="password" class="form-control" placeholder="Password" />
                                        </div>
                                        <div class="mb-3">
                                            <input type="text" class="form-control" placeholder="ZipCode" />
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="">
                                                    <input type="text" class="form-control" placeholder="Month" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="">
                                                    <input type="text" class="form-control" placeholder="Day" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="">
                                                    <input type="text" class="form-control" placeholder="Year" />
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                        <span class="d-flex justify-content-end">Already have an account&nbsp;<a href="#" class="anch-color">Log in</a></span>
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

export default SignupBody