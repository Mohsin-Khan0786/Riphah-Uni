import React, { useState } from "react";
import { auth, configapp } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [openResetPassword, setOpenResetPassword] = useState(false); // State for managing the visibility of the reset password section

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

 const handleSubmit = async (e) => {
   e.preventDefault();

   const { email, password } = loginData;

   if (!email) {
     toast.error("Please enter your email");
     return;
   }

   if (!password) {
     toast.error("Please enter your password");
     return;
   }

   try {
     const userCredential = await configapp
       .auth()
       .signInWithEmailAndPassword(email, password);
     console.log("Login successful");

     const user = userCredential.user;
     const db = configapp.firestore();
     const userDataRef = db.collection("users").doc(user.uid);

     userDataRef.onSnapshot((doc) => {
       const userData = doc.data();
       if (userData) {
         localStorage.setItem("userData", JSON.stringify(userData));
         console.log("User data:", userData);
       } else {
         console.error("User data not found");
       }
     });

     navigate("/dashboard");
   } catch (error) {
     console.error("Login error:", error.message);
     if (
       error.code === "auth/invalid-email" ||
       error.code === "auth/user-not-found"
     ) {
       toast.error("Wrong email");
     } else if (error.code === "auth/wrong-password") {
       toast.error("Wrong password");
     } else {
       toast.error("Invalid Email/Password");
     }
   }
 };



  const handleForgotPassword = () => {
    setOpenResetPassword(true); // Open the reset password section/modal
  };

  const handleCloseResetPassword = () => {
    setOpenResetPassword(false); // Close the reset password section/modal
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await auth.sendPasswordResetEmail(resetEmail);
      console.log("Password reset email sent successfully");
      handleCloseResetPassword(); // Close the reset password section/modal
      window.alert(
        "Password reset link has been sent to your email. Please check your inbox."
      );
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
    }
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
        <img
  src="invoseg-logo.png"
  id="icon"
  alt="User Icon"
  width={100}
  height={180}
  className="px-4 img-fluid" // Added "img-fluid" class for responsiveness
  style={{
    maxWidth: "100%", // Ensure the image is responsive
    width: "auto",    // Ensure the image adjusts its width automatically
    height: "auto",   // Ensure the image adjusts its height automatically
    maxHeight: "180px",  // Set maximum height for medium and large screens
    // maxWidth: "100px",   // Set maximum width for medium and large screens
  }}
/>

          <h3>INVOSEG</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            className="fadeIn second"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleChange}
          />
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              style={{ paddingRight: "30px" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "45px",
                transform: "translateY(-50%)",
              }}
            >
              {showPassword ? (
                <VisibilityOffIcon
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <VisibilityIcon
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
          </div>
          <input type="submit" className="fadeIn fourth" value="Sign In" />
          {/* Forgot Password button */}
          {/* <button
            type="button"
            onClick={handleForgotPassword}
            className="forgot-password-link"
            style={{border:"none"}}
          >
            Forgot Password?
          </button> */}
          <ToastContainer />
        </form>
      </div>
      {/* Forgot Password section/modal */}
      {openResetPassword && (
        <div className="reset-password-section">
          <form onSubmit={handleResetPassword}>
            <input
              type="email"
              placeholder="Enter your email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <button type="submit" style={{backgroundColor:"skyblue" , paddingLeft:"4px" , paddingRight:"4px",  paddingtop:"4px"}}>Reset Password</button>
            <button type="button" style={{marginLeft:"10px", border:"none"}} onClick={handleCloseResetPassword}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
