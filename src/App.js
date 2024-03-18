import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Dashboard  from './Pages/Dashboard';
import Summary from './Pages/Summary';
import Quiz from './Pages/Quiz';
import Topics from './Pages/Topics';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
     
    <Route path='/' element={<Home />} /> 
    <Route path='/DashBoard' element={<Dashboard/>} /> 
    <Route path='/Summary' element={<Summary/>} /> 
    <Route path='/Quiz/:collectionName/:id' element={<Quiz/>} /> 
    <Route path='/Topics' element={<Topics/>} /> 
    <Route path='/Login' element={<Login/>} /> 
  
    <Route path='/Sign-up' element={<SignUp/>} /> 
</Routes>
    </div>
  );
}

export default App;

