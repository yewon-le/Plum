import React, { useState } from "react";
import "./SignUp.css";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        sex: "",
        age: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


    return (
        <div className="Login-Container">
            <div className="Login-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="login-title">당신의 감각적인 음악들을 <br /> 보관하고 공유하세요.</div>
            <form className="content-box">
                <input
                    className="input-email"
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder="이름을 입력하세요 ex)성 + 이름."
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <input
                    className="input-email"
                    type="text"
                    name="sex"
                    autoComplete="off"
                    placeholder="성별을 입력하세요."
                    value={formData.sex}
                    onChange={handleInputChange}
                />
                <input
                    className="input-email"
                    type="number"
                    name="age"
                    autoComplete="off"
                    placeholder="나이를 입력하세요."
                    value={formData.age}
                    onChange={handleInputChange}
                />
                <input
                    className="input-email"
                    type="text"
                    name="email"
                    autoComplete="off"
                    placeholder="이메일을 입력하세요."
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <input
                    className="input-pw"
                    type="password"
                    name="password"
                    autoComplete="off"
                    placeholder="비밀번호를 입력하세요."
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <div className="Login-button-box">
                    <button className="login-button" type="submit">회원가입</button>
                </div>
            </form>
            <div className="go-signup">
                <p className="no">이미 회원이신가요?</p>
                <p className="go" onClick={() => navigate("/login")}>로그인 하러 가기</p>
            </div>
        </div>
    );
};

export default SignUp;
