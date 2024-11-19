import "./Artist.css";
import artistImage from "../../../images/aespa.png";

const Artist = () => {
  const artist = [
    {
      img: artistImage,
      name: "에스파",
    },
    {
      img: artistImage,
      name: "BTS",
    },
    {
      img: artistImage,
      name: "뉴진스",
    },
    {
      img: artistImage,
      name: "aimyon",
    },
  ];
  return (
    <div className="artist-box">
      <div className="artist">
        {artist.map((item, index) => (
          <div key={index} className="artist-item">
            <div className="item">
              <img src={item.img} alt={item.name} />
              <div className="item-text">{item.name}</div>
            </div>
            <div className="arrow">&#8250;</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artist;
