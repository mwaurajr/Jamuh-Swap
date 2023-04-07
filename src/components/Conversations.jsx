import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Conversations = ({ currentUser }) => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      const response = await axios.get(`/api/users/${currentUser.id}/conversations`);
      setConversations(response.data);
    };

    fetchConversations();
  }, [currentUser.id]);

  const renderConversations = () => {
    return conversations.map((conversation) => {
      return (
        <div key={conversation.id}>
          <h2>{conversation.title}</h2>
          <p>{conversation.last_message}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Conversations</h1>
      {renderConversations()}
    </div>
  );
};

export default Conversations;
