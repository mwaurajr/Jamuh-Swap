import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Routes/About";
import LandingPage from "./Routes/LandingPage";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/about" element={<About />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        {/* <Route path="/messages">
          <Messages />
        </Route>
        <Route path="/conversations">
          <Conversations />
        </Route>
        <Route path="/notifications">
          <NotificationsList />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
