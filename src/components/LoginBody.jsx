import React, { useState } from 'react'
import login from '../imgs/login.png';
import {Link, useNavigate } from 'react-router-dom';

function LoginBody() {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        email: "",
        password: ""
    });
    const handleSubmit = async(e)=>{
        e.preventDefault();
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;

        if(user.email.match(mailformat))
        {
            if(user.password.match(passw))
            {
                const response = await fetch('http://localhost:5000/login',{
                    method:"POST",
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({
                            "email": user.email,
                            "password": user.password
                    })
                });
                const data = await response.json();
                localStorage.setItem("token",data.token);
                navigate("/");
            }
            else{
                alert('Wrong password Type! Please use characters between 8 and 15 and alteast one numeric digit and special character.') 
            }
        }
        else{
        alert("You have entered an invalid email type!");      
        }
}

    

        
    const handleChange = (e)=>{
        e.persist();
        setUser({...user,[e.target.name]:e.target.value});
    }
    return (
        <>
            <section className="login p-t-90">
                <div className="container">
                    <div className="login-content">
                        <div className="row gx-5">
                            <div className="col-md-5">
                                <div className="login-box center">
                                    <h5 className="orange">Login</h5>
                                    <p>New to LOGO DESIGN ? <Link to="/signup" className="anch-color">Sign Up</Link></p>
                                    <span className=" d-block">
                                        By logging in, you agree to logo design’s <Link to="#" className="anch-color">Terms of Service</Link> and <Link to="#" className="anch-color">Privacy Policy</Link>.
                                    </span> 
                                    <form onSubmit={handleSubmit} className="login-form" action="">
                                           <div className="mb-3">
                                            <input type="email" name='email' onChange={handleChange} value={user.email} className="form-control" placeholder="Email"/>
                                        </div>
                                        <div className="mb-2">
                                            <input type="password" name='password' onChange={handleChange} value={user.password} className="form-control" placeholder="Password"/>
                                        </div>
                                        <Link to="#" className="anch-color d-flex justify-content-end">Forgot password?</Link>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                        <span className="d-flex justify-content-end">Don’t have an account&nbsp;<Link to="/signup" className="anch-color">Sign Up</Link></span>
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

export default LoginBody