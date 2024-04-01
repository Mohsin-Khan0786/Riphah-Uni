import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player';

import Swal from "sweetalert2";

const Enrollment = ({topicD, handleOff}) => {

const [showQuiz, setShowQuiz] = useState(false)

  const handleQuizStart = (event) => {
    event.preventDefault(); 
    Swal.fire({
      title: "Do you want to start the quiz?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Quiz started");
        handleOff(topicD?.id, topicD?.collectionName );        

setShowQuiz(true);
      } else if (result.isDenied) {
        console.log("Quiz not started");
      }
    });
  };

  return (
    <>
      <div className="container bg-light">
        <div className="row">
          <div className="col">
            <h1 className>{topicD?.collectionName}</h1>
            <div className="d-flex">
              <h3 className="text-start mx-4">{topicD?.topic}</h3>
            </div>
            <p className="mx-md-5 text-start">
              {topicD?.description.slice(0, 30)}
            </p>
          </div>
        </div>
        <div className="video-container mt-5 mb-5 d-flex justify-content-center align-items-center">
          <ReactPlayer
            url={topicD?.youtubeLink}
            controls={true}
            width="100%"
            height="100%"
            config={{
              attributes: {
                controlsList: "nodownload",
              },
            }}
          />
        </div>

        <div className="col-12 col-md-8 mx-auto">
          <div className="row">
            <div className="col-md-10">
              <div className="accordion faq-accordian" id="faqAccordion">
                <div
                  className="card border-0 wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="card-header" id="headingOne">
                    <h6
                      className="mb-0 collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Summary
                      <span className="lni-chevron-up"></span>
                      <i className="fa-solid fa-caret-down"></i>
                    </h6>
                  </div>
                  <div
                    className="collapse"
                    id="collapseOne"
                    aria-labelledby="headingOne"
                    data-parent="#faqAccordion"
                  >
                    <div className="card-body">{topicD?.description}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-end">
              <Link
                to="/Quiz"
                className="px-4 py-2 btn btn-dark text- text-end justify-content-end"
                onClick={handleQuizStart}
              >
                Quiz start
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enrollment;
