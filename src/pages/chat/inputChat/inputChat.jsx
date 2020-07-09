import React from "react";
import "./inputChat.css";

const InputChat = ({ getMessage, sendMessage, msg }) => {
  return (
    <form
      className="chatbot-chat-input-container"
      onSubmit={(e) => sendMessage(e)}
    >
      <input
        value={msg.msg}
        type="text"
        placeholder="Escribi tu nombre!"
        onChange={(e) => getMessage(e.target.value)}
      />
      <button type="submit">▲</button>
    </form>
  );
};

export default InputChat;
