import React, { useRef } from "react";
import "./Main.css";

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
    <div className="main-container">
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

export default Main;
