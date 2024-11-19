import React, { useState } from "react";
import "./Header.css";
import logo from "../images/logo.png";
import searchIcon from "../images/search.png"; // 아이콘 이미지 경로
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <div>
      <div className="header">
        <div className="header-content-box">
          <div
            className="logo"
          >
            <img src={logo} alt="Logo" 
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}/>
          </div>
          <div className="search-bar">
            <input
              className="search-input-text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button onClick={handleSearch} className="search-button">
              <img src={searchIcon} alt="Search" className="search-icon" />{" "}
              {/* 아이콘 이미지 추가 */}
            </button>
          </div>
          <div className="login-button">Login</div>
        </div>
      </div>
      <div className="header-size-box"></div>
    </div>
  );
};

export default Header;
