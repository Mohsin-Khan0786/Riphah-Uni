import React from "react";
import img1 from "../Assets/homeimg1.png";
import { Link } from "react-router-dom";
// import ReactPlayer from 'react-player'

const Home = () => {
  const faqData = [
    {
      question: "What does Inovation.TECH offer?",
      answer:
        "Inovation.TECH offers a special package called INVOSEG Plus. It includes four courses about making websites, WordPress, making apps, and social media marketing. It helps you learn new things and get better.",
    },
    {
      question: "Can I save money with Inovation.TECH?",
      answer:
        "Yes, if you take more than one course regularly, you can save up to 30% each month. The more courses you take, the more money you save.",
    },
    {
      question:
        "What services does your company offer in website and app development?",
      answer:
        "Our company makes custom websites and apps. We focus on making them unique and useful for each client.",
    },
    {
      question: "How do you make custom websites and apps for clients?",
      answer:
        "We talk a lot with clients to understand what they need. Then, we design, build, test, and get feedback to make sure everything is just right.",
    },
    {
      question: "How do you handle social media for businesses?",
      answer:
        "We help businesses with their social media. We make plans, create posts, talk to followers, and use ads to make more people notice them.",
    },
    {
      question: "Do you make special websites with WordPress?",
      answer:
        "Yes, we make websites using WordPress. We can make them look special, add extra features, and make them faster for search engines.",
    },
    {
      question: "How do you add online shopping to websites and apps?",
      answer:
        "We've done this a lot! We add things like payment options, keeping track of what's in stock, and making it easy for people to buy things.",
    },
    {
      question: "How do you keep up with new ideas and technology?",
      answer:
        "We keep learning! We go to meetings, classes, and look online to see what's new. We talk with others who do the same job to learn from them too.",
    },
  ];

  return (
    <>
      <div className="container-fluid px-3 px-md-5 py-5 home-main">
        <div className="row flex-column-reverse flex-lg-row align-items-center g-5 py-5 home-main-row">
          <div className="col-lg-6 px-3 px-lg-5">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-center text-lg-start">
              Riphah and INVOSEG skills
            </h1>
            <p className="lead text-center text-lg-start mt-4 mb-4">
              Unlock internship opportunities and explore our wide range of
              courses for career advancement.
            </p>
            {/* <p className="text-center text-lg-start">$59/month, cancel anytime</p> */}
                    <div className="d-grid gap-2 d-md-flex justify-content-center justify-content-md-start">
          <Link
            to={"/DashBoard"}
            type="button"
            className="btn btn-primary btn-sm px-3 px-md-4 me-md-2 mb-3 mb-md-0"
          >
            Start My Internship program
          </Link>
        </div>

            {/* <p className="text-center text-lg-start text-primary">or $399/year with 14-day money-back guarantee</p> */}
          </div>
          <div className="col-lg-6 px-3 px-lg-5">
            <img
              src="logo-img.png"
              className="d-block mx-auto img-fluid image-cycle"
              alt="Bootstrap Themes"
              width={430}
              height={250}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* --------------------------------next--------------------- */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 h-34rem bg-red-400" />
        </div>
        <div className="row border-bottom-2 border-black p-4">
          <h4 className="col-12 text-2xl text-center mb-4">
            Learn from INNVOATION.TECH and INVOSEG AI Software Engineers
          </h4>
      
          <div className="row justify-content-center home-logos-part">
  <div className="col-12 col-md-6 col-lg-2 mb-3">
    <img
      src="hb-logo.jpg"
      alt="Brand 1"
      className="img-fluid"
      style={{ height: "180px", width: "180px" }}
    />
  </div>
  <div className="col-12 col-md-6 col-lg-2  mb-3 ">
    <img
      src="Al-nafoorah.jpeg"
      alt="Brand 2"
      className="img-fluid"
      style={{ height: "180px" ,width: "180px" }}
    />
  </div>
  <div className="col-12 col-md-6 col-lg-2  mb-3">
    <img
      src="Toni-GUY.png"
      alt="Brand 3"
      className="img-fluid"
      style={{ height: "180px" ,width: "180px" }}
    />
  </div>
  <div className="col-12 col-md-6 col-lg-2  mb-3">
    <img
      src="indigo.jpg"
      alt="Brand 4"
      className="img-fluid"
      style={{ height: "180px" ,width: "180px" }}
    />
  </div>
  <div className="col-12 col-md-6 col-lg-2  mb-3">
    <img
      src="the-sky.jpg"
      alt="Brand 5"
      className="img-fluid"
      style={{ height: "180px" ,width: "180px" }}
    />
  </div>
  <div className="col-12 col-md-6 col-lg-2  mb-3">
    <img
      src="lamasa.jpeg"
      alt="Brand 6"
      className="img-fluid"
      style={{ height: "180px", width: "180px" }}
    />
  </div>
</div>

          </div>
        
        <div className="row h-32rem">
          <div className="col-12 h-12rem mt-8">
            <div className="text-4xl font-semibold text-center p-4">
              <h3>Invest in your career with INNOVATION.TECH</h3>
            </div>
            <div className="text-base text-center mt-1 mb-3">
              <p>
                {" "}
                Get access to videos in over 90% of courses, Specializations,
                and Professional Certificates taught by top Software Engineers
                from leading companies.{" "}
              </p>
            </div>
            <div class="container mt-4">
              <div class="row justify-content-center align-items-center  mb-5 px-5">
                <div class="col-lg-3 col-md-4 col-sm-6 h-100 px-5 mt-3">
                  <div class="d-flex justify-content-center">
                    <img src="icon.png" alt="Icon 1" class="img-fluid" />
                  </div>
                  <div class="text-center my-3">Learn anything</div>
                  <div class="text-center">
                    Explore any interest or trending topic, take prerequisites,
                    and advance your skills
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 h-100 px-5 mt-3">
                  <div class="d-flex justify-content-center">
                    <img src="icon2.png" alt="Icon 2" class="img-fluid" />
                  </div>
                  <div class="text-center my-3">Save money</div>
                  <div class="text-center">
                    Spend less money on your learning if you plan to take
                    multiple courses this year
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 h-100 px-5 mt-3">
                  <div class="d-flex justify-content-center">
                    <img src="icon3.png" alt="Icon 3" class="img-fluid" />
                  </div>
                  <div class="text-center my-3">Flexible learning</div>
                  <div class="text-center">
                    Learn at your own pace, move between multiple courses, or
                    switch to a different course
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 h-100 px-5  mt-3">
                  <div class="d-flex justify-content-center">
                    <img src="icon4.png" alt="Icon 4" class="img-fluid" />
                  </div>
                  <div class="text-center my-3"> certifications</div>
                  <div class="text-center">
                    Earn a certificate for every learning program that you
                    complete at no additional cost
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>

      {/* --------------------------Coursera Plus--------------------------- */}

      <div className="container-fluid  bg-light">
        <div className="pt-5 pb-5">
          <h1>See what you can learn with INNOVATION.TECH</h1>
        </div>
        <div>
          <div className="container ">
            <div className="row row-cols-1 row-cCoursera Plusols-md-2 row-cols-lg-4 mx-3 pb-5">
              <div className="col">
                <div class="card mb-3">
                  <img
                    src="web-devlopment-logo.jpg"
                    className="card-img-top"
                    alt="Hollywood Sign on The Hill"
                    style={{ height: "180px" }}
                  />

                  <div className="card-body">
                    <h5 className="card-title">Web Development</h5>
                    {/* <p className="card-text">
  Web development is the process of building and maintaining websites on the internet. It involves creating web pages, designing their layout, and adding functionality to make them interactive. Web developers use languages like HTML, CSS, and JavaScript to create the visual structure, style, and behavior of websites. Web development is essential for businesses, organizations, and individuals to establish an online presence and communicate with their audience.
</p> */}
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-3">
                  <img
                    src="app-development.png"
                    className="card-img-top"
                    alt="Palm Springs Road"
                    style={{ height: "180px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">App Development</h5>
                    {/* <p className="card-text">
            This is a longer card with supporting text below as a natural 
          </p> */}
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-3">
                  <img
                    src="social-media-marketing.jpg"
                    className="card-img-top"
                    alt="Hollywood Sign on The Hill"
                    style={{ height: "180px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Social Media Marketing</h5>
                    {/* <p className="card-text">
            This is a longer card with supporting text below as a natural 
          </p> */}
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-3">
                  <img
                    src="Wordpress.jpeg"
                    className="card-img-top"
                    alt="Skyscrapers"
                    style={{ height: "180px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">WordPress</h5>
                    {/* <p className="card-text">
            This is a longer card with supporting text below as a natural 
          </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------faq----------------------- */}

      <div className="faq_area section_padding_130" id="faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-lg-6">
              <div
                className="section_heading text-center wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <h3>
                  <span>Frequently </span> Asked Questions
                </h3>
                <p>
                  Appland is completely creative, lightweight, clean &amp; super
                  responsive app landing page.
                </p>
                <div className="line" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-lg-8">
              <div className="accordion faq-accordian" id="faqAccordion">
                {/* Map through Static FAQ data */}
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="card border-0 wow fadeInUp"
                    data-wow-delay={`0.${index + 1}s`}
                  >
                    {/* Card Header */}
                    <div className="card-header" id={`heading${index}`}>
                      <h6
                        className="mb-0 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="true"
                        aria-controls={`collapse${index}`}
                      >
                        {faq.question}
                        <span className="lni-chevron-up" />
                        <i class="fa-solid fa-caret-down"></i>
                      </h6>
                    </div>
                    {/* Card Body */}
                    <div
                      className="collapse"
                      id={`collapse${index}`}
                      aria-labelledby={`heading${index}`}
                      data-parent="#faqAccordion"
                    >
                      <div className="card-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp"
                data-wow-delay="0.9s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.9s",
                  animationName: "fadeInUp",
                }}
              >
                <i className="lni-emoji-sad" />
                <p className="mb-0 px-2">Can't find your answers?</p>
                <Link to="/Contact"> Contact us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
