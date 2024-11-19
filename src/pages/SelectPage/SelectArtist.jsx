import "./SelectArtist.css";
import logo from "../../images/logo.png";

const ArtistNames = [
    {
      ArtistImage: "https://via.placeholder.com/50",
      singer: "noname",

    },
    {
        ArtistImage: "https://via.placeholder.com/50",
        singer: "noname",
  
      },
      {
        ArtistImage: "https://via.placeholder.com/50",
        singer: "noname",
  
      },
      {
        ArtistImage: "https://via.placeholder.com/50",
        singer: "noname",
  
      },
      {
        ArtistImage: "https://via.placeholder.com/50",
        singer: "noname",
  
      },
      {
        ArtistImage: "https://via.placeholder.com/50",
        singer: "noname",
  
      },
      {
        ArtistImage: "https://via.placeholder.com/50",
        singer: "noname",
  
      },
    {
      ArtistImage: "https://via.placeholder.com/50",
      singer: "noname",
  
    },
    {
      ArtistImage: "https://via.placeholder.com/50",
      singer: "noname",

    },
    {
        ArtistImage: "https://via.placeholder.com/50",
        singer: "noname",
  
      },
    
  ];
const SelectArtist = () => {
 
    return(
        <div className="select-content-wrapper">
              {/* <div className="select-logo">
            <img src={logo} alt="Logo" />
          </div> */}
          <div className="select-title">선호하는 아티스트를 선택하세요 (최소 1개)</div>
          <div className="artist-container">
            <div className="artist-list">
            {ArtistNames.map((artist) => (
                <div className="artist-album-box">
                  <div className="artist-album-cover">
                    <img
                      src={artist.albumImage}
                      alt={artist.album}
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
          {/* <div className="select-button-container">
            <button className="select-button">선택하기</button>
          </div> */}
        </div>
    )
};

export default SelectArtist;
