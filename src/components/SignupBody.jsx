import Image from 'next/image';
import React from 'react'
import LoginImage from '/public/imgs/login.png';

function SignupBody() {
    return (
        <>
            <section className="signup p-t-90">
                <div className="container">
                    <div className="login-content">
                        <div className="row gx-5,">
                            <div className="col-md-5">
                                <div className="login-box center">
                                    <h5 className="orange">Sign Up Now</h5>
                                    <p>Connect with great local businesses</p>
                                    <form className="login-form signup-form" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <input type="text" name='first_name' onChange={handleInput} value={userInput.first_name} className="form-control" placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <input type="text" name='last_name' onChange={handleInput} value={userInput.last_name} className="form-control" placeholder="Last Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" name='email' onChange={handleInput} value={userInput.email} className="form-control" placeholder="Email" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" name='password' onChange={handleInput} value={userInput.password} className="form-control" placeholder="Password" />
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