import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Messages = ({ conversationId, currentUserId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`/conversations/${conversationId}/messages`);
      setMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`/conversations/${conversationId}/messages`, {
        body: newMessage,
        user_id: currentUserId,
      });
      setMessages([...messages, response.data]);
      setNewMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            {message.body} - {message.user.name}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newMessage} onChange={(event) => setNewMessage(event.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Messages;
