// import {  useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/auth/SingUp";
import  Login from "./pages/auth/Login";
import  OtpModal from "./pages/auth/optScreens/OtpModal";
import SetProfile from './pages/profile/SetProfile';
import SignatureInitial from './pages/profile/SignatureInitial'
import BrokerageSetup from './pages/Brokerage/WelcomeScreen';
import BrokerageForm from './pages/Brokerage/BrokerageForm';
import Dashboard from './pages/dashboard/Dashboard';
import HomeTable from './component/dashboard/HomeTable';
import Rooms from './component/dashboard/room/Rooms';
import TransactionScreen from './component/dashboard/TransactionScreen';
// import Rooms from './component/dashboard/Rooms';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otpModal" element={<OtpModal/>} />      
      <Route path="/set-profile" element={<SetProfile/>} />      
      <Route path="/set-signature" element={<SignatureInitial/>} />      
      <Route path="/brokerageSetup" element={<BrokerageSetup/>} />      
      <Route path="/brokerageForm" element={<BrokerageForm/>} /> 
     
      <Route path="/dashboard/*" element={<Dashboard />}>
          <Route index element={<HomeTable />} />
          <Route path='home' element={<HomeTable />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="transactions" element={<TransactionScreen/>}/>
          {/* Add more child routes here */}
      </Route>

    </Routes>
  </Router>
  )
}

export default App
