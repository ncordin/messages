import React from 'react';
import { Icon } from 'antd';

export default function Message({ message }) {
  const isPrivate = !message.isPublic;

  return (
    <div className={`message ${isPrivate ? 'private' : ''}`}>
      {isPrivate && <Icon type="lock" />} {message.content}
    </div>
  );
}
