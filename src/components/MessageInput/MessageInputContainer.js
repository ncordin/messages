import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { generateUid } from '../../helpers/numbers';
import MessageInput from './MessageInput';

function MessageInputContainer({ addMessage }) {
  const [value, setValue] = useState('');
  const [isPublic, setIsPublic] = useState(true);

  const handleValueChange = event => {
    setValue(event.target.value);
  };

  const handleIsPublicChange = () => {
    setIsPublic(previousState => !previousState);
  };

  const handleSubmit = event => {
    event.preventDefault();

    value &&
      addMessage({
        id: generateUid(),
        content: value,
        isPublic
      });

    setValue('');
  };

  return (
    <MessageInput
      value={value}
      isPublic={isPublic}
      handleValueChange={handleValueChange}
      handleIsPublicChange={handleIsPublicChange}
      handleSubmit={handleSubmit}
    />
  );
}

MessageInputContainer.propTypes = {
  addMessage: PropTypes.func.isRequired
};

export default MessageInputContainer;
