import React from "react";

import "../Css/navbar.css";

import logo from "../images/logo.svg";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white ">
        <div className="container  ">
          <img src={logo} className="navbar-brand " href="#" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a
                  className="nav-link active text-uppercase "
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">
                  Employers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">
                  Therapist
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">
                  Help
                </a>
              </li>
            </ul>
            <div className="btns">
              <button
                type="button"
                className="btn btn-light btns-sign text-uppercase "
              >
                Sign up
              </button>
              <button
                type="button"
                className="btn btn-primary btns-login text-uppercase ml-2"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
