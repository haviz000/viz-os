import { useState } from "react";
import Dock from "../../components/Dock";
import ModalFinder from "../../components/ModalFinder";

const DesktopMode = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = (newState) => {
    setIsModalOpen(newState);
  };
  return (
    <div className="desktop-container">
      {/* <MenuBar /> */}
      <Dock isModalOpen={handleModalOpen}/>
      <ModalFinder isOpen={isModalOpen}/>
    </div>
  );
};

export default DesktopMode;
