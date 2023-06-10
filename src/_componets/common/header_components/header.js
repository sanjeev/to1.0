import React, { useEffect, Component } from 'react'
import FeatherIcons from "feather-icons-react";
import { Link } from "react-router-dom";
import logoDark from "../../../assets/images/logo-dark.png";
import logosm from "../../../assets/images/logo-sm.png";

import T3dr from "../../../assets/images/T3dr.png";

const Header = () => {
    const toggleLeftSidebarWidth = () => {
        document.body.setAttribute("data-sidebar-size", "condensed");

    };

    return (
        <>
            <div className="navbar-custom">
                <div className="container-fluid">
                    <ul className="list-unstyled topnav-menu float-end mb-0">
                        <li className="d-none d-lg-block">
                            <form className="app-search">
                                <div className="app-search-box dropdown">
                                    <div className="input-group">
                                        <input
                                            type="search"
                                            className="form-control"
                                            placeholder="Search..."
                                            id="top-search"
                                        />
                                        <button className="btn input-group-text" type="submit">
                                            <i className="uil uil-search" />
                                        </button>
                                    </div>
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
                        <li className="dropdown d-none d-lg-inline-block">
                            <a
                                className="nav-link dropdown-toggle arrow-none"
                                data-toggle="fullscreen"
                                href="#"
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
                                    className="feather feather-maximize"
                                >
                                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                                </svg>
                            </a>
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
                                    className="feather feather-grid"
                                >
                                    <rect x={3} y={3} width={7} height={7} />
                                    <rect x={14} y={3} width={7} height={7} />
                                    <rect x={14} y={14} width={7} height={7} />
                                    <rect x={3} y={14} width={7} height={7} />
                                </svg>
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
                        <li className="dropdown d-none d-lg-inline-block topbar-dropdown">
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
                                    className="feather feather-globe"
                                >
                                    <circle cx={12} cy={12} r={10} />
                                    <line x1={2} y1={12} x2={22} y2={12} />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item">
                                    <img
                                        src="assets/images/flags/us.jpg"
                                        alt="user-image"
                                        className="me-1"
                                        height={12}
                                    />
                                    <span className="align-middle">English</span>
                                </a>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item">
                                    <img
                                        src="assets/images/flags/germany.jpg"
                                        alt="user-image"
                                        className="me-1"
                                        height={12}
                                    />
                                    <span className="align-middle">German</span>
                                </a>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item">
                                    <img
                                        src="assets/images/flags/italy.jpg"
                                        alt="user-image"
                                        className="me-1"
                                        height={12}
                                    />
                                    <span className="align-middle">Italian</span>
                                </a>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item">
                                    <img
                                        src="assets/images/flags/spain.jpg"
                                        alt="user-image"
                                        className="me-1"
                                        height={12}
                                    />
                                    <span className="align-middle">Spanish</span>
                                </a>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item">
                                    <img
                                        src="assets/images/flags/russia.jpg"
                                        alt="user-image"
                                        className="me-1"
                                        height={12}
                                    />
                                    <span className="align-middle">Russian</span>
                                </a>
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
                                    className="feather feather-bell"
                                >
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                </svg>
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
                            <a
                                className="nav-link dropdown-toggle nav-user me-0"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                            >
                                <img
                                    src="assets/images/users/avatar-1.jpg"
                                    alt="user-image"
                                    className="rounded-circle"
                                />
                                <span className="pro-user-name ms-1">
                                    Nik Patel <i className="uil uil-angle-down" />
                                </span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
                                {/* item*/}
                                <div className="dropdown-header noti-title">
                                    <h6 className="text-overflow m-0">Welcome !</h6>
                                </div>
                                <a href="pages-profile.html" className="dropdown-item notify-item">
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
                                        className="feather feather-user icon-dual icon-xs me-1"
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg>
                                    <span>My Account</span>
                                </a>
                                <a
                                    href="pages-lock-screen.html"
                                    className="dropdown-item notify-item"
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
                                        className="feather feather-lock icon-dual icon-xs me-1"
                                    >
                                        <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                    <span>Lock Screen</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="pages-logout.html" className="dropdown-item notify-item">
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
                                        className="feather feather-log-out icon-dual icon-xs me-1"
                                    >
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                        <polyline points="16 17 21 12 16 7" />
                                        <line x1={21} y1={12} x2={9} y2={12} />
                                    </svg>
                                    <span>Logout</span>
                                </a>
                            </div>
                        </li>
                        <li className="dropdown notification-list">
                            <a href="javascript:void(0);" className="nav-link right-bar-toggle">
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
                                    className="feather feather-settings"
                                >
                                    <circle cx={12} cy={12} r={3} />
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                </svg>
                            </a>
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
                    </ul>
                    <div className="clearfix" />
                </div>
            </div>

            {/* end Topbar */}
        </>

    )
}


export default Header;