import React,{  useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/auth/SingUp";
import  Login from "./pages/auth/Login";
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  </Router>
  )
}

export default App
