import React, { useEffect, Component } from 'react'
import FeatherIcons from "feather-icons-react";
import { Link } from "react-router-dom";
import logoDark from "../../../assets/images/logo-dark.png";
import T3dr from "../../../assets/images/T3dr.png";

const Sidebar = () => {

    return (
        <><div className="left-side-menu">
            <div className="h-100 menuitem-active" data-simplebar="init">
                <div className="simplebar-wrapper" style={{ margin: 0 }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer" />
                    </div>
                    <div className="simplebar-mask">
                        <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                            <div
                                className="simplebar-content-wrapper"
                                style={{ height: "100%", overflow: "hidden scroll" }}
                            >
                                <div className="simplebar-content" style={{ padding: 0 }}>
                                    {/* User box */}
                                    <div className="user-box text-center">
                                        <img
                                            src="assets/images/users/avatar-1.jpg"
                                            alt="user-img"
                                            title="Mat Helme"
                                            className="rounded-circle avatar-md"
                                        />
                                        <div className="dropdown">
                                            <a
                                                href="javascript: void(0);"
                                                className="text-dark dropdown-toggle h5 mt-2 mb-1 d-block"
                                                data-bs-toggle="dropdown"
                                            >
                                                Nik Patel
                                            </a>
                                            <div className="dropdown-menu user-pro-dropdown">
                                                <a
                                                    href="pages-profile.html"
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
                                                        className="feather feather-user icon-dual icon-xs me-1"
                                                    >
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                        <circle cx={12} cy={7} r={4} />
                                                    </svg>
                                                    <span>My Account</span>
                                                </a>
                                                <a
                                                    href="javascript:void(0);"
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
                                                        className="feather feather-settings icon-dual icon-xs me-1"
                                                    >
                                                        <circle cx={12} cy={12} r={3} />
                                                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                                    </svg>
                                                    <span>Settings</span>
                                                </a>
                                                <a
                                                    href="javascript:void(0);"
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
                                                        className="feather feather-help-circle icon-dual icon-xs me-1"
                                                    >
                                                        <circle cx={12} cy={12} r={10} />
                                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                                        <line x1={12} y1={17} x2="12.01" y2={17} />
                                                    </svg>
                                                    <span>Support</span>
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
                                                        <rect
                                                            x={3}
                                                            y={11}
                                                            width={18}
                                                            height={11}
                                                            rx={2}
                                                            ry={2}
                                                        />
                                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                                    </svg>
                                                    <span>Lock Screen</span>
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a
                                                    href="javascript:void(0);"
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
                                                        className="feather feather-log-out icon-dual icon-xs me-1"
                                                    >
                                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                                        <polyline points="16 17 21 12 16 7" />
                                                        <line x1={21} y1={12} x2={9} y2={12} />
                                                    </svg>
                                                    <span>Logout</span>
                                                </a>
                                            </div>
                                        </div>
                                        <p className="text-muted">Admin Head</p>
                                    </div>
                                    {/*- Sidemenu */}
                                    <div id="sidebar-menu">
                                        <ul id="side-menu">
                                            {/* <li class="menu-title">Navigation</li> */}
                                            <li className="menuitem-active">
                                                <Link to="/dashboard">



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
                                                        className="feather feather-home"
                                                    >
                                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                        <polyline points="9 22 9 12 15 12 15 22" />
                                                    </svg>
                                                    <span> Dashboards </span>
                                                    {/* <span class="menu-arrow"></span> */}
                                                </Link>
                                            </li>
                                            {/*
                                            <li>
                                                <a href="apps-calendar.html">
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
                                                        className="feather feather-calendar"
                                                    >
                                                        <rect
                                                            x={3}
                                                            y={4}
                                                            width={18}
                                                            height={18}
                                                            rx={2}
                                                            ry={2}
                                                        />
                                                        <line x1={16} y1={2} x2={16} y2={6} />
                                                        <line x1={8} y1={2} x2={8} y2={6} />
                                                        <line x1={3} y1={10} x2={21} y2={10} />
                                                    </svg>
                                                    <span> Calendar </span>
                                                </a>
                                            </li> */}
                                            {/* <li>
                                                <a href="apps-chat.html">
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
                                                        className="feather feather-message-square"
                                                    >
                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                    </svg>
                                                    <span> Chat </span>
                                                </a>
                                            </li> */}
                                            {/* <li>
                                                <a href="#sidebarEmail" data-bs-toggle="collapse">
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
                                                        className="feather feather-mail"
                                                    >
                                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                        <polyline points="22,6 12,13 2,6" />
                                                    </svg>
                                                    <span> Email </span>
                                                    <span className="menu-arrow" />
                                                </a>
                                                <div className="collapse" id="sidebarEmail">
                                                    <ul className="nav-second-level">
                                                        <li>
                                                            <a href="email-inbox.html">Inbox</a>
                                                        </li>
                                                        <li>
                                                            <a href="email-read.html">Read Email</a>
                                                        </li>
                                                        <li>
                                                            <a href="email-compose.html">Compose Email</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li> */}
                                            {/* <li>
                                                <a href="#sidebarProjects" data-bs-toggle="collapse">
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
                                                        className="feather feather-briefcase"
                                                    >
                                                        <rect
                                                            x={2}
                                                            y={7}
                                                            width={20}
                                                            height={14}
                                                            rx={2}
                                                            ry={2}
                                                        />
                                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                                    </svg>
                                                    <span> Projects </span>
                                                    <span className="menu-arrow" />
                                                </a>
                                                <div className="collapse" id="sidebarProjects">
                                                    <ul className="nav-second-level">
                                                        <li>
                                                            <a href="project-list.html">List</a>
                                                        </li>
                                                        <li>
                                                            <a href="project-detail.html">Detail</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li> */}
                                            {/* <li>
                                                <a href="#sidebarTasks" data-bs-toggle="collapse">
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
                                                        className="feather feather-clipboard"
                                                    >
                                                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                                        <rect x={8} y={2} width={8} height={4} rx={1} ry={1} />
                                                    </svg>
                                                    <span> Tasks </span>
                                                    <span className="menu-arrow" />
                                                </a>
                                                <div className="collapse" id="sidebarTasks">
                                                    <ul className="nav-second-level">
                                                        <li>
                                                            <a href="task-list.html">List</a>
                                                        </li>
                                                        <li>
                                                            <a href="task-board.html">Kanban Board</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li> */}
                                            {/* <li>
                                                <a href="apps-file-manager.html">
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
                                                        className="feather feather-file-plus"
                                                    >
                                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                        <polyline points="14 2 14 8 20 8" />
                                                        <line x1={12} y1={18} x2={12} y2={12} />
                                                        <line x1={9} y1={15} x2={15} y2={15} />
                                                    </svg>
                                                    <span> File Manager </span>
                                                </a>
                                            </li> */}
                                            {/* <li className="menu-title mt-2">Custom</li> */}
                                            {/* <li>
                                                <a href="#sidebarExpages" data-bs-toggle="collapse">
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
                                                        className="feather feather-file-text"
                                                    >
                                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                        <polyline points="14 2 14 8 20 8" />
                                                        <line x1={16} y1={13} x2={8} y2={13} />
                                                        <line x1={16} y1={17} x2={8} y2={17} />
                                                        <polyline points="10 9 9 9 8 9" />
                                                    </svg>
                                                    <span> Pages </span>
                                                    <span className="menu-arrow" />
                                                </a>
                                                <div className="collapse" id="sidebarExpages">
                                                    <ul className="nav-second-level">
                                                        <li>
                                                            <a href="pages-starter.html">Starter</a>
                                                        </li>
                                                        <li>
                                                            <a href="pages-profile.html">Profile</a>
                                                        </li>
                                                        <li>
                                                            <a href="pages-activity.html">Activity</a>
                                                        </li>
                                                        <li>
                                                            <a href="pages-invoice.html">Invoice</a>
                                                        </li>
                                                        <li>
                                                            <a href="pages-pricing.html">Pricing</a>
                                                        </li>
                                                        <li>
                                                            <a href="pages-maintenance.html">Maintenance</a>
                                                        </li>
                                                        <li>
                                                            <a href="pages-login.html">Login</a>
                                                        </li>
                                                        <li>
                                                            <a href="pages-register.html">Register</a>
                                                        </li>
                                                        <li>
                                                            <a href="pages-logout.html">Logout</a>
                                                        </li>
                                                        <li>
                                                            <a href="pages-recoverpw.html">Recover Password</a>
                                                        </li>
                                                        <li>
                                                            <a href="pages-lock-screen.html">Lock Screen</a>
                                                        </li>
                                                        <li>
                                                            <a href="pages-confirm-mail.html">Confirm</a>
                                                        </li>
                                                        <li>
                                                            <a href="pages-404.html">Error 404</a>
                                                        </li>
                                                        <li>
                                                            <a href="pages-500.html">Error 500</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li> */}
                                            {/* <li>
                                                <a href="#sidebarLayouts" data-bs-toggle="collapse">
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
                                                        className="feather feather-layout"
                                                    >
                                                        <rect
                                                            x={3}
                                                            y={3}
                                                            width={18}
                                                            height={18}
                                                            rx={2}
                                                            ry={2}
                                                        />
                                                        <line x1={3} y1={9} x2={21} y2={9} />
                                                        <line x1={9} y1={21} x2={9} y2={9} />
                                                    </svg>
                                                    <span className="badge bg-danger float-end">New</span>
                                                    <span> Layouts </span>
                                                </a>
                                                <div className="collapse" id="sidebarLayouts">
                                                    <ul className="nav-second-level">
                                                        <li>
                                                            <a href="layouts-horizontal.html">Horizontal</a>
                                                        </li>
                                                        <li>
                                                            <a href="layouts-detached.html">Detached</a>
                                                        </li>
                                                        <li>
                                                            <a href="layouts-two-column.html">Two Column Menu</a>
                                                        </li>
                                                        <li>
                                                            <a href="layouts-preloader.html">Preloader</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li> */}
                                            {/* <li className="menu-title mt-2">Components</li>
                                            <li>
                                                <a href="ui-elements.html">
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
                                                        className="feather feather-package"
                                                    >
                                                        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
                                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                                        <line x1={12} y1="22.08" x2={12} y2={12} />
                                                    </svg>
                                                    <span> UI Elements </span>
                                                </a>
                                            </li> */}
                                            {/* <li>
                                                <a href="widgets.html">
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
                                                        className="feather feather-gift"
                                                    >
                                                        <polyline points="20 12 20 22 4 22 4 12" />
                                                        <rect x={2} y={7} width={20} height={5} />
                                                        <line x1={12} y1={22} x2={12} y2={7} />
                                                        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                                                        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                                                    </svg>
                                                    <span> Widgets </span>
                                                </a>
                                            </li> */}
                                            {/* <li>
                                                <a href="#sidebarIcons" data-bs-toggle="collapse">
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
                                                        className="feather feather-cpu"
                                                    >
                                                        <rect
                                                            x={4}
                                                            y={4}
                                                            width={16}
                                                            height={16}
                                                            rx={2}
                                                            ry={2}
                                                        />
                                                        <rect x={9} y={9} width={6} height={6} />
                                                        <line x1={9} y1={1} x2={9} y2={4} />
                                                        <line x1={15} y1={1} x2={15} y2={4} />
                                                        <line x1={9} y1={20} x2={9} y2={23} />
                                                        <line x1={15} y1={20} x2={15} y2={23} />
                                                        <line x1={20} y1={9} x2={23} y2={9} />
                                                        <line x1={20} y1={14} x2={23} y2={14} />
                                                        <line x1={1} y1={9} x2={4} y2={9} />
                                                        <line x1={1} y1={14} x2={4} y2={14} />
                                                    </svg>
                                                    <span> Icons </span>
                                                    <span className="menu-arrow" />
                                                </a>
                                                <div className="collapse" id="sidebarIcons">
                                                    <ul className="nav-second-level">
                                                        <li>
                                                            <a href="icons-unicons.html">Unicons</a>
                                                        </li>
                                                        <li>
                                                            <a href="icons-feather.html">Feather</a>
                                                        </li>
                                                        <li>
                                                            <a href="icons-bootstrap.html">Bootstrap</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li> */}
                                            {/* <li>
                                                <a href="#sidebarForms" data-bs-toggle="collapse">
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
                                                        className="feather feather-bookmark"
                                                    >
                                                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                                    </svg>
                                                    <span> Forms </span>
                                                    <span className="menu-arrow" />
                                                </a>
                                                <div className="collapse" id="sidebarForms">
                                                    <ul className="nav-second-level">
                                                        <li>
                                                            <a href="forms-basic.html">Basic Elements</a>
                                                        </li>
                                                        <li>
                                                            <a href="forms-advanced.html">Advanced</a>
                                                        </li>
                                                        <li>
                                                            <a href="forms-validation.html">Validation</a>
                                                        </li>
                                                        <li>
                                                            <a href="forms-wizard.html">Wizard</a>
                                                        </li>
                                                        <li>
                                                            <a href="forms-editor.html">Editor</a>
                                                        </li>
                                                        <li>
                                                            <a href="forms-file-uploads.html">File Uploads</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li> */}
                                            <li>
                                                <Link to="/submitted-plans">
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
                                                        className="feather feather-bar-chart-2"
                                                    >
                                                        <line x1={18} y1={20} x2={18} y2={10} />
                                                        <line x1={12} y1={20} x2={12} y2={4} />
                                                        <line x1={6} y1={20} x2={6} y2={14} />
                                                    </svg>
                                                    <span> Submitted Plans/Claims List </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/submit-new-plan">
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
                                                        className="feather feather-bar-chart-2"
                                                    >
                                                        <line x1={18} y1={20} x2={18} y2={10} />
                                                        <line x1={12} y1={20} x2={12} y2={4} />
                                                        <line x1={6} y1={20} x2={6} y2={14} />
                                                    </svg>
                                                    <span> Submit New Plan </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/dashboard">
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
                                                        className="feather feather-bar-chart-2"
                                                    >
                                                        <line x1={18} y1={20} x2={18} y2={10} />
                                                        <line x1={12} y1={20} x2={12} y2={4} />
                                                        <line x1={6} y1={20} x2={6} y2={14} />
                                                    </svg>
                                                    <span> FAQ'S </span>
                                                </Link>
                                            </li>


                                            <li>
                                                <Link to="/dashboard">
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
                                                        className="feather feather-bar-chart-2"
                                                    >
                                                        <line x1={18} y1={20} x2={18} y2={10} />
                                                        <line x1={12} y1={20} x2={12} y2={4} />
                                                        <line x1={6} y1={20} x2={6} y2={14} />
                                                    </svg>
                                                    <span> Support </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/alerts">
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
                                                        className="feather feather-bar-chart-2"
                                                    >
                                                        <line x1={18} y1={20} x2={18} y2={10} />
                                                        <line x1={12} y1={20} x2={12} y2={4} />
                                                        <line x1={6} y1={20} x2={6} y2={14} />
                                                    </svg>
                                                    <span> Alerts </span>
                                                </Link>
                                            </li>
                                            {/* <li>
                                                <a href="#sidebarTables" data-bs-toggle="collapse">
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
                                                    <span> Tables </span>
                                                    <span className="menu-arrow" />
                                                </a>
                                                <div className="collapse" id="sidebarTables">
                                                    <ul className="nav-second-level">
                                                        <li>
                                                            <a href="tables-basic.html">Basic</a>
                                                        </li>
                                                        <li>
                                                            <a href="tables-datatables.html">Data Tables</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li> */}
                                            {/* <li>
                                                <a href="#sidebarMaps" data-bs-toggle="collapse">
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
                                                        className="feather feather-map"
                                                    >
                                                        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                                                        <line x1={8} y1={2} x2={8} y2={18} />
                                                        <line x1={16} y1={6} x2={16} y2={22} />
                                                    </svg>
                                                    <span> Maps </span>
                                                    <span className="menu-arrow" />
                                                </a>
                                                <div className="collapse" id="sidebarMaps">
                                                    <ul className="nav-second-level">
                                                        <li>
                                                            <a href="maps-google.html">Google Maps</a>
                                                        </li>
                                                        <li>
                                                            <a href="maps-vector.html">Vector Maps</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li> */}
                                            {/* <li>
                                                <a href="#sidebarMultilevel" data-bs-toggle="collapse">
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
                                                        className="feather feather-share-2"
                                                    >
                                                        <circle cx={18} cy={5} r={3} />
                                                        <circle cx={6} cy={12} r={3} />
                                                        <circle cx={18} cy={19} r={3} />
                                                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                                    </svg>
                                                    <span> Multi Level </span>
                                                    <span className="menu-arrow" />
                                                </a>
                                                <div className="collapse" id="sidebarMultilevel">
                                                    <ul className="nav-second-level">
                                                        <li>
                                                            <a
                                                                href="#sidebarMultilevel2"
                                                                data-bs-toggle="collapse"
                                                            >
                                                                Second Level <span className="menu-arrow" />
                                                            </a>
                                                            <div className="collapse" id="sidebarMultilevel2">
                                                                <ul className="nav-second-level">
                                                                    <li>
                                                                        <a href="javascript: void(0);">Item 1</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript: void(0);">Item 2</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#sidebarMultilevel3"
                                                                data-bs-toggle="collapse"
                                                            >
                                                                Third Level <span className="menu-arrow" />
                                                            </a>
                                                            <div className="collapse" id="sidebarMultilevel3">
                                                                <ul className="nav-second-level">
                                                                    <li>
                                                                        <a href="javascript: void(0);">Item 1</a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="#sidebarMultilevel4"
                                                                            data-bs-toggle="collapse"
                                                                        >
                                                                            Item 2 <span className="menu-arrow" />
                                                                        </a>
                                                                        <div
                                                                            className="collapse"
                                                                            id="sidebarMultilevel4"
                                                                        >
                                                                            <ul className="nav-second-level">
                                                                                <li>
                                                                                    <a href="javascript: void(0);">Item 1</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript: void(0);">Item 2</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li> */}
                                        </ul>
                                    </div>
                                    {/* End Sidebar */}
                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="simplebar-placeholder"
                        style={{ width: "auto", height: 1001 }}
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
                    style={{ visibility: "visible" }}
                >
                    <div
                        className="simplebar-scrollbar"
                        style={{
                            height: 39,
                            transform: "translate3d(0px, 0px, 0px)",
                            display: "block"
                        }}
                    />
                </div>
            </div>
            {/* Sidebar -left */}
        </div></>

    )
}


export default Sidebar;