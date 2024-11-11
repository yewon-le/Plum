import "./App.css";
import Header from "./components/Header";
import Main from "./pages/MainPage/Main copy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer";
import { useState } from "react";

function App() {
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

  return (
    <div className="layout">
      <Router>
        <Header
          toggleLeftDrawer={() => setIsLeftDrawerOpen(!isLeftDrawerOpen)}
          toggleRightDrawer={() => setIsRightDrawerOpen(!isRightDrawerOpen)}
        />
        <Drawer open={isLeftDrawerOpen} side="left" />
        <div className="content-wrapper">
          <Routes>
            <Route path="main" element={<Main/>} />
            <Route path="/" element={<Main/>} />
          </Routes>
        </div>
        <Drawer open={isRightDrawerOpen} side="right" />
      </Router>
    </div>
  );
}

export default App;
