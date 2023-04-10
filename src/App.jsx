import React, { useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Routes/About";
import LandingPage from "./Routes/LandingPage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Messages from "./components/Messages";
import Conversations from "./components/Conversations";
import Notifications from "./components/Notifications";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [books, setBooks] = useState([]);
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    // Fetch user authorization status from backend API
    const token = localStorage.getItem('jwt'); // or any other way to get the JWT token from local storage
    if (token) {
      fetch('http://localhost:3000/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(data => setIsAuthorized(true))
        .catch(error => console.error(error));
    }
  }, []);


  useEffect(() => {
    // Fetch user's books and reviews from backend API
    if (isAuthorized) {
      const token = localStorage.getItem('jwt'); // or any other way to get the JWT token from local storage
      fetch(`http://localhost:3000/books/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));

      fetch(`http://localhost:3000/reviews/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
  }, [isAuthorized]);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/messages" element={<Messages />}/>
          
        <Route path="/conversations" element={<Conversations />} />
         
        <Route path="/notifications" element={<Notifications />}/>
         
      </Routes>
    </>
  );
}

export default App;
