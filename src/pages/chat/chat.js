import React from "react";
import "./chat.css";
import Bochitem from "./Bochitem/bochitem";

const Chat = () => {
  return (
    <div className="chatbot-chat-container">
      <div className="chatbot-chat-content">
        <div className="chatbot-chat">
          <div className="chatbot-chat-container-body">
            <Bochitem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
