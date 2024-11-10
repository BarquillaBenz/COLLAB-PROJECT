import React from "react";
import './Login.css'
import loginImg from './loginImg.jpg'
import buksuLogo from './buksuLogo.jpg'
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";



function Login() {

    return (
        <>
            <div className="row">

                {/* LOGIN SECTION */}
                <div className="col-lg-4 col-md-12 col-sm-12" id="loginSection">
                    <img className="buksuImg" src={buksuLogo} alt="" />
                    <h1 className="welcomeTxt">Hello,</h1>
                    <span className="welcome">welcome to gembs!</span>
                    <div className="box">box</div>
                    <p className="sentence">Find the equipment you need right here.
                        <br /> Borrow wisely, return timely.</p>

                    {/* FORM */}
                    <div className="loginForm">
                        <form>
                            <label className="form-label" id="text1">Email</label>
                            <input type="text" id="inputEmail" className="form-control" placeholder="Enter your email" />
                            <label className="form-label">Password</label>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Enter your password" />

                            <Link to='/userpage'>
                                <button className="btn" id="loginBtn">Login</button>
                            </Link>
                            <h4>Or</h4>
                            <Link to='/userpage'>
                                <button className="btn" id="googleBtn">Sign in with Google</button>
                            </Link>

                        </form>
                    </div>
                </div>

                {/* IMG */}

                <div className="col-lg-8 col-md-12 col-sm-12" id="imgSection">
                    <img className="loginImg" src={loginImg} alt="" />
                </div>

            </div>
        </>
    )
}


export default Login