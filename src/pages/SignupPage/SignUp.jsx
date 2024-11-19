import "./SignUp.css";
import logo from "../../images/logo.png";
import spotify from "../../images/spotify.png";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const navigate = useNavigate();

    const goToSignup = () => {
        navigate("/login");
    };
 
    return(
      <div className="Login-Container">
          <div className="Login-logo">
            <img src={logo} alt="Logo"/>
          </div>
          <div className="login-title">당신의 감각적인 음악들을 <br/> 보관하고 공유하세요.</div>
          <div className="content-box">
            <input
                className= "input-email"
                type='text'
                name="email"
                autoComplete='off'
                placeholder='이메일을 입력하세요.'
            ></input>
             <input
                className= "input-email"
                type='text'
                name="email"
                autoComplete='off'
                placeholder='이메일을 입력하세요.'
            ></input>

            <input
                className= "input-pw"
                type='password'
                name="password"
                autoComplete='off'
                placeholder='비밀번호를 입력하세요.'
            ></input>

            <div className="Login-button-box">
                <div className="login-button">로그인 하기</div>
            </div>
            <div className="go-signup">
                <p className="no">이미 회원이신가요?</p>
                <p className="go" onClick={goToSignup} >로그인 하러 가기</p>
            </div>
          </div>
      </div>
    )
};

export default SignUp;
