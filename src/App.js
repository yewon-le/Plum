import "./App.css";
import Header from "./components/Header";
import Main from "./pages/MainPage/Main";
import Login from "./pages/LoginPage/Login";
import SignUp from "./pages/SignupPage/SignUp";
import Library from "./pages/LibraryPage/Library";
import Mypage from "./pages/MyPage/Mypage";
import ChatModal from "./components/ChatModal";
import ChatButton from "./components/ChatButton";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import SelectArtist from "./pages/SelectPage/SelectArtist";
import SelectGenre from "./pages/SelectPage/SelectGenre";
import Drawer from "./components/Drawer";
import { useState } from "react";

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);

  const closeModal = () => {
    setModalIsOpen(false);
    if (location.pathname === "/chatmodal") {
      navigate(-1); // 이전 페이지로 돌아가기
    }
  };

  // select-artist와 select-genre 경로에서 Header와 Drawer를 숨김
  const showHeaderAndDrawer = ![
    "/select-artist",
    "/select-genre",
    "/Login",
    "/login",
    "/signup",
    "/chatmodal",
  ].includes(location.pathname);

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
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="select-artist" element={<SelectArtist />} />
          <Route path="select-genre" element={<SelectGenre />} />
          <Route path="library/*" element={<Library />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="chatmodal" element={<ChatModal />} />
        </Routes>
        <ChatButton openModal={openModal} navigate={navigate} />
        <ChatModal isOpen={modalIsOpen} closeModal={closeModal} />
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
