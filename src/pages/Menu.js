import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <Fragment>
            <header>
                <nav className="navbar navbar-expand-sm navbar-light bg-light nav-custom pl-3 pr-3">
                    <div className="container">
                        <Link to="/" className="navbar-brand d-flex align-items-center">

                            <img src="https://deshcareer.com/logo/short-logo.png" alt="" style={{
                                width: "200px"
                            }} />

                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#allMenuList">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="allMenuList">
                            <ul className="navbar-nav custom-nav-item">
                                <li><Link className="nav-link active" to="/">Home</Link></li>
                                {/* <li><a className="nav-link active" href="index.html">Home</a></li> */}
                                <li><a className="nav-link" href="#">Privacy Policy</a></li>
                                <li><a className="nav-link" href="#">Terms Condition</a></li>
                                <li><Link className="nav-link" to="/about">About Us</Link></li>
                                {/* <li><a className="nav-link" href="contact/us.html">About Us</a></li> */}
                                <li><a className="nav-link" href="#">Contact Us</a></li>
                                <li><a className="nav-link" href="#">Advertise</a></li>
                            </ul>

                            <Link to="/" className="btn btn-danger ml-3">Join Now</Link>
                            {/* <a href="index.html" className="btn btn-danger ml-3">Join Now</a> */}
                        </div>
                    </div>
                </nav>
            </header>

        </Fragment>
    );
}

export default Menu;