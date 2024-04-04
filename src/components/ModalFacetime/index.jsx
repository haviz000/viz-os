import { useCallback, useEffect, useRef, useState } from "react";
import "./index.css";
import Webcam from "react-webcam";
import CameraIcon from "./assets/camera.png";
import RefreshIcon from "./assets/refresh.png";
import CloseIcon from "../ModalAvatar/assets/close.png";
import MinimizeIcon from "../ModalAvatar/assets/minimize.png";
import MaximizeIcon from "../ModalAvatar/assets/maximize.png";

const videoConstraints = {
  width: 540,
  facingMode: "environment",
};

// eslint-disable-next-line react/prop-types
const ModalFacetime = ({ isOpen, isModalOpen }) => {
  console.log(isOpen);
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);
  const [isCaptured, setIsCaptured] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      const stopVideo = () => {
        if (webcamRef.current) {
          const mediaStream = webcamRef.current.stream;
          console.log(webcamRef.current);
          if (mediaStream) {
            console.log(mediaStream);
            mediaStream.getTracks().forEach(track => track.stop());
          }
        }
      };

      stopVideo();
    }
  }, [isOpen]);


  const handleMinimize = () => {
    isModalOpen(false);
  };

  const handleCloseModal = () => {
    isModalOpen(false);
  };

  useEffect(() => {
    if (url) {
      setIsCaptured(true);
    }

    setTimeout(() => {
      setIsCaptured(false);
    }, 1000);
  }, [url]);

  const capturePhoto = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };

  return (
    <div
      className="ModalFacetime"
      style={{
        display: isOpen ? "flex" : "none",
      }}
    >
      <div className="webcam-container">
        {url ? (
          <div className="screenshot">
            <img src={url} alt="Screenshot" />
          </div>
        ) : (
          <Webcam
            ref={webcamRef}
            audio={true}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            onUserMedia={onUserMedia}
          />
        )}
        <div className="button-photo">
          <div className="container-icon">
            <img src={CloseIcon} onClick={handleCloseModal} />
            <img src={MinimizeIcon} onClick={handleMinimize} />
            <img src={MaximizeIcon} onClick={() => alert("can't maximize this camera")} />
          </div>
          {isCaptured && <p className="captured">Captured !</p>}
          <div className="icon-wrapper">
            <img
              src={CameraIcon}
              onClick={capturePhoto}
              style={{ width: "30px", height: "30px" }}
            />
            <img
              src={RefreshIcon}
              onClick={() => setUrl(null)}
              style={{ width: "30px", height: "30px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFacetime;
