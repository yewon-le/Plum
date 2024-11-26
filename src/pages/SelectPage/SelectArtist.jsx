import React, { useState } from "react";
import "./SelectArtist.css";
import logo from "../../images/logo.png";
import aespa from "../../images/aespa.png";
import giriboy from "../../images/giriboy.webp"

const ArtistNames = [
  {
    ArtistImage: aespa,
    singer: "aespa",
  },
  {
    ArtistImage: giriboy,
    singer: "기리보이",
  },
  {
    ArtistImage: "https://via.placeholder.com/50",
    singer: "noname3",
  },
  {
    ArtistImage: "https://via.placeholder.com/50",
    singer: "noname4",
  },
  {
    ArtistImage: "https://via.placeholder.com/50",
    singer: "noname5",
  },
  {
    ArtistImage: "https://via.placeholder.com/50",
    singer: "noname6",
  },
  {
    ArtistImage: "https://via.placeholder.com/50",
    singer: "noname7",
  },
  {
    ArtistImage: "https://via.placeholder.com/50",
    singer: "noname8",
  },
  {
    ArtistImage: "https://via.placeholder.com/50",
    singer: "noname9",
  },
  {
    ArtistImage: "https://via.placeholder.com/50",
    singer: "noname10",
  },
  // ... (나머지 항목 동일)
];

const SelectArtist = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  const selectArtist = (singer) => {
    setSelectedArtist(singer === selectedArtist ? null : singer);
  };

  return (
    <div className="Select-Container">
      <div className="select-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="select-title">선호하는 아티스트를 선택하세요 (최소 1개)</div>
      <div className="artist-container">
        <div className="artist-list">
          {ArtistNames.map((artist) => (
            <div
              key={artist.singer}
              className={`artist-album-box ${
                selectedArtist === artist.singer ? "selected" : ""
              }`}
              onClick={() => selectArtist(artist.singer)}
            >
              <div className="artist-album-cover">
                <img
                  src={artist.ArtistImage}
                  alt={artist.singer}
                  className="artist-album-cover"
                />
              </div>
              <div className="artist-title-box">
                <div className="artist-singer">{artist.singer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="select-button-container">
        <button className="select-button">선택하기</button>
      </div>
    </div>
  );
};

export default SelectArtist;
