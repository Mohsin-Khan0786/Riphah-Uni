import React, { useState } from 'react';
import { auth, firestore } from "../firebase"; // Make sure to import firestore
import './SignUp.css';

const SignUp = () => {
  const [SignupData, setSignupData] = useState({
    studentId: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...SignupData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(SignupData.email, SignupData.password);
      const user = userCredential.user;

      // You can now store user data in Firestore
      await firestore.collection('users').doc(user.uid).set({
        studentId: SignupData.studentId,
        email: SignupData.email,
        createdAt: new Date(),
      });

      // Clear input fields
      setSignupData({ studentId: '', password: '', email: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        {/* Tabs Titles */}
        {/* Icon */}
        <div className="fadeIn first">
          <img src="invoseg-logo.png" id="icon" alt="User Icon" width={90} height={180} className="px-4" />
          <h3>INVOSEG</h3>
        </div>
        {/*Signup Form */}
        <form onSubmit={handleSubmit}>
          <input type="text" id="studentId" className="fadeIn second" name="studentId" placeholder="Student ID" value={SignupData.studentId} onChange={handleChange} />
          <input type="email" id="email" className="fadeIn second" name="email" placeholder="Email" value={SignupData.email} onChange={handleChange} />
          <input type="password" id="password" className="fadeIn third" name="password" placeholder="Password" value={SignupData.password} onChange={handleChange} />

          <input type="submit" className="fadeIn fourth" defaultValue="Sign Up" />
        </form>
        {/* Remind Passowrd */}
        <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
