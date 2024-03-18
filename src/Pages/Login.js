import React, { useState } from 'react';
import { configapp } from '../firebase';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = loginData;

      const userCredential = await configapp.auth().signInWithEmailAndPassword(email, password);
      console.log('Login successful');

      const user = userCredential.user;
      const db = configapp.firestore();
      const userDataRef = db.collection('users').doc(user.uid);
      const userDataSnapshot = await userDataRef.get();
      const userData = userDataSnapshot.data();

      if (userData) {
        localStorage.setItem('userData', JSON.stringify(userData));
        console.log('User data:', userData);
      } else {
        console.error('User data not found');
      }

      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img src="invoseg-logo.png" id="icon" alt="User Icon" width={100} height={180} className="px-4" />
          <h3>INVOSEG</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="email" id="email" className="fadeIn second" name="email" placeholder="Email" value={loginData.email} onChange={handleChange} />
          <input type="password" id="password" className="fadeIn third" name="password" placeholder="Password" value={loginData.password} onChange={handleChange} />
          <input type="submit" className="fadeIn fourth" value="Sign In" />
        </form>
      </div>
    </div>
  );
};

export default Login;
