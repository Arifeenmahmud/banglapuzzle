import React, { Fragment } from "react";
import Menu from "./Menu";


function Index() {
    return (

        <Fragment>
            <Menu />


            <main className="main" />
            <section />
            <div className="container" />
            <div className="row" />
            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 subscribe-wrapper" />
            <h1>Get Smarter about your career</h1>
            <p>Get the <strong>5-minute newsletter</strong> keeping about smart career</p>
            <div className="subscription" />
            <form action="https://deshcareer.com/subscribe" method="post" />
            <input type="hidden" name="_token" value="V0Xy4hj8mCXOAAv5YuD7VLpVce43IBqxn9coroOi" />
            <input type="hidden" name="used_referral_code" value="" />
            <div className="input-area d-flex align-items-center">
                <span className="mail-icon"><i className="far fa-envelope"></i></span>
                <input type="email" name="email" placeholder="Your E-mail address" required />
                <button type="submit" className="btn btn-danger">Join Free</button>
            </div>
            <form />
            <p className="mt-4" style={{ lineHeight: "1.5" }}>
                We're committed to your privacy. DashCareer uses the information you provide to
                contact you about our relevant content and services.
                You may unsubscribe from these communications at any time. For more information,
                check out our Privacy Policy.
            </p>
            <div />
            <div />
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4"></div>
            <div>
            </div>
            <section />
            <main />

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
        // <div>
        //     <h1>Index</h1>
        // </div>
    );
}

export default Index;