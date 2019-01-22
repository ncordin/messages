import React, { Fragment } from 'react';

import { Header, Content, Footer } from '../../common/Layout';
import MessageList from '../MessageList';
import MessageInput from '../MessageList/MessageInput';

const messages = [
  { id: 2340, content: 'Salut' },
  { id: 6754, content: 'ca va ?' },
];

export default function MessagePage() {
  return (
    <Fragment>
      <Header>Messages</Header>
      <Content>
        <MessageList messages={messages} />
      </Content>
      <Footer>
        <MessageInput />
      </Footer>
    </Fragment>
  );
}
