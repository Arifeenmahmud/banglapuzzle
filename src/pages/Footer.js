import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <Fragment>
            <footer className="footer">
                <div className="container">
                    <div className="social-media">
                        <a href="https://www.facebook.com/deshcareer" className=""><i className="fab fa-facebook"></i></a>
                        <a href="https://www.youtube.com/channel/UCQB33GJ0C3pL3IpxpVFQS2Q" className=""><i
                            className="fab fa-youtube"></i></a>
                        <a href="https://www.linkedin.com/company/deshcareer" className=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="footer-container">
                        <div className="footer-wrapper">
                            <div className="pb-2">
                                <a href="index.html"> <img src="https://deshcareer.com/logo/short-logo.png" alt="" style={{
                                    width: "200px"
                                }} /></a>
                            </div>
                            <p>Desh Career is a career-based newsletter in the Bengali language. This newsletter is published
                                weekly. It is published every Saturday at 12.00 PM.</p>
                        </div>
                        <div className="text-align-center footer-wrapper">
                            <h4>Privacy And Terms</h4>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms Condition</a>
                            <a href="#">FAQ</a>
                        </div>
                        <div className="text-align-right footer-wrapper">
                            <h4>Support</h4>
                            <a href="#">Affiliate Link</a>
                            <a href="#">Contact us</a>
                            <a href="#">Advertise with us</a>
                        </div>
                    </div>
                </div>
                <hr className="divider" />
                <div className="container">
                    <div className="webright d-flex justify-content-between align-items-center">
                        <div className="webright-left">
                            &copy; 2023 Newsletter E-mail Service: All rights reserved
                        </div>
                        <div className="webright-right">
                            <a href="#">Terms</a>
                            <a href="#">Cookie Policy</a>
                            <a href="#">Privacy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default Menu;