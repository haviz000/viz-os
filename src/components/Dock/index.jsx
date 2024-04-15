import "./index.css";
import AvatarImage from "./assets/avatar.jpg";
import FacetimeIcon from "./assets/facetime.png";
import MessagesIcon from "./assets/messages.png";
import MusicIcon from "./assets/music.png";
import TrashIcon from "./assets/trash.png";
import ProjectIcon from "./assets/project.png";

import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Dock = ({ isModalOpen, modalType }) => {
  const [isDevHovered, setIsDevHovered] = useState(false);
  const [isMessagesHovered, setIsMessagesHovered] = useState(false);
  const [isFacetimeHovered, setIsFacetimeHovered] = useState(false);
  const [isMusicHovered, setIsMusicHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);
  const [isProjectHovered, setIsProjectHovered] = useState(false);

  const handleMouseEnter = ( type ) => {
    switch (type) {
      case "dev":
        setIsDevHovered(true);
        break;
      case "messages":
        setIsMessagesHovered(true);
        break;
      case "facetime":
        setIsFacetimeHovered(true);
        break;
      case "music":
        setIsMusicHovered(true);
        break;
      case "trash":
        setIsTrashHovered(true);
        break;
      case "project":
        setIsProjectHovered(true);
        break;
      default:
        break;
    }
  };

  const handleMouseLeave = (type) => {
    switch (type) {
      case "dev":
        setIsDevHovered(false);
        break;
      case "messages":
        setIsMessagesHovered(false);
        break;
      case "facetime":
        setIsFacetimeHovered(false);
        break;
      case "music":
        setIsMusicHovered(false);
        break;
      case "trash":
        setIsTrashHovered(false);
        break;
      case "project":
        setIsProjectHovered(false);
        break;
      default:
        break;
    }
  };




  const handleClickAvatar = () => {
    isModalOpen(true);
    modalType("avatar");
  };

  const handleClickFacetime = () => {
    isModalOpen(true);
    modalType("facetime");
  };

  const handleClickProject = () => {
    isModalOpen(true);
    modalType("project");
  };

  const handleClickMessages = () => {
    window.open("https://ngl.link/haviz.tasmara", "_blank");
  };

  const handleClickTrash = () => {
    window.open("https://www.instagram.com/stateofisrael", "_blank");
  };

  const handleClickMusic = () => {
    window.open('https://open.spotify.com/playlist/4mm3x2M7S5tAcTy43fGMvI?si=73bcaca6dfe64335', "_blank");
  };
  return (
    <div className="dock">
      <div className="dock-container">
        <li
          className="li-1"
          onClick={handleClickAvatar}
          onMouseEnter={() => handleMouseEnter("dev")}
          onMouseLeave={() => handleMouseLeave("dev")}
        >
          <div
            className="name"
            style={{ visibility: isDevHovered ? "visible" : "hidden" }}
          >
            About Dev
          </div>
          <img
            className="ico"
            style={{ borderRadius: "35%" }}
            src={AvatarImage}
            alt="Avatar"
          />
        </li>
        <li
          className="li-1"
          onMouseEnter={() => handleMouseEnter("project")}
          onMouseLeave={() => handleMouseLeave("project")}
          onClick={handleClickProject}
        >
          <div
            className="name"
            style={{ visibility: isProjectHovered ? "visible" : "hidden" }}
          >
            My Project
          </div>
          <img
            className="ico"
            style={{ borderRadius: "35%" }}
            src={ProjectIcon}
            alt="Project"
          />
        </li>
        <li
          className="li-8"
          onMouseEnter={() => handleMouseEnter("messages")}
          onMouseLeave={() => handleMouseLeave("messages")}
        >
          <div
            className="name"
            style={{ display: isMessagesHovered ? "block" : "none" }}
          >
            ask me!
          </div>
          <img
            className="ico"
            src={MessagesIcon}
            alt="messages"
            onClick={handleClickMessages}
          />
        </li>
        <li
          className="li-9"
          onMouseEnter={() => handleMouseEnter("facetime")}
          onMouseLeave={() => handleMouseLeave("facetime")}
        >
          <div
            className="name"
            style={{ display: isFacetimeHovered ? "block" : "none" }}
          >
            Capture your self
          </div>
          <img
            className="ico"
            src={FacetimeIcon}
            alt="faceTime"
            onClick={handleClickFacetime}
          />
        </li>
        <li
          className="li-10"
          onMouseEnter={() => handleMouseEnter("music")}
          onMouseLeave={() => handleMouseLeave("music")}
        >
          <div
            className="name"
            style={{ display: isMusicHovered ? "block" : "none" }}
          >
            my playlist
          </div>
          <img className="ico" src={MusicIcon} alt="music" onClick={handleClickMusic}/>
        </li>
        <li
          className="li-bin li-15"
          onMouseEnter={() => handleMouseEnter("trash")}
          onMouseLeave={() => handleMouseLeave("trash")}
        >
          <div
            className="name"
            style={{ display: isTrashHovered ? "block" : "none" }}
          >
            will redirect you to the fuck*n trash!
          </div>
          <img className="ico ico-bin" src={TrashIcon} alt="trash" onClick={handleClickTrash} />
        </li>
      </div>
    </div>
  );
};

export default Dock;
