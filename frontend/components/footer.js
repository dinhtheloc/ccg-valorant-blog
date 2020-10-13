

import React from "react";


const Footer = () => {
    return (
        <>
            {/* shape */}
            <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-gray-200">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"></path></svg>
                </div>
            </div>
            <footer className="py-4 py-md-8 bg-gray-200">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <img src="/logo.svg" className="navbar-brand-img" alt="logo" />
                        </div>

                        {/* <div className="col-12 text-center">
                            <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="#!" className="text-decoration-none">
                                        <img src="https://landkit.goodthemes.co/assets/img/icons/social/instagram.svg" className="list-social-icon" alt="..." />
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="#!" className="text-decoration-none">
                                        <img src="https://landkit.goodthemes.co/assets/img/icons/social/facebook.svg" className="list-social-icon" alt="..." />
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="#!" className="text-decoration-none">
                                        <img src="https://landkit.goodthemes.co/assets/img/icons/social/twitter.svg" className="list-social-icon" alt="..." />
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item">
                                    <a href="#!" className="text-decoration-none">
                                        <img src="https://landkit.goodthemes.co/assets/img/icons/social/pinterest.svg" className="list-social-icon" alt="..." />
                                    </a>
                                </li>
                            </ul>
                        </div> */}

                    </div> {/* / .row */}
                </div> {/* / .container */}
            </footer>
        </>
    );
};

export default Footer;
