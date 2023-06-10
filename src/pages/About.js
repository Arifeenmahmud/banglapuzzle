import React, { Fragment } from "react";
import Menu from "./Menu";
import Footer from "./Footer";


function About() {
    return (

        <Fragment>
            {/* <header>
                <nav class="navbar navbar-expand-sm navbar-light bg-light nav-custom pl-3 pr-3">
                    <div class="container">
                        <a href="../index.html" class="navbar-brand d-flex align-items-center">
                            <img src="../logo/short-logo.png" alt="" style={{
                                width: "200px"
                            }} />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#allMenuList">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="allMenuList">
                            <ul class="navbar-nav custom-nav-item">
                                <li><a class="nav-link active" href="../index.html">Home</a></li>
                                <li><a class="nav-link" href="#">Privacy Policy</a></li>
                                <li><a class="nav-link" href="#">Terms Condition</a></li>
                                <li><a class="nav-link" href="us.html">About Us</a></li>
                                <li><a class="nav-link" href="#">Contact Us</a></li>
                                <li><a class="nav-link" href="#">Advertise</a></li>
                            </ul>
                            <a href="../index.html" class="btn btn-danger ml-3">Join Now</a>
                        </div>
                    </div>
                </nav>
            </header> */}
            <Menu />


            <main class="main">
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8 subscribe-wrapper">
                                <h1>Contract Us </h1>
                                <p><span data-preserver-spaces="true">If you want to contact us: you can send an email
                                    to&nbsp;</span><a class="editor-rtfLink" href="mailto:contact.deshcareer@gmail.com"
                                        target="_blank" rel="noopener"><span
                                            data-preserver-spaces="true">contact.deshcareer@gmail.com</span></a></p>
                                <p><span data-preserver-spaces="true">If you want to meet with us, you can come to our office
                                    based on an appointment.&nbsp;</span></p>
                                <p><span data-preserver-spaces="true">Our Office address:</span></p>
                                <p><span data-preserver-spaces="true">House: 13/3,</span></p>
                                <p><span data-preserver-spaces="true">Road: 2,</span></p>
                                <p><span data-preserver-spaces="true">Shyamoly, Dhaka-1207</span></p>
                                <p><span data-preserver-spaces="true">+8801880811047</span></p>
                            </div>
                            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* <footer class="footer">
                <div class="container">
                    <div class="social-media">
                        <a href="https://www.facebook.com/deshcareer" class=""><i class="fab fa-facebook"></i></a>
                        <a href="https://www.youtube.com/channel/UCQB33GJ0C3pL3IpxpVFQS2Q" class=""><i
                            class="fab fa-youtube"></i></a>
                        <a href="https://www.linkedin.com/company/deshcareer" class=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <div class="footer-container">
                        <div class="footer-wrapper">
                            <div class="pb-2">
                                <a href="index.html"> <img src="logo/short-logo.png" alt="" style={{
                                    width: "200px"
                                }} /></a>
                            </div>
                            <p>Desh Career is a career-based newsletter in the Bengali language. This newsletter is published
                                weekly. It is published every Saturday at 12.00 PM.</p>
                        </div>
                        <div class="text-align-center footer-wrapper">
                            <h4>Privacy And Terms</h4>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms Condition</a>
                            <a href="#">FAQ</a>
                        </div>
                        <div class="text-align-right footer-wrapper">
                            <h4>Support</h4>
                            <a href="#">Affiliate Link</a>
                            <a href="#">Contact us</a>
                            <a href="#">Advertise with us</a>
                        </div>
                    </div>
                </div>
                <hr class="divider" />
                <div class="container">
                    <div class="webright d-flex justify-content-between align-items-center">
                        <div class="webright-left">
                            &copy; 2023 Newsletter E-mail Service: All rights reserved
                        </div>
                        <div class="webright-right">
                            <a href="#">Terms</a>
                            <a href="#">Cookie Policy</a>
                            <a href="#">Privacy</a>
                        </div>
                    </div>
                </div>
            </footer> */}

            <Footer />
        </Fragment>
        // <div>
        //     <h1>Index</h1>
        // </div>
    );
}

export default About;