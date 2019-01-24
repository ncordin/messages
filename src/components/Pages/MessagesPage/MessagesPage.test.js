import React from 'react';
import { mount } from 'enzyme';

import MessagesPage from './MessagesPage';

import initialMessages from '../../../data/messages';

describe('MessagesPage', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<MessagesPage />);

    expect(wrapper).toBeTruthy();
  });

  it('shoud contains initial messages', () => {
    const wrapper = mount(<MessagesPage />);
    const messagesContent = wrapper.find('.layout-content').text();

    initialMessages.forEach(initialMessage => {
      expect(messagesContent).toContain(initialMessage.content);
    });
  });

  it('shoud add a new public message', () => {
    const wrapper = mount(<MessagesPage />);
    const greatings = 'Hey my name is Enzyme!';
    const event = { target: { value: greatings } };

    wrapper.find('.layout-footer input').simulate('change', event);
    wrapper.find('.layout-footer form').simulate('submit');

    const messages = wrapper
      .update()
      .find('.layout-content')
      .text();

    expect(messages).toContain(greatings);
  });

  it('shoud add a new private message', () => {
    const wrapper = mount(<MessagesPage />);
    const secret = 'This is a secret...';
    const event = { target: { value: secret } };

    wrapper.find('.layout-footer input').simulate('change', event);
    wrapper.find('.layout-footer button[role="switch"]').simulate('click');
    wrapper.find('.layout-footer form').simulate('submit');

    const isPrivate = wrapper
      .update()
      .find('.layout-content .message')
      .last()
      .hasClass('private');

    expect(isPrivate).toBeTruthy();
  });
});
