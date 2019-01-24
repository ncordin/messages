import React, { Component, createRef } from 'react';

import Message from './Message';

class MessageList extends Component {
  constructor() {
    super();
    this.bottomRef = createRef();
  }

  /**
   * After this component render a new message, we want to scroll so it will be visible.
   */
  componentDidUpdate() {
    // scrollIntoView() may not be available in testing context.
    this.bottomRef.current.scrollIntoView &&
      this.bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { messages } = this.props;

    return (
      <div className="message-list">
        {messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={this.bottomRef} />
      </div>
    );
  }
}

export default MessageList;
