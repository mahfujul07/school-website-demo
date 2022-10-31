import React from "react";

const Header = () => {
  return (
    <header>
      <section
        id="topbar"
        className="mb-2 mb-lg-0 mb-sm-0 d-none d-lg-flex align-items-center pt-2 pb-2 bg-primary text-white topbar-transparent"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6   text-start">
              <span className="px-3">
                <i className="bi bi-phone"> </i> +1 5589 55488 55{" "}
              </span>
              <i className="bi bi-clock"> </i> Mon-Sat: 11:00 AM - 23:00 PM
            </div>
            <div className="col-md-6 text-end">
              <a href="" className="me-4 text-reset">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="bi bi-google"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <h2 className="fw-bold  mb-2 mb-lg-0 mb-sm-0">School</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="bi bi-list"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active cursor-pointer"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0 action-menu">
              <li className="nav-item">
                <a className="nav-link " href="login.html">
                  <i className="bi bi-person "></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
