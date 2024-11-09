import React, { useRef } from "react";
import "./Main.css";
import logo from "../images copy/logo.png";
import searchIcon from "../images copy/search.png"; // 아이콘 이미지 경로
import styled from "styled-components";


//Header
const Header = () => {
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
          <div className="logo">
            <img src={logo} alt="Logo" />
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

//Header

// Main
const Main = () => {
  // useRef로 리스트 요소 참조
  const madeListRef = useRef(null);

  // 리스트를 좌우로 스크롤하는 함수
  const scroll = (direction, listRef) => {
    if (listRef.current) {
      const scrollAmount = 200;
      listRef.current.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  const songs = [
    {
      albumImage: "https://via.placeholder.com/50",
      subtitle: "Song 1",
      singer: "noname",
      album: "Album 1",
      time: "3:45",
    },
    {
      albumImage: "https://via.placeholder.com/50",
      subtitle: "Song 2",
      singer: "noname",
      album: "Album 2",
      time: "4:20",
    },
    {
      albumImage: "https://via.placeholder.com/50",
      subtitle: "Song 3",
      singer: "noname",
      album: "Album 3",
      time: "5:15",
    },
    // 필요에 따라 더 많은 노래 추가
  ];

  const List = () => {
    return (
      <div className="list-box">
        <div className="btn-box">
          <button
            className="arrow-btn"
            onClick={() => scroll("left", madeListRef)}
          >
            <div>&#8249;</div>
          </button>
          <button
            className="arrow-btn"
            onClick={() => scroll("right", madeListRef)}
          >
            <div>&#8250;</div>
          </button>
        </div>
        <div className="list" ref={madeListRef}>
          {Array.from({ length: 8 }, (_, index) => (
            <Album key={index}></Album>
          ))}
        </div>
      </div>
    );
  };

  const Chart = () => {
    return (
      <div className="popular-chart">
        <div className="popular-bar-wrapper">
          <div className="popular-bar">
            <div className="popular-bar-text">#</div>
            <div className="popular-bar-menu">
              <div>제목</div>
              <div>앨범</div>
              <div>시간</div>
            </div>
          </div>
        </div>
        <hr className="divider" />
        <div className="song-list-wrapper">
          <div className="song-list">
            {songs.map((song, index) => (
              <div className="song-item" key={index}>
                <div className="list-num">{index + 1}</div>
                <div className="album-box">
                  <div className="list-album-cover">
                    <img
                      src={song.albumImage}
                      alt={song.album}
                      className="album-image"
                    />
                  </div>
                  <div className="album-title-box">
                    <div className="list-subtitle">{song.subtitle}</div>
                    <div className="list-singer">{song.singer}</div>
                  </div>
                </div>
                <div className="list-album">{song.album}</div>
                <div className="list-time">{song.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const Album = () => {
    return(
      <div className="album">Playlist</div>
    )
  }

  return (
    <div className="container">
      <div className="title">Home</div>
      <div>
        <p className="mini-title">맞춤추천</p>
        <List></List>
      </div>

      <div className="mini-title">최근음악</div>
      <List></List>

      <div className="mini-title">인기차트</div>
      <Chart></Chart>
    </div>
  );
};
//Main


//Drawer

const Drawer = () => {
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

  // 왼쪽 드로어 스타일
  const LeftDrawer = styled.div`
    transform: translateX(${(props) => (props.open ? "0" : "-100%")});
  `;
 // 오른쪽 드로어 스타일
  const RightDrawer = styled.div`
    transform: translateX(${(props) => (props.open ? "0" : "100%")});
  `;

  return (
    <nav className="nav">
      <div className="toggle-header">
        {/* 왼쪽 드로어 토글 버튼 */}
        <div
          className="left-drawer-toggle-btn"
          onClick={() => setIsLeftDrawerOpen(!isLeftDrawerOpen)}
        >
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>

        {/* 오른쪽 드로어 토글 버튼 */}
        <div
          className="right-drawer-toggle-btn"
          onClick={() => setIsRightDrawerOpen(!isRightDrawerOpen)}
        >
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>
      </div>

      {/* 왼쪽 드로어 */}
      <LeftDrawer className="left-drawer" open={isLeftDrawerOpen}>
        <div className="drawer-left">
          <div className="left-drawer-menu-btn">HOME</div>
          <div className="left-drawer-btn">맞춤추천</div>
          <div className="left-drawer-btn">최근음악</div>
          <div className="left-drawer-btn">인기차트</div>
          <div className="left-drawer-menu-btn">라이브러리</div>
          <div className="left-drawer-btn">재생목록</div>
          <div className="left-drawer-btn">좋아요 누른 음악</div>
          <div className="left-drawer-btn">내 아티스트</div>
        </div>
      </LeftDrawer>

      {/* 오른쪽 드로어 */}
      <RightDrawer className="right-drawer" open={isRightDrawerOpen}>
        <div className="profile-list">
          <li>
            <img src="https://via.placeholder.com/50" alt="Profile" />
            <p>
              <span>yewon</span>
              <br />
              {/* <img src={playIcon} className="play-icon" />*/}
              Kanye West - Runaway
            </p>
          </li>
          <li>
            <img src="https://via.placeholder.com/50" alt="Profile" />
            <p>
              <span>nayoon</span>
              <br />
              Kanye West - Runaway
            </p>
          </li>
          <li>
            <img src="https://via.placeholder.com/50" alt="Profile" />
            <p>
              <span>jaehyun</span>
              <br />
              Kanye West - Runaway
            </p>
          </li>
        </div>
      </RightDrawer>
    </nav>
  );
};


//Drawer





export default Main;

