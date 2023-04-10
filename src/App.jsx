import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Routes/About";
import LandingPage from "./Routes/LandingPage";
// import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Messages from "./components/Messages";
import Conversations from "./components/Conversations";
import Notifications from "./components/Notifications";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/authorized')
      .then(response => {
        if (response.ok) {
          response.json().then(user => {
            setIsAuthenticated(true);
            setUser(user);
  
            // Fetch user's books
            fetch(`/users/${user.id}/books`)
              .then(response => {
                if (response.ok) {
                  response.json().then(books => {
                    setBooks(books);
                  });
                }
              })
              .catch(error => {
                console.error(error);
              });
  
            // Fetch user's reviews
            fetch(`/users/${user.id}/reviews`)
              .then(response => {
                if (response.ok) {
                  response.json().then(reviews => {
                    setReviews(reviews);
                  });
                }
              })
              .catch(error => {
                console.error(error);
              });
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route path="/login/dashboard" element={<Dashboard />} />

        <Route path="/messages" element={<Messages />}/>
          
        <Route path="/conversations" element={<Conversations />} />
         
        <Route path="/notifications" element={<Notifications />}/>
         
      </Routes>
    </>
  );
}

export default App;
