import { useState } from "react";
import Dock from "../../components/Dock";
import ModalAvatar from "../../components/ModalAvatar";
import ModalFacetime from "../../components/ModalFacetime";
import ModalProject from "../../components/ModalProject";
import MenuBar from "../../components/MenuBar";

const DesktopMode = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  console.log(modalType);

  const handleModalOpen = (newState) => {
    setIsModalOpen(newState);
  };

  const handleModalType = (type) => {
    setModalType(type);
  };

  return (
    <div className="desktop-container">
      {/* <MenuBar /> */}
      <MenuBar />
      <Dock isModalOpen={handleModalOpen} modalType={handleModalType} />
      {modalType === "avatar" && (
        <ModalAvatar isOpen={isModalOpen} isModalOpen={handleModalOpen} />
      )}
      {modalType === "facetime" && (
        <ModalFacetime isOpen={isModalOpen} isModalOpen={handleModalOpen} modalType={handleModalType} />
      )}
      {
        modalType === "project" && (
          <ModalProject isOpen={isModalOpen} isModalOpen={handleModalOpen} />
        )
      }
      {
        modalType === "default" && null
      }
    </div>
  );
};

export default DesktopMode;
