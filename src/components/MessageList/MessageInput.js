import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { generateUid } from '../../helpers/numbers';

class MessageInput extends Component {
  state = { value: '' };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    const { value } = this.state;
    const { addMessage } = this.props;

    event.preventDefault();

    addMessage({
      id: generateUid(),
      content: value,
    });

    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item>
          <Input
            placeholder="Send messages"
            value={value}
            onChange={this.handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            shape="circle"
            htmlType="submit"
            icon="search"
          />
        </Form.Item>
      </Form>
    );
  }
}

export default MessageInput;
