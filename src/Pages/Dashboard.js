import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { configapp } from "../firebase";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData, "qwertyui")
    if (
      userData &&
      (userData.showCourse === false ||
        userData.wordpress === true ||
        userData.smm === true ||
        userData.web === true ||
        userData.app === true )
    ) {
      navigate("/Topics");
    }
  }, [navigate]);

  const handleEnrollmentClick = async (courseName) => {
    const userData = JSON.parse(localStorage.getItem("userData"));
  
    if (!userData) {
      navigate("/Login");
      return;
    }
  
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to enroll in this course?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, enroll me!",
      cancelButtonText: "No, cancel",
    });
  
    if (result.isConfirmed) {
      const db = configapp.firestore();
      const userRef = db.collection("users").where("email", "==", userData.email);
  
      userRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.update({ showCourse: false, [courseName]: true }).then(() => {

            const updatedUserData = { ...userData, showCourse: false, [courseName]: true };
            localStorage.setItem("userData", JSON.stringify(updatedUserData));
          });
        });
      });
  
      Swal.fire(
        "Enrolled!",
        "You have successfully enrolled in the course.",
        "success"
      );
  
      navigate("/");
    } else {
      Swal.fire("Canceled", "Your enrollment was canceled.", "error");
    }
  };
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 shadow rounded">
            <div className="d-flex flex-row rounded" style={{ width: "600px" }}>
              <img src="web-devlopment-logo.jpg" alt="" style={{ height: "250px", width: "300px" }} className="img-fluid rounded" />
              <div className="card-body text-start mx-3">
                <h4 className="card-title mt-3">Wordpress</h4>
                <p className="card-text mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Link to="/Summary" className="btn btn-secondary card-link">
                  Summary
                </Link>
                <button className="btn btn-dark card-link" onClick={() => handleEnrollmentClick("wordpress")}>
                  Enrollment
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4 shadow rounded">
            <div className="d-flex flex-row rounded" style={{ width: "600px" }}>
              <img src="web-devlopment-logo.jpg" alt="" style={{ height: "250px", width: "300px" }} className="img-fluid rounded" />
              <div className="card-body text-start mx-3">
                <h4 className="card-title mt-3">Social Media Marketing</h4>
                <p className="card-text mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Link to="/Summary" className="btn btn-secondary card-link">
                  Summary
                </Link>
                <button className="btn btn-dark card-link" onClick={() => handleEnrollmentClick("smm")}>
                  Enrollment
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4 shadow rounded">
            <div className="d-flex flex-row rounded" style={{ width: "600px" }}>
              <img src="web-devlopment-logo.jpg" alt="" style={{ height: "250px", width: "300px" }} className="img-fluid rounded" />
              <div className="card-body text-start mx-3">
                <h4 className="card-title mt-3">Web Develpoment</h4>
                <p className="card-text mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Link to="/Summary" className="btn btn-secondary card-link">
                  Summary
                </Link>
                <button className="btn btn-dark card-link" onClick={() => handleEnrollmentClick("web")}>
                  Enrollment
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4 shadow rounded">
            <div className="d-flex flex-row rounded" style={{ width: "600px" }}>
              <img src="web-devlopment-logo.jpg" alt="" style={{ height: "250px", width: "300px" }} className="img-fluid rounded" />
              <div className="card-body text-start mx-3">
                <h4 className="card-title mt-3">Flutter Develpoment</h4>
                <p className="card-text mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Link to="/Summary" className="btn btn-secondary card-link">
                  Summary
                </Link>
                <button className="btn btn-dark card-link" onClick={() => handleEnrollmentClick("app")}>
                  Enrollment
                </button>
              </div>
            </div>
          </div>
</div>

  </div>
<Footer/>
</>


  );
};

export default Dashboard;
