import React, { useState, useEffect, Component } from 'react'
import FeatherIcons from "feather-icons-react";
import { Link } from "react-router-dom";
import logoDark from "../../../assets/images/logo-dark.png";
import logosm from "../../../assets/images/logo-sm.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import T3dr from "../../../assets/images/T3dr.png";
import avatar from "../../../assets/images/users/avatar-1.jpg";
import FeatherIcon from "feather-icons-react";
import { Dropdown } from "react-bootstrap";
import classNames from "classnames";
import { commonData } from '../../../redux/actions';
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const info = useSelector((state) => {
        return state.commonData.common;
    })
    console.log(info);
    const toggleLeftSidebarWidth = () => {
        if (info.menu === 'condensed') {

            document.body.setAttribute("data-sidebar-size", "default");
            const common = {
                ...info,
                menu: 'default',
            }
            dispatch(commonData(common))
        }
        if (info.menu === 'default') {
            document.body.setAttribute("data-sidebar-size", "condensed");
            const common = {
                ...info,
                menu: 'condensed',
            }
            dispatch(commonData(common))
        }


    };
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const ProfileMenus = [
        {
            label: "My Account",
            icon: "user",
            redirectTo: "/",
        },
        {
            label: "Lock Screen",
            icon: "lock",
            redirectTo: "/auth/lock-screen",
        },
        {
            label: "Logout",
            icon: "log-out",
            redirectTo: "/auth/logout",
        },
    ];
    const otherOptions = [
        {
            id: 1,
            label: "New Projects",
            icon: "uil uil-bag",
        },
        {
            id: 2,
            label: "Create Users",
            icon: "uil uil-user-plus",
        },
        {
            id: 3,
            label: "Revenue Report",
            icon: "uil uil-chart-pie",
        },
        {
            id: 4,
            label: "Settings",
            icon: "uil uil-cog",
        },
        {
            id: 4,
            label: "Help & Support",
            icon: "uil uil-question-circle",
        },
    ];
    return (
        <>
            <div className="navbar-custom">
                <div className="container-fluid">
                    <ul className="list-unstyled topnav-menu float-end mb-0">
                        <li className="d-none d-lg-block">
                            <form className="app-search">
                                <div className="app-search-box dropdown">
                                    {/* <div className="input-group">
                                        <input
                                            type="search"
                                            className="form-control"
                                            placeholder="Search..."
                                            id="top-search"
                                        />
                                        <button className="btn input-group-text" type="submit">
                                            <i className="uil uil-search" />
                                        </button>
                                    </div> */}
                                    <div className="dropdown-menu dropdown-lg" id="search-dropdown">
                                        {/* item*/}
                                        <div className="dropdown-header noti-title">
                                            <h5 className="text-overflow mb-2">Found 05 results</h5>
                                        </div>
                                        {/* item*/}
                                        <a
                                            href="javascript:void(0);"
                                            className="dropdown-item notify-item"
                                        >
                                            <i className="uil uil-sliders-v-alt me-1" />
                                            <span>User profile settings</span>
                                        </a>
                                        {/* item*/}
                                        <a
                                            href="javascript:void(0);"
                                            className="dropdown-item notify-item"
                                        >
                                            <i className="uil uil-home-alt me-1" />
                                            <span>Analytics Report</span>
                                        </a>
                                        {/* item*/}
                                        <a
                                            href="javascript:void(0);"
                                            className="dropdown-item notify-item"
                                        >
                                            <i className="uil uil-life-ring me-1" />
                                            <span>How can I help you?</span>
                                        </a>
                                        {/* item*/}
                                        <div className="dropdown-header noti-title">
                                            <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                                        </div>
                                        <div className="notification-list">
                                            {/* item*/}
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item notify-item"
                                            >
                                                <div className="d-flex text-align-start">
                                                    <img
                                                        className="me-2 rounded-circle"
                                                        src="assets/images/users/avatar-2.jpg"
                                                        alt="Generic placeholder image"
                                                        height={32}
                                                    />
                                                    <div className="flex-grow-1">
                                                        <h5 className="m-0 fs-14">Shirley Miller</h5>
                                                        <span className="fs-12 mb-0">UI Designer</span>
                                                    </div>
                                                </div>
                                            </a>
                                            {/* item*/}
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item notify-item"
                                            >
                                                <div className="d-flex text-align-start">
                                                    <img
                                                        className="me-2 rounded-circle"
                                                        src="assets/images/users/avatar-5.jpg"
                                                        alt="Generic placeholder image"
                                                        height={32}
                                                    />
                                                    <div className="flex-grow-1">
                                                        <h5 className="m-0 fs-14">Timothy Moreno</h5>
                                                        <span className="fs-12 mb-0">Frontend Developer</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </li>
                        <li className="dropdown d-inline-block d-lg-none">
                            <a
                                className="nav-link dropdown-toggle arrow-none"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-search"
                                >
                                    <circle cx={11} cy={11} r={8} />
                                    <line x1={21} y1={21} x2="16.65" y2="16.65" />
                                </svg>
                            </a>
                            <div className="dropdown-menu dropdown-lg dropdown-menu-end p-0">
                                <form className="p-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search ..."
                                        aria-label="search here"
                                    />
                                </form>
                            </div>
                        </li>

                        <li className="dropdown d-none d-lg-inline-block topbar-dropdown">
                            <a
                                className="nav-link dropdown-toggle arrow-none"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                            >
                                <FontAwesomeIcon icon={faBullhorn} />
                            </a>
                            <div className="dropdown-menu dropdown-lg dropdown-menu-end p-0">
                                <div className="p-1">
                                    <div className="row g-0">
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/slack.png" alt="slack" />
                                                <span>Slack</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/github.png" alt="Github" />
                                                <span>GitHub</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/dribbble.png" alt="dribbble" />
                                                <span>Dribbble</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="dropdown notification-list topbar-dropdown">
                            <a
                                className="nav-link dropdown-toggle position-relative"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                            >
                                <FontAwesomeIcon icon={faBell} />
                                <span className="badge bg-danger rounded-circle noti-icon-badge">
                                    6
                                </span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-lg">
                                {/* item*/}
                                <div className="dropdown-item noti-title">
                                    <h5 className="m-0">
                                        <span className="float-end">
                                            <a href="" className="text-dark">
                                                <small>Clear All</small>
                                            </a>
                                        </span>
                                        Notification
                                    </h5>
                                </div>
                                <div className="noti-scroll" data-simplebar="init">
                                    <div className="simplebar-wrapper" style={{ margin: 0 }}>
                                        <div className="simplebar-height-auto-observer-wrapper">
                                            <div className="simplebar-height-auto-observer" />
                                        </div>
                                        <div className="simplebar-mask">
                                            <div
                                                className="simplebar-offset"
                                                style={{ right: 0, bottom: 0 }}
                                            >
                                                <div
                                                    className="simplebar-content-wrapper"
                                                    style={{ height: "auto", overflow: "hidden" }}
                                                >
                                                    <div className="simplebar-content" style={{ padding: 0 }}>
                                                        {/* item*/}
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="dropdown-item notify-item border-bottom"
                                                        >
                                                            <div className="notify-icon bg-primary">
                                                                <i className="uil uil-user-plus" />
                                                            </div>
                                                            <p className="notify-details">
                                                                New user registered.
                                                                <small className="text-muted">5 hours ago</small>
                                                            </p>
                                                        </a>
                                                        {/* item*/}
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="dropdown-item notify-item border-bottom"
                                                        >
                                                            <div className="notify-icon">
                                                                <img
                                                                    src="assets/images/users/avatar-1.jpg"
                                                                    className="img-fluid rounded-circle"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <p className="notify-details">Karen Robinson</p>
                                                            <p className="text-muted mb-0 user-msg">
                                                                <small>
                                                                    Wow ! this admin looks good and awesome design
                                                                </small>
                                                            </p>
                                                        </a>
                                                        {/* item*/}
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="dropdown-item notify-item border-bottom"
                                                        >
                                                            <div className="notify-icon">
                                                                <img
                                                                    src="assets/images/users/avatar-2.jpg"
                                                                    className="img-fluid rounded-circle"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <p className="notify-details">Cristina Pride</p>
                                                            <p className="text-muted mb-0 user-msg">
                                                                <small>
                                                                    Hi, How are you? What about our next meeting
                                                                </small>
                                                            </p>
                                                        </a>
                                                        {/* item*/}
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="dropdown-item notify-item border-bottom active"
                                                        >
                                                            <div className="notify-icon bg-success">
                                                                <i className="uil uil-comment-message" />{" "}
                                                            </div>
                                                            <p className="notify-details">
                                                                Jaclyn Brunswick commented on Dashboard
                                                                <small className="text-muted">1 min ago</small>
                                                            </p>
                                                        </a>
                                                        {/* item*/}
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="dropdown-item notify-item border-bottom"
                                                        >
                                                            <div className="notify-icon bg-danger">
                                                                <i className="uil uil-comment-message" />
                                                            </div>
                                                            <p className="notify-details">
                                                                Caleb Flakelar commented on Admin
                                                                <small className="text-muted">4 days ago</small>
                                                            </p>
                                                        </a>
                                                        {/* item*/}
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="dropdown-item notify-item"
                                                        >
                                                            <div className="notify-icon bg-primary">
                                                                <i className="uil uil-heart" />
                                                            </div>
                                                            <p className="notify-details">
                                                                Carlos Crouch liked <b>Admin</b>{" "}
                                                                <small className="text-muted">13 days ago</small>
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="simplebar-placeholder"
                                            style={{ width: 0, height: 0 }}
                                        />
                                    </div>
                                    <div
                                        className="simplebar-track simplebar-horizontal"
                                        style={{ visibility: "hidden" }}
                                    >
                                        <div
                                            className="simplebar-scrollbar"
                                            style={{ width: 0, display: "none" }}
                                        />
                                    </div>
                                    <div
                                        className="simplebar-track simplebar-vertical"
                                        style={{ visibility: "hidden" }}
                                    >
                                        <div
                                            className="simplebar-scrollbar"
                                            style={{ height: 0, display: "none" }}
                                        />
                                    </div>
                                </div>
                                {/* All*/}
                                <a
                                    href="javascript:void(0);"
                                    className="dropdown-item text-center text-primary notify-item notify-all"
                                >
                                    View all <i className="fe-arrow-right" />
                                </a>
                            </div>
                        </li>

                        <li className="dropdown notification-list topbar-dropdown">
                            <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
                                <Dropdown.Toggle
                                    id="dropdown-profile"
                                    as="a"
                                    onClick={toggleDropdown}
                                    className={classNames(
                                        "nav-link",
                                        "nav-user",
                                        "me-0",
                                        "cursor-pointer",
                                        { show: dropdownOpen }
                                    )}
                                >
                                    <img src={avatar} className="rounded-circle" alt="" />
                                    <span className="pro-user-name ms-2">
                                        T3DW <i className="uil uil-angle-down"></i>
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end profile-dropdown">
                                    <div onClick={toggleDropdown}>
                                        <div className="dropdown-header noti-title">
                                            <h6 className="text-overflow m-0">Welcome !</h6>
                                        </div>
                                        {(ProfileMenus || []).map((item, i) => {
                                            return (
                                                <React.Fragment key={i}>
                                                    {i === item.length - 1 && (
                                                        <div className="dropdown-divider"></div>
                                                    )}
                                                    <Link
                                                        to={item.redirectTo}
                                                        className="dropdown-item notify-item"
                                                        key={i + "-profile-menu"}
                                                    >
                                                        <FeatherIcon
                                                            icon={item.icon}
                                                            className="icon-dual icon-xs me-1"
                                                        />
                                                        <span>{item.label}</span>
                                                    </Link>
                                                </React.Fragment>
                                            );
                                        })}
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>


                    </ul>
                    {/* LOGO */}
                    <div className="logo-box">
                        <a href="index.html" className="logo logo-dark">
                            <span className="logo-sm">
                                <img src={logosm} alt="" height={24} />
                                {/* <span class="logo-lg-text-light">Shreyu</span> */}
                            </span>
                            <span className="logo-lg">
                                <img src={logoDark} alt="" height={50} />
                                {/* <span class="logo-lg-text-light">S</span> */}
                            </span>
                        </a>
                        <a href="index.html" className="logo logo-light">
                            <span className="logo-sm">
                                <img src={logosm} alt="" height={24} />
                            </span>
                            <span className="logo-lg">
                                <img src={logoDark} alt="" height={24} />
                            </span>
                        </a>
                    </div>
                    <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
                        <li onClick={toggleLeftSidebarWidth}>
                            <button className="button-menu-mobile">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu"
                                >
                                    <line x1={3} y1={12} x2={21} y2={12} />
                                    <line x1={3} y1={6} x2={21} y2={6} />
                                    <line x1={3} y1={18} x2={21} y2={18} />
                                </svg>
                            </button>
                        </li>
                        <li>
                            {/* Mobile menu toggle (Horizontal Layout)*/}
                            <a
                                className="navbar-toggle nav-link"
                                data-bs-toggle="collapse"
                                data-bs-target="#topnav-menu-content"
                            >
                                <div className="lines">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </a>
                            {/* End mobile menu toggle*/}
                        </li>
                        <li className="dropdown d-none d-xl-block">
                            <img src={T3dr} alt="" height={50} style={{ margin: '15px 0px 0px' }} />

                        </li>
                        <li className="dropdown d-none d-xl-block">
                            <a
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                            >
                                Marketing Reimbusement
                                <i className="uil uil-angle-down" />
                            </a>
                            {/* <div className="dropdown-menu" style={{}}>

                                <a href="javascript:void(0);" className="dropdown-item">
                                    <i className="uil uil-bag me-1" />
                                    <span>New Projects</span>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item">
                                    <i className="uil uil-user-plus me-1" />
                                    <span>Create Users</span>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item">
                                    <i className="uil uil-chart-pie me-1" />
                                    <span>Revenue Report</span>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item">
                                    <i className="uil uil-cog me-1" />
                                    <span>Settings</span>
                                </a>
                                <div className="dropdown-divider" />

                                <a href="javascript:void(0);" className="dropdown-item">
                                    <i className="uil uil-question-circle me-1" />
                                    <span>Help &amp; Support</span>
                                </a>
                            </div> */}
                        </li>
                        <li className="dropdown d-none d-xl-block">
                            <a
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                            >
                                Discounts
                                <i className="uil uil-angle-down" />
                            </a>
                        </li>
                        <li className="dropdown d-none d-xl-block">
                            <a
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                            >
                                Admin
                                <i className="uil uil-angle-down" />
                            </a>
                        </li>


                    </ul>
                    <div className="clearfix" />
                </div>
            </div >

            {/* end Topbar */}
        </>

    )
}


export default Header;