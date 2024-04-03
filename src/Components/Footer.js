import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href className="me-4 text-reset">
              <i className="fab fa-facebook-f" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-google" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-linkedin" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className='d-none d-sm-block' >
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-5 col-lg-5 col-xl-3 mx-auto mb-4">
                {/* Content */}

                <h6 className="text-uppercase fw-bold mb-4">
                  <img
                    src="invoseg-logo.png"
                    alt=""
                    style={{ height: "50px", paddingRight: "13px" }}
                  ></img>
                  {/* <i className="fas fa-gem me-3" />*/}
                  INVOSEG AI
                </h6>
                <p>
                  INNOVATION.TECH collaborates with INVOSEG for enhanced
                  learning experiences.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Web Development
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    App Development
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Social Media Marketing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    WordPress
                  </a>
                </p>
              </div>

              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-4 col-xl-3 mx-auto  mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3" /> Office # 2, Second Floor,
                  Al-Haram Plaza, PIA Main Boulevard, Lahore, 54770
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  info@innovationhightech.com.
                </p>
                <p className="mt-2">
                  <i className="fas fa-phone me-3 " /> +92-303-3635365
                </p>
                <p>
                  <i className="fas fa-print me-3" /> +92-300-8879084
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}


        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright:
          <a
            className="text-reset fw-bold"
            href="https://invoseg.com/"
            target="_blank"
          >
            Design and Developed by INNOVATION.TECH & INVOSEG AI
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
};

export default Footer;
