import React from "react";
import "./ChatButton.css";

const ChatButton = ({ openModal, navigate }) => {
  const handleClick = () => {
    openModal();
    navigate("/chatmodal"); // 원하는 경로로 이동
  };

  return <button className="openbutton" onClick={handleClick}>Q</button>;
};

export default ChatButton;
