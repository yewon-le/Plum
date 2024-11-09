import React, { useState } from "react";
import styled from "styled-components";
import "./Drawer.css";

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

export default Drawer;
