import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Switch, Icon } from 'antd';

class MessageInput extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    isPublic: PropTypes.bool.isRequired,
    handleValueChange: PropTypes.func.isRequired,
    handleIsPublicChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

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
