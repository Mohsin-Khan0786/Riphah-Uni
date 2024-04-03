import React from "react";
import "./AboutUs.css";


const index = () => {

  return (
    <div>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 "data-aos="fade-left"  data-aos-delay="500" data-aos-duration="1000">
              <div className="inner-column">
                <div className="sec-title pt-sm-8"  >
                  <h2>We are Creative Tech Enthusiast working since 2015</h2>
                </div>
                <div className="text">
                  With over 5 years of experience, I am Daniyal Humayun,
                  currently working at INNOVATION.TECH and INVOSEG AI. Our
                  mission is to offer cutting-edge solutions for your website or
                  web application, enhancing both its attractiveness and
                  efficiency by creating bespoke plugins tailored to your needs.
                </div>{" "}
                <div className="text">
                  At INNOVATION.TECH, we're dedicated to providing next-level
                  tutorials to align with your expertise and current industry
                  trends. As a learning platform, Css3 Transition offers a
                  plethora of high-quality content on web development and plugin
                  tutorials, utilizing HTML, HTML5, CSS, CSS3, jQuery, and
                  JavaScript. We also specialize in e-learning classes covering
                  various topics such as app development, web development,
                  WordPress, social media marketing, and custom website
                  creation. Additionally, we excel in advanced AI applications,
                  leveraging state-of-the-art technologies to deliver innovative
                  solutions for our clients. Our proficiency extends to React
                  JavaScript languages, ensuring top-notch services to our
                  clients.
                </div>
                <div className="btn-box">
                  <a href="/Contact" className="theme-btn btn-style-one">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12" >
              <div className="inner-column wow fadeInLeft">
                <div className="author-desc">
                  <h2>Daniyal Humayun</h2>
                  <span>CEO at INNOVATION.TECH & INVOSEG AI</span>
                </div>
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img title="Innovation-tech" src="invoseg-logo.png" alt />
                  </a>
                </figure>
              </div>
            </div>
          </div>
          <div className="sec-title">
            <span className="title">Our Future Goal</span>
            <h2>Leading Innovation & Technology</h2>
          </div>
          <div className="text">
            At INNOVATION.TECH, we are committed to revolutionizing the digital
            landscape. As the CEO, Daniyal Humayun spearheads our efforts to
            lead in innovation and technology. Our focus extends beyond mere
            UI/UX and functionality. We meticulously craft plugins with
            impeccable structure and stunning aesthetics, tailored to elevate
            your web applications and websites.
          </div>

          <div className="text">
            Leveraging a finely curated toolkit, we ensure that every solution
            we deliver is not only functional but also visually captivating. We
            believe in performance and aesthetics working hand in hand. Our
            mission is to provide comprehensive technical content across various
            domains, be it design or functionality. We strive to offer
            high-quality content free of charge, ensuring accessibility for all.
            Additionally, we encourage our users to share their own content. If
            our technical team finds it noteworthy, we will feature it on our
            blog, further enriching our community.
          </div>

          <div className="text"></div>
          <div className="text">
            In closing, we invite you to explore our website and indulge in the
            wealth of quality content we offer. Thank you for being a part of
            our journey towards innovation and excellence.
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
