import { useState } from "react";
import Dock from "../../components/Dock";
import ModalAvatar from "../../components/ModalAvatar";
import ModalFacetime from "../../components/ModalFacetime";

const DesktopMode = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleModalOpen = (newState) => {
    setIsModalOpen(newState);
  };

  const handleModalType = (type) => {
    setModalType(type);
  };

  return (
    <div className="desktop-container">
      {/* <MenuBar /> */}
      <Dock isModalOpen={handleModalOpen} modalType={handleModalType} />
      {modalType === "avatar" && (
        <ModalAvatar isOpen={isModalOpen} isModalOpen={handleModalOpen} />
      )}
      {modalType === "facetime" && (
        <ModalFacetime isOpen={isModalOpen} isModalOpen={handleModalOpen} />
      )}
    </div>
  );
};

export default DesktopMode;
