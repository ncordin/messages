import { Component } from 'react';

import initialMessages from '../../data/messages';

class MessagesProvider extends Component {
  state = { messages: initialMessages };

  addMessage = message => {
    this.setState(previousState => {
      const messages = [...previousState.messages, message];

      return { messages };
    });
  };

  render() {
    const { children } = this.props;
    const { messages } = this.state;

    return children({ messages, addMessage: this.addMessage });
  }
}

export default MessagesProvider;
