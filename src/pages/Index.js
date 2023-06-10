import React, { Fragment } from "react";
import Menu from "./Menu";
import Footer from "./Footer";


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



            <Footer />

        </Fragment>
        // <div>
        //     <h1>Index</h1>
        // </div>
    );
}

export default Index;