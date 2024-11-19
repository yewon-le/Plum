import "./LibararyMenu.css";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  return (
    <div className="menu-wrapper">
      <div className="menu-title">라이브러리</div>
      <div className="menu-box">
        <Link
          className={`menu-btn ${
            location.pathname === "/library/playlist" ||
            location.pathname === "/library"
              ? "highlighted"
              : ""
          }`}
          to="playlist"
        >
          재생목록
        </Link>
        <Link
          className={`menu-btn ${
            location.pathname === "/library/like" ? "highlighted" : ""
          }`}
          to="like"
        >
          좋아요
        </Link>
        <Link
          className={`menu-btn ${
            location.pathname === "/library/artist" ? "highlighted" : ""
          }`}
          to="artist"
        >
          내 아티스트
        </Link>
      </div>
    </div>
  );
};

export default Menu;
