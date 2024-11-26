import React, { useState } from "react";
import "./SignUp.css";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToSHome = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "http://localhost:8080/Plum-backend/api/signup",
        {
          username,
          email,
          password,
        }
      );

      // 회원가입 성공 시 처리
      if (response.data.message === "회원가입 성공") {
        setSuccessMessage("회원가입에 성공했습니다!");
        // 성공 후 로그인 페이지로 자동 리디렉션
        setTimeout(() => {
          navigate("/login");
        }, 800); // 0.8초 후에 로그인 페이지로 이동
      }
    } catch (error) {
      if (error.response) {
        // 이미 존재하는 사용자명이나 이메일일 경우 메시지 표시
        setErrorMessage(error.response.data.message || "회원가입 실패");
      } else {
        setErrorMessage("서버에 연결할 수 없습니다");
      }
    }
  };

  return (
    <form className="Login-Container" onSubmit={handleSubmit}>
      <div
        className="Login-logo"
        onClick={goToSHome}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="Logo" />
      </div>
      <div className="login-title">
        당신의 감각적인 음악들을 <br /> 보관하고 공유하세요.
      </div>
      <div className="content-box">
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="succes">{successMessage}</p>}
        <input
          className="input-username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
          placeholder="사용자명을 입력하세요."
          required
        ></input>
        <input
          className="input-email"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          placeholder="이메일을 입력하세요."
          required
        ></input>
        <input
          className="input-pw"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
          placeholder="비밀번호를 입력하세요."
          required
        ></input>

        <div className="Login-button-box">
          <button type="submit" className="login-button">
            가입하기
          </button>
        </div>
        <div className="go-signup">
          <p className="no">이미 회원이신가요?</p>
          <p className="go" onClick={goToLogin}>
            로그인 하러 가기
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
