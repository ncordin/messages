import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import MessagesPage from '../Pages/MessagesPage';

/**
 * The App component is the right place to add a router and more pages.
 */
export default function App() {
  return (
    <div className="App">
      <MessagesPage />
    </div>
  );
}
