import React, { createRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Message from './Message';
import { shapeOfMessage } from '../../constants/message';

const bottomRef = createRef();

function MessageList({ messages }) {
  /**
   * After this component render a new message, we want to scroll so it will be visible.
   */
  useEffect(() => {
    // scrollIntoView() may not be available in testing context.
    bottomRef.current.scrollIntoView &&
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div className="message-list">
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(shapeOfMessage)).isRequired
};

export default MessageList;
