import React, { Fragment } from 'react';

import { Header, Content, Footer } from '../../common/Layout';

import { MessageList, MessageInput, MessagesProvider } from '../MessageList';

export default function MessagePage() {
  return (
    <MessagesProvider>
      {({ messages, addMessage }) => (
        <Fragment>
          <Header>Messages</Header>
          <Content>
            <MessageList messages={messages} />
          </Content>
          <Footer>
            <MessageInput addMessage={addMessage} />
          </Footer>
        </Fragment>
      )}
    </MessagesProvider>
  );
}
