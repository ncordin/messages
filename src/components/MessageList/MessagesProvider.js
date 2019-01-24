import { Component } from 'react';
import PropTypes from 'prop-types';

import initialMessages from '../../data/messages';

/**
 * This component provide the messages logic by using a render props.
 * https://reactjs.org/docs/render-props.html
 *
 * This way, state and logic related to messages is extracted in a single place and could be re-use.
 */
class MessagesProvider extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

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
