import React from 'react';

const Footer = () => {
    const publicUrl = import.meta.env.VITE_BASE_URL;
    return (
        <>
             <div className="copyright text-center">
                <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
                <div className="d-flex flex-column align-items-center align-items-lg-start">
                    <div>
                    © Copyright <strong><span>MyWebsite</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
                <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
                </div>
            </div>

            {/* Scroll Top */}
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>

            {/* Preloader */}
            {/* <div id="preloader"></div> */}

            {/* Vendor JS Files */}
            <script src={`${publicUrl}/assets/vendor/bootstrap/js/bootstrap.bundle.min.js`}></script>
            <script src={`${publicUrl}/assets/vendor/php-email-form/validate.js`}></script>
            <script src={`${publicUrl}/assets/vendor/aos/aos.js`}></script>
            <script src={`${publicUrl}/assets/vendor/glightbox/js/glightbox.min.js`}></script>
            <script src={`${publicUrl}/assets/vendor/swiper/swiper-bundle.min.js`}></script>

            {/* Main JS File */}
            <script src={`${publicUrl}/assets/js/main.js`}></script>
        </>
    );
}

export default Footer;
