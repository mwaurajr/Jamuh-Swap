import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  function fetchNotifications() {
    axios.get('/api/notifications')
      .then(response => {
        setNotifications(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function markAsRead(notificationId) {
    axios.put(`/api/notifications/${notificationId}`, { read: true })
      .then(response => {
        setNotifications(prevNotifications => {
          const index = prevNotifications.findIndex(notification => notification.id === notificationId);
          prevNotifications[index] = response.data;
          return [...prevNotifications];
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>Notifications</h1>
      {notifications.map(notification => (
        <div key={notification.id}>
          <p>{notification.message}</p>
          {!notification.read && <button onClick={() => markAsRead(notification.id)}>Mark as read</button>}
        </div>
      ))}
    </div>
  );
}

export default Notifications;