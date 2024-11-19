import albumImage from "../../../images/album.png";
import "./Playlist.css";

const Playlist = () => {
  const playlist = [
    {
      img: albumImage,
      title: "apple",
    },
    {
      img: albumImage,
      title: "banana",
    },
    {
      img: albumImage,
      title: "melon",
    },
    {
      img: albumImage,
      title: "peach",
    },
    {
      img: albumImage,
      title: "orange",
    },
    {
      img: albumImage,
      title: "lemon",
    },
    {
      img: albumImage,
      title: "grape",
    },
  ];
  return (
      <div className="playlist-box">
        <div className="playlist">
          {playlist.map((item, index) => (
            <div key={index} className="playlist-item">
              <img src={item.img} alt={item.title} />
              <div className="item-text">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Playlist;
