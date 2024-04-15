import "./index.css";
import CloseIcon from "../ModalAvatar/assets/close.png";
import MinimizeIcon from "../ModalAvatar/assets/minimize.png";
import MaximizeIcon from "../ModalAvatar/assets/maximize.png";
import PasarJayaLogo from "./assets/pasarjaya.png";
import SpotifyLogo from "./assets/Spotify.png";
import LaravelLogo from "./assets/laravel.png";
import ReactLogo from "./assets/react.png";
import VueLogo from "./assets/vue.png";
import { useState } from "react";
import Card from "../Card";

// eslint-disable-next-line react/prop-types
const ModalProject = ({ isOpen, isModalOpen }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = () => {
    setIsMaximized(true);
  };

  const handleMinimize = () => {
    if (!isMaximized) {
      isModalOpen(false);
    }
    setIsMaximized(false);
  };

  const handleCloseModal = () => {
    isModalOpen(false);
  };

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <div
      style={{
        visibility: isOpen ? "visible" : "hidden",
      }}
      className={`ModalProject ${isMobile ? 'mobile-mode' : ''}`}
    >
      <div className="container-icon-project">
        <img src={CloseIcon} onClick={handleCloseModal} alt="close" />
        <img src={MinimizeIcon} onClick={handleMinimize} alt="minimize" />
        <img src={MaximizeIcon} onClick={handleMaximize} alt="maximize" />
      </div>
      <div className="container-list-card">
        <Card
          title={"Pasar Jaya"}
          desc={"E-commerce website for Pasar Jaya, a local market in Jakarta."}
          image={PasarJayaLogo}
          linkDemo="https://pasar-jaya.vercel.app/"
          linkCode="https://github.com/Yudistir4/pasar-jaya"
        />
        <Card
          title={"Mygram Rest API"}
          desc={"Rest API for Mygram, a social media platform. Built with Golang."}
          image={"https://pkg.go.dev/static/shared/logo/go-white.svg"}
          linkDemo=""
          linkCode="https://github.com/haviz000/MyGram-RestAPI"
        />
        <Card
          title={"Spotiviz App"}
          desc={"Application that integrate with spotify, Built with ReactJS and handle state management with redux."}
          image={SpotifyLogo}
          linkDemo="https://spotiviz.vercel.app/"
          linkCode="https://github.com/haviz000/SpotivizApp"
        />
        <Card
          title={"Yuk-Kerja App"}
          desc={"Create application for job seeker and job provider with React JS and Firebase."}
          image={ReactLogo}
          linkDemo={""}
          linkCode={"https://github.com/haviz000/yuk-kerja"}
        />
        <Card
          title={"I-learning App"}
          desc={"Create i-learning app with php laravel and database with mysql"}
          image={LaravelLogo}
          linkDemo={""}
          linkCode={"https://github.com/haviz000/i-learning"}
        />
        <Card
          title={"Order Food App"}
          desc={"Create order food app with vue js and database with mysql"}
          image={VueLogo}
          linkDemo={""}
          linkCode={"https://github.com/haviz000/Order-Food-Vue-Js"}
        />
      </div>
    </div>
  );
};

export default ModalProject;
