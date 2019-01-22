import React from 'react';

import Message from './Message';

export default function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
