import React from 'react';
import './Dashboard.css';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <div className="dashboard-container">
      <div className="sidebar">
        <ul>
          <li>Messages</li>
          <li>Notifications</li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Welcome to your dashboard!</h1>
        <p>You can view your messages and notifications in the sidebar.</p>
      </div>
    </div>
    </>
    
  );
}

export default Dashboard;
