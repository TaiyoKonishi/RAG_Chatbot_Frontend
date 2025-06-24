// チャットボックス、入力欄、タイトルなどを含む全体のレイアウト
//親コンポーネントになることが多い
// ChatWindow.js
import React from "react";
import Header from "./components/Header";

const ChatWindow = () => {
    return (
    <div className="chatbot">
      <div
        style={{
          backgroundColor: '#7A5FFF',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            width: '70vh',
            height: '90vh',
            textAlign: 'center',
            borderRadius: '10px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '20px',
          }}
        >
          <div className="chatbot_message">
            <Header />
          </div>

          <div className="chatbot_input" style={{ display: 'flex', gap: '10px' }}>
            <input type="text" style={{ flex: 1, padding: '8px' }} />
            <button style={{ padding: '8px 16px' }}>送信</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;