import React, { useEffect, Component } from 'react'
import FeatherIcons from "feather-icons-react";
import { Link } from "react-router-dom";
import logoDark from "../../assets/images/logo-dark.png";
import T3dr from "../../assets/images/T3dr.png";
import logoLight from "../../assets/images/logo-light.png";
const Login = () => {

    useEffect(() => {
        if (document.body) document.body.classList.add("authentication-bg");

        return () => {
            if (document.body) document.body.classList.remove("authentication-bg");
        };
    }, []);

    return (
        <div className="account-pages my-5">
            <div className="container-fluid">
                <div className="row cl">
                    <div className="col-xl-3 ">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-lg-12 p-4">
                                        <div className="mx-auto">
                                            <Link to="/" className="logo  text-center">
                                                <span className="logo-lg">
                                                    <img src={logoDark} alt="" height="50" />
                                                    <img src={T3dr} alt="" height="50" className='mt-2' />
                                                </span>
                                            </Link>
                                        </div>
                                        <h6 className="h5 mb-0 mt-3">Welcome back!</h6>
                                        <p className="text-muted mt-1 mb-4">
                                            Enter your email address and password to access admin panel.
                                        </p>
                                        <form action="#" className="authentication-form">
                                            <div className="mb-3">
                                                <label className="form-label">Email Address</label>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <FeatherIcons icon={"mail"} className="icon-dual" />
                                                    </span>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        placeholder="hello@coderthemes.com"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <a
                                                    href="pages-recoverpw.html"
                                                    className="float-end text-muted text-unline-dashed ms-1"
                                                >
                                                    Forgot your password?
                                                </a>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <FeatherIcons icon={"lock"} className="icon-dual" />
                                                    </span>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="password"
                                                        placeholder="Enter your password"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <div className="form-check">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="checkbox-signin"
                                                        defaultChecked=""
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="checkbox-signin"
                                                    >
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mb-3 text-center d-grid">
                                                <button className="btn btn-primary" type="submit">
                                                    Log In
                                                </button>
                                            </div>
                                        </form>


                                    </div>
                                    {/* <div className="col-lg-6 d-none d-md-inline-block">
                                            <div className="auth-page-sidebar">
                                                <div className="overlay" />
                                                <div className="auth-user-testimonial">
                                                    <p className="fs-24 fw-bold text-white mb-1">
                                                        I simply love it!
                                                    </p>
                                                    <p className="lead">
                                                        "It's a elegent templete. I love it very much!"
                                                    </p>
                                                    <p>- Admin User</p>
                                                </div>
                                            </div>
                                        </div> */}
                                </div>
                            </div>{" "}
                            {/* end card-body */}
                        </div>
                        {/* end card */}
                        {/* <div className="row mt-3">
                                <div className="col-12 text-center">
                                    <p className="text-muted">
                                        Don't have an account?{" "}
                                        <a
                                            href="pages-register.html"
                                            className="text-primary fw-bold ms-1"
                                        >
                                            Sign Up
                                        </a>
                                    </p>
                                </div>{" "}

                            </div> */}
                        {/* end row */}
                    </div>{" "}
                    {/* end col */}
                </div>
                {/* end row */}
            </div>
            {/* end container */}
        </div>

    )
}


export default Login;