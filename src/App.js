import "./App.css";
import Header from "./components/Header";
import Main from "./pages/MainPage/Main";
import Library from "./pages/LibraryPage/Library";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import SelectArtist from "./pages/SelectPage/SelectArtist";
import SelectGenre from "./pages/SelectPage/SelectGenre";
import Drawer from "./components/Drawer";
import { useState } from "react";

function AppContent() {
  const location = useLocation();
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

  // select-artist와 select-genre 경로에서 Header와 Drawer를 숨김
  const showHeaderAndDrawer = !["/select-artist", "/select-genre"].includes(location.pathname);

  return (
    <>
      {showHeaderAndDrawer && (
        <Header
          toggleLeftDrawer={() => setIsLeftDrawerOpen(!isLeftDrawerOpen)}
          toggleRightDrawer={() => setIsRightDrawerOpen(!isRightDrawerOpen)}
        />
      )}
      {showHeaderAndDrawer && <Drawer open={isLeftDrawerOpen} side="left" />}
      <div className="content-wrapper">
        <Routes>
          <Route path="main" element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="select-artist" element={<SelectArtist />} />
          <Route path="select-genre" element={<SelectGenre />} />
          <Route path="library/*" element={<Library/>} />
        </Routes>
      </div>
      {showHeaderAndDrawer && <Drawer open={isRightDrawerOpen} side="right" />}
    </>
  );
}

function App() {
  return (
    <div className="layout">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
