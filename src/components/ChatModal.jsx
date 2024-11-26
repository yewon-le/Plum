import React, { useState } from "react";
import Modal from "react-modal";
import Draggable from "react-draggable";
import "./ChatModal.css";

Modal.setAppElement("#root");

const ChatModal = ({ isOpen, closeModal }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className="chat-modal">
      <Draggable handle=".chat-header">
        <div className="modal-content">
          <div className="chat-header">
            <button onClick={closeModal} className="close-button">X</button>
          </div>
          <div className="message-container">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === "user" ? "user-message" : "other-message"}`}
              >
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="message-input"
            />
            <button onClick={sendMessage} className="send-button">
              Send
            </button>
          </div>
        </div>
      </Draggable>
    </Modal>
  );
};

export default ChatModal;
