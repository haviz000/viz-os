import "./index.css";
import CloseIcon from "./assets/close.png";
import MinimizeIcon from "./assets/minimize.png";
import MaximizeIcon from "./assets/maximize.png";
import LinkedinIcon from "./assets/linkedin.png";
import GithubIcon from "./assets/github.png";
import MediumIcon from "./assets/medium.png";
import Photo from "./assets/photo.jpg";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ModalAvatar = ({ isOpen, isModalOpen }) => {
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

  return (
    <div
      style={{
        display: isOpen ? "flex" : "none",
        width: isMaximized ? "100%" : "500px",
        height: isMaximized ? "100%" : "320px",
      }}
      className="ModalAvatar"
    >
      <div className="container-avatar">
        <div className="container-sidebar">
          <div className="container-icon">
            <img src={CloseIcon} onClick={handleCloseModal} />
            <img src={MinimizeIcon} onClick={handleMinimize} />
            <img src={MaximizeIcon} onClick={handleMaximize} />
          </div>
          <div className="sidebar" style={{paddingTop: isMaximized && '10px'}}>
            <div className="item1">
              <a
                href="https://www.linkedin.com/in/haviz-tasmara/"
                target="_blank"
                className="link"
              >
                <img src={LinkedinIcon} /> Linkedin
              </a>
            </div>
            <div className="item2">
              <a
                href="https://github.com/haviz000"
                target="_blank"
                className="link"
              >
                <img src={GithubIcon} /> Github
              </a>
            </div>
            <div className="item3">
              <a
                href="https://medium.com/@haviztasmara000"
                target="_blank"
                className="link"
              >
                <img src={MediumIcon} /> Medium
              </a>
            </div>
          </div>
        </div>
        <div className="container-content">
          <div className="content">
            <img src={Photo} alt="avatar" />
            <div className="content-text">
              <h1>Hi I&apos;m Haviz</h1>
              <p>
                Front End Web Developer using ReactJS for almost 2 years.
                Familiar with JavaScript, Typescript, HTML, CSS, and also
                Figma.Currently learning about Cyber Security and Backend. I am
                always eager to learn new programming languages and other skills
                to further enhance my knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAvatar;
