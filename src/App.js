import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Dashboard  from './Pages/Dashboard';
import Summary from './Pages/Summary';
import Quiz from './Pages/Quiz';
import Topics from './Pages/Topics';
import ProtectedRoute from './ProtectedRoute';
import Contact from './Pages/Contact';
import About from './Pages/About'
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';
import Offline from './Pages/Offline';


function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);

    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, []);

  return isOnline ? (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

        <Route path="/DashBoard" element={<Dashboard />} />
        <Route
          path="/Summary"
          element={
            <ProtectedRoute>
              <Summary />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Quiz/:collectionName/:id"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Topics"
          element={
            <ProtectedRoute>
              <Topics />
            </ProtectedRoute>
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/Sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  ) : (
    <Offline/>
  );
}

export default App;
