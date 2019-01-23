import React, { Component } from 'react';
import { Form, Input, Button, Switch, Icon } from 'antd';

class MessageInput extends Component {
  render() {
    const {
      value,
      isPublic,
      handleValueChange,
      handleIsPublicChange,
      handleSubmit,
    } = this.props;

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
          <Button
            type="primary"
            shape="circle"
            htmlType="submit"
            icon="right"
          />
        </Form.Item>
      </Form>
    );
  }
}

export default MessageInput;
