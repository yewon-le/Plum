import "../SignupPage/SignUp.css";
import logo from "../../images/logo.png";
import spotify from "../../images/spotify.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const goToSignup = () => {
        navigate("/signup");
    };

    const goToSHome = () => {
        navigate("/");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        console.log('이메일:', email); // 이메일 값 확인
        console.log('비밀번호:', password); // 비밀번호 값 확인

        try {
            const response = await axios.post('http://localhost:8080/Plum-backend/api/login', {
                email,
                password,
            },{
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.data.isAdmin) {
                console.log("관리자로 로그인하셨습니다:", response.data.isAdmin);
                // 관리자인 경우 JSP 페이지로 리다이렉트
                window.location.href = "http://localhost:8080/Plum-backend/admin.jsp"; // JSP 관리자 페이지 URL
            } else {
                console.log(`Welcome, ${response.data.username}`);
                // 일반 사용자 처리
                // navigate('/dashboard'); // 일반 사용자 대시보드로 이동
            }

            // 로그인 성공 시 처리 (예: 리다이렉트)
            console.log(response.data);
            navigate("/");

        } catch (error) {
            if (error.response) {
                // 서버에서 보낸 에러 메시지
                setErrorMessage(error.response.data.message || '로그인 실패');
            } else {
                setErrorMessage('서버에 연결할 수 없습니다');
            }
        }
    };
 
    return(
      <form className="Login-Container" onSubmit={handleSubmit}>
          <div className="Login-logo" onClick={goToSHome} style={{ cursor: "pointer" }}>
            <img src={logo} alt="Logo"/>
          </div>
          <div className="login-title">당신의 감각적인 음악들을 <br/> 보관하고 공유하세요.</div>
          <div className="content-box">
          {errorMessage && <p className="error" >{errorMessage}</p>}
            <input
                className= "input-email"
                type='text'
                name="email"
                value={email}
                autoComplete='off'
                placeholder='이메일을 입력하세요.'
                onChange={(e) => setEmail(e.target.value)} 
                required
            ></input>

            <input
                className= "input-pw"
                type='password'
                name="password"
                value={password}
                autoComplete='off'
                placeholder='비밀번호를 입력하세요.'
                onChange={(e) => setPassword(e.target.value)}
                required
            ></input>

            <div className="Login-button-box">
                <button type="submit" className="login-button">로그인 하기</button>
                <div className="login-button">
                    <img src= {spotify} alt="Icon" className="login-button-icon" />
                </div>
            </div>
            <div className="go-signup">
                <p className="no">계정이 없나요?</p>
                <p className="go" onClick={goToSignup} >Plum에 가입하기</p>
            </div>
          </div>
      </form>
    )
};

export default Login;
