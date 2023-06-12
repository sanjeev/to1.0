import React, { useEffect, Component } from 'react'
import FeatherIcons from "feather-icons-react";
import { Link } from "react-router-dom";
import logoDark from "../../../assets/images/logo-dark.png";
import T3dr from "../../../assets/images/T3dr.png";

const Footer = () => {


    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        2000-2023 ©  Toyota Kirloskar Motor. All Rights Reserved.

                    </div>
                    <div className="col-md-6">
                        <div className="text-md-end footer-links d-none d-sm-block">
                            <a href="javascript:void(0);">About Us</a>
                            <a href="javascript:void(0);">Help</a>
                            <a href="javascript:void(0);">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}


export default Footer;