import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ChatWindow from './ChatWindow';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChatWindow />
  </React.StrictMode>
);
