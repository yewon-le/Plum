import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../images/logo.png";
import searchIcon from "../images/search.png"; // 아이콘 이미지 경로
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa"
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState("none");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/Plum-backend/api/userinfo",
          { withCredentials: true }
        );
        setUsers(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching user info:", err);
        setError(
          err.response
            ? err.response.data.message
            : "서버에 연결할 수 없습니다."
        );
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [error]);

  const goToLogin = () => {
    console.log("Navigating to login...");
    navigate("/login");
  };

  const goToMypage = () => {
    navigate("/mypage");
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      console.log("Searching for:", searchQuery);
    }
  };

  const handleLogout = async (event) => {
    event.preventDefault(); // 기본 폼 제출 방지
    try {
      await axios.post(
        "http://localhost:8080/Plum-backend/api/logout",
        {},
        { withCredentials: true }
      );
      setUsers(null); // 사용자 정보 초기화
      console.log("Logout successful");
      navigate("/");
    } catch (err) {
      console.error("Error during logout:", err);
    }
  };

  const handleIcon = () => {
    if(show === "none")
      setShow("flex");
    else 
      setShow("none");
  }

  return (
    <div>
      <div className="header">
        <div className="header-content-box">
          <div className="logo">
            <img
              src={logo}
              alt="Logo"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
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
          <div className="header-login-button">
            {loading ? (
              <div className="loading">loading...</div>
            ) : users ? (
              <form className="header-loginout" onSubmit={handleLogout}>
                <div>{users.username}<span>님</span><FaPlay className={show} onClick={handleIcon}></FaPlay></div>
                <button type="submit" style={{ display: show }} className="logout">Logout</button>
                <button style={{ display: show }} className="mypage" onClick={goToMypage}>Mypage</button>
              </form>
            ) : (
              <div className="header-loginout">
                <button onClick={goToLogin}>Login</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="header-size-box"></div>
    </div>
  );
};

export default Header;
