import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Switch, Icon } from 'antd';

function MessageInput({
  value,
  isPublic,
  handleValueChange,
  handleIsPublicChange,
  handleSubmit
}) {
  return (
    <Form layout="inline" onSubmit={handleSubmit}>
      <Form.Item>
        <Switch
          checkedChildren={<Icon type="check" />}
          unCheckedChildren={<Icon type="lock" />}
          checked={isPublic}
          onChange={handleIsPublicChange}
        />
      </Form.Item>

      <Form.Item>
        <Input
          placeholder="Type message here"
          value={value}
          onChange={handleValueChange}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" shape="circle" htmlType="submit" icon="right" />
      </Form.Item>
    </Form>
  );
}

MessageInput.propTypes = {
  value: PropTypes.string.isRequired,
  isPublic: PropTypes.bool.isRequired,
  handleValueChange: PropTypes.func.isRequired,
  handleIsPublicChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default MessageInput;
