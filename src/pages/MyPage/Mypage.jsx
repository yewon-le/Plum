import "./Mypage.css";
import { useState, useEffect } from "react";
import profile from "../../images/album.png";
import axios from "axios";

const Mypage = () => {
  const [update, setUpdate] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("여");
  const [birthdate, setBirthdate] = useState("2004-06-29");
  const [country, setCountry] = useState("대한민국");

  useEffect(() => {
    // 컴포넌트가 마운트될 때 유저 정보 불러오기
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/Plum-backend/api/update", { withCredentials: true });
        setUsername(response.data.username);
        setEmail(response.data.email);
        // 다른 필드도 추가해 주세요
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleProfile = () => {
    setUpdate(!update);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/Plum-backend/api/update", {
        username: username, // 사용자 이름 추가
        email: email,
        // 다른 필드도 추가해 주세요
      }, { withCredentials: true });

      alert(response.data.message); // 성공 메시지 표시
      setUpdate(true); // 수정 모드 종료
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  }

  return (
    <div className="container">
      <div className="mypage-title">마이페이지</div>
      <form className="info-box" onSubmit={handleSubmit}>
        <div className="info-box-title">프로필</div>
        <div className="profile-box">
          <img src={profile} className="info-img" alt="profile" />
          <div className="profile-info">
            <div className="profile-info-item">
              사용자 이름
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} readOnly={update} />
            </div>
            <div className="profile-info-item">
              이메일
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} readOnly={update} />
            </div>
            <div className="profile-info-item">
              성별
              <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} readOnly={update} />
            </div>
            <div className="profile-info-item">
              생년월일
              <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} readOnly={update} />
            </div>
            <div className="profile-info-item">
              국가 또는 지역
              <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} readOnly={update} />
            </div>
          </div>
        </div>
        <div className="update-profile">
          {update ? (
            <button className="update-btn" onClick={handleProfile}>수정하기</button>
          ) : (
            <form onSubmit={handleSubmit}>
              <button onClick={handleProfile} className="update-cancel">취소</button>
              <button type="submit" className="update-btn">완료</button>
            </form>
          )}
        </div>
      </form>
    </div>
  );
};

export default Mypage;