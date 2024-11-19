import "./Like.css";
import { FaPlay, FaHeart } from "react-icons/fa";
import albumImage from "../../../images/newjeans.jpg";

const Like = () => {
  const like = [
    {
      img: albumImage,
      title: "hype boy",
      singer: "newjeans",
    },
    {
      img: albumImage,
      title: "hype boy",
      singer: "newjeans",
    },
    {
      img: albumImage,
      title: "hype boy",
      singer: "newjeans",
    },
    {
      img: albumImage,
      title: "hype boy",
      singer: "newjeans",
    },
    {
      img: albumImage,
      title: "hype boy",
      singer: "newjeans",
    },
  ];
  return (
    <div className="like-box">
      <div className="like-overlap">
        <div className="overlap-item-wrapper">
          <div className="overlap-item-box">
            {like.slice(0, 3).map((item, index) => (
              <div key={index} className="overlap-item">
                <img src={item.img} alt={item.title} />
              </div>
            ))}
          </div>
          <div className="overlap-title">좋아요 누른 음악</div>
          <div className="btn-box">
            <div className="play-btn">
              <FaPlay />
            </div>
          </div>
        </div>
      </div>
      <div className="like-list">
        {like.map((item, index) => (
          <div key={index} className="like-list-item">
            <div className="item">
              <img src={item.img} alt={item.title} />
              <div className="item-text">
                <div>
                  <div className="title">{item.title}</div>
                  <div className="singer">{item.singer}</div>
                </div>
              </div>
            </div>
            <div className="heart">
              <FaHeart />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Like;
