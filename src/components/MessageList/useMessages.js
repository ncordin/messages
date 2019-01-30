import { useState } from 'react';

import initialMessages from '../../data/messages';

export default function useMessages() {
  const [messages, setMessages] = useState(initialMessages);

  const addMessage = message => {
    setMessages(previousState => {
      return [...previousState, message];
    });
  };

  return [messages, addMessage];
}
