// import {  useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/auth/SingUp";
import  Login from "./pages/auth/Login";
import  OtpModal from "./pages/auth/optScreens/OtpModal";
import SetProfile from './pages/profile/SetProfile';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otpModal" element={<OtpModal/>} />      
      <Route path="/set-profile" element={<SetProfile/>} />      
    </Routes>
  </Router>
  )
}

export default App
