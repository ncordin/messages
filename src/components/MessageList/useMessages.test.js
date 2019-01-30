import React from 'react';
import { mount } from 'enzyme';

import { useMessages } from './index';
import initialMessages from '../../data/messages';

let addMessageReference = null;

const ComponentWithMessages = () => {
  const [messages, addMessage] = useMessages();

  addMessageReference = addMessage;

  return messages.map(message => <p key={message.id}>{message.content}</p>);
};

describe('useMessages', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<ComponentWithMessages />);

    expect(wrapper).toBeTruthy();
  });

  it('renders messages and allow to add a new one', () => {
    const wrapper = mount(<ComponentWithMessages />);

    addMessageReference({
      id: 83262,
      content: 'This was added during the test',
      isPublic: true
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
