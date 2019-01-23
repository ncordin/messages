import React, { Component } from 'react';

import { generateUid } from '../../helpers/numbers';
import MessageInput from './MessageInput';

class MessageInputContainer extends Component {
  state = { value: '', isPublic: true };

  handleValueChange = event => {
    this.setState({ value: event.target.value });
  };

  handleIsPublicChange = () => {
    this.setState(previousState => ({ isPublic: !previousState.isPublic }));
  };

  handleSubmit = event => {
    const { value, isPublic } = this.state;
    const { addMessage } = this.props;

    event.preventDefault();

    value &&
      addMessage({
        id: generateUid(),
        content: value,
        isPublic,
      });

    this.setState({ value: '' });
  };

  render() {
    const { value, isPublic } = this.state;

    return (
      <MessageInput
        value={value}
        isPublic={isPublic}
        handleValueChange={this.handleValueChange}
        handleIsPublicChange={this.handleIsPublicChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default MessageInputContainer;
