// Head.jsx
import React from 'react';

const Head = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Startwars React App - M. Ariq Fakhrizal</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />

      {/* Favicons */}
      <link rel="icon" href="assets/img/favicon.png" />
      <link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png" />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />

      {/* Vendor CSS Files */}
      <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
      <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
      <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
      <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

      {/* Main CSS File */}
      <link href="/assets/css/main.css" rel="stylesheet" />

      
      <link href="/assets/css/App.css" rel="stylesheet" />

      {/* Template Information */}
      <meta name="template" content="TheEvent" />
      <meta
        name="template-url"
        content="https://bootstrapmade.com/theevent-conference-event-bootstrap-template/"
      />
      <meta name="template-updated" content="Jun 14 2024 with Bootstrap v5.3.3" />
      <meta name="template-author" content="BootstrapMade.com" />
      <meta name="template-license" content="https://bootstrapmade.com/license/" />
    </>
  );
};

export default Head;
