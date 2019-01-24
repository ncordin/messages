import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

import { shapeOfMessage } from '../../constants/message';

function Message({ message }) {
  const isPrivate = !message.isPublic;

  return (
    <div className={`message ${isPrivate ? 'private' : ''}`}>
      {isPrivate && <Icon type="lock" />} {message.content}
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.shape(shapeOfMessage).isRequired,
};

export default Message;
