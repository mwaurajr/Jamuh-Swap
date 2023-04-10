import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Routes/About";
import LandingPage from "./Routes/LandingPage";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Messages from "./components/Messages";
import Conversations from "./components/Conversations";
import Notifications from "./components/Notifications";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/about" element={<About />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/messages" element={<Messages />}/>
          
        <Route path="/conversations" element={<Conversations />} />
         
        <Route path="/notifications" element={<Notifications />}/>
         
      </Routes>
    </>
  );
}

export default App;
