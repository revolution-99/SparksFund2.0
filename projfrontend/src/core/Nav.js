import React from "react";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#section1">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              About us
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Blogs
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
              Join Us
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
              Contact us
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active ml-auto">
            <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
              Login
            </a>
          </li>
          <li className="nav-item active ml-auto">
            <a class="nav-link" tabindex="-1" aria-disabled="true">
              |
            </a>
          </li>
          <li className="nav-item active my-2 my-lg-0">
            <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
              Signup
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
