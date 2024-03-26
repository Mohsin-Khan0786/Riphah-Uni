import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
const navigate = useNavigate()
  const userData = JSON.parse(localStorage.getItem('userData'));

  const handleLogout =()=>{
    localStorage.clear();
    navigate("/") 
}
const handleDashboardClick = () => {
  if (!userData) {
    navigate("./Login") 
  } else {
    navigate("./DashBoard") 
  }
};
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    <div className="container-fluid">
      <button data-mdb-collapse-init className="navbar-toggler" type="button" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <a className="navbar-brand mt-2 mt-lg-0 px-3" href="/">
          <img src="RICLOGO.png" height={125} alt="Riphah Logo" loading="lazy" />
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-6 fw-bold">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li style={{cursor:"pointer"}} className='' onClick={handleDashboardClick}>
            <Link className="nav-link" to="DashBoard" >Dashboard</Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link" to="Summary">Summary</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/About">
              About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact Us
              </Link>
            </li>
        </ul>
        {/* Left links */}
      </div>
      <div className="d-flex align-items-center">
            {userData ? (
              <div>
              <span className="mx-3">Welcome, {userData.name}</span>
              <button className='btn btn-dark' onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <>
                <Link to='/Login' type="button" className="btn btn-primary mx-3">Login</Link>
              </>
            )}
          </div>
    </div>
  </nav>
</div>

  )
}

export default Navbar