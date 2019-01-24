import React from 'react';
import { mount } from 'enzyme';

import { MessagesProvider } from '../MessageList';
import initialMessages from '../../data/messages';

describe('MessagesProvider', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<MessagesProvider>{() => null}</MessagesProvider>);

    expect(wrapper).toBeTruthy();
  });

  it('renders messages and allow to add a new one', () => {
    let addMessageReference = null;
    const wrapper = mount(
      <MessagesProvider>
        {({ messages, addMessage }) => {
          // We make a copy of the function reference so we can use it later.
          addMessageReference = addMessage;

          return messages.map(({ id, content }) => <p key={id}>{content}</p>);
        }}
      </MessagesProvider>
    );

    addMessageReference({
      id: 83262,
      content: 'This was added during the test',
      isPublic: true,
    });

    wrapper.update();

    // We should find our message at the last position.
    expect(
      wrapper
        .find('p')
        .last()
        .text()
    ).toBe('This was added during the test');

    // The total number of messages should be increase by 1.
    expect(wrapper.find('p').length).toBe(initialMessages.length + 1);
  });
});
