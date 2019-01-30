import React, { Fragment } from 'react';

import { Header, Content, Footer } from '../../../common/Layout';

import { MessageList, useMessages } from '../../MessageList';
import MessageInput from '../../MessageInput';

export default function MessagePage() {
  const [messages, addMessage] = useMessages();

  return (
    <Fragment>
      <Header>Messages</Header>
      <Content>
        <MessageList messages={messages} />
      </Content>
      <Footer>
        <MessageInput addMessage={addMessage} />
      </Footer>
    </Fragment>
  );
}
