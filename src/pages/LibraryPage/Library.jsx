import "./Library.css";import Menu from "../../components/LibararyMenu";
import { Route, Routes } from "react-router-dom";
import Playlist from "./PlaylistPage/Playlist";
import Like from "./LikePage/Like";
import Artist from "./ArtistPage/Artist";
const Library = () => {
  return (
    <div className="container">
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Playlist />} />
        <Route path="playlist" element={<Playlist />} />
        <Route path="like" element={<Like />} />
        <Route path="artist" element={<Artist />} />
      </Routes>
    </div>
  );
};

export default Library;
