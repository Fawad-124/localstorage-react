// import Image from 'next/image';
import React, { useState } from 'react'
import login from '../imgs/login.png';
import {Link, useNavigate } from 'react-router-dom';
function SignupBody() {
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState({
        first_name: "",
        last_name: "",
        email: "", 
        password: ""
    })
    const handleInput = (e) => {
        e.persist();
        setUserInput({...userInput,[e.target.name]: e.target.value});
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;

        if(userInput.email.match(mailformat))
        {
            if(userInput.password.match(passw))
            {
                const response = await fetch('http://localhost:5000/register',{
                    method:"POST",
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({
                            "first_name": userInput.first_name,
                            "last_name": userInput.last_name,
                            "email": userInput.email,
                            "password": userInput.password
                    })
                });
                const data = await response.json();
                console.log(data.msg);
                navigate("/login"); 
            }
            else{
                alert('Wrong password Type! Please use characters between 8 and 15 and alteast one numeric digit and special character.') 
            }
        }
        else
        {
        alert("You have entered an invalid email address!");
        
        }


        // e.preventDefault();
        // const response = await fetch('http://localhost:5000/register',{
        //     method:"POST",
        //     headers: {'Content-Type':'application/json'},
        //     body: JSON.stringify({
        //             "first_name": userInput.first_name,
        //             "last_name": userInput.last_name,
        //             "email": userInput.email,
        //             "password": userInput.password
        //     })
        // });
        // const data = await response.json();
        // console.log(data.msg);
        // navigate("/login");

    }


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
                                        {/* <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="ZipCode" />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="">
                                                    <input type="text" className="form-control" placeholder="Month" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="">
                                                    <input type="text" className="form-control" placeholder="Day" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="">
                                                    <input type="text" className="form-control" placeholder="Year" />
                                                </div>
                                            </div>
                                        </div> */}
                                        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                                        <button  type="submit" className="btn btn-primary" style={{marginTop: "10px"}}>Submit</button>
                                        <span className="d-flex justify-content-end">Already have an account&nbsp;<Link to="/login" className="anch-color">Log in</Link></span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="login-img"><img src={login} alt="..." width={500} height={500}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignupBody