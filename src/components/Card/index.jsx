import "./index.css";

// eslint-disable-next-line react/prop-types
const Card = ({ title, image, desc, linkDemo, linkCode }) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return (
    <div className={`container-card ${isMobile ? 'mobile-mode' : ''}`}>
      <img
        src={image}
        alt={image}
        style={{ width: "55px", height: "55px", borderRadius: "10%" }}
      />
      <div className="container-text">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className="container-link">
        <div className="container-text-link">
          {linkDemo !== "" && (
            <a href={linkDemo} target="_target" className="button-demo">
              Demo
            </a>
          )}
          <a href={linkCode} target="_blank" className="button-code">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
