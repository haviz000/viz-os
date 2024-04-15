import "./index.css";

const MenuBar = () => {
  function getCurrentDateTime() {
    const options = {
      weekday: "short",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    const now = new Date();
    let dateTimeString = now.toLocaleString("en-US", options);
    dateTimeString = dateTimeString
      .replace(",", "")
      .replace(" PM", "")
      .replace(" AM", "");
    return dateTimeString;
  }

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const currentDateTime = getCurrentDateTime();
  return (
    <div className={`menu-bar ${isMobile ? 'mobile-mode' : ''}`}>
      <div className="left">
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="running-cat"></div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="menu-time">{currentDateTime}</div>
      </div>
    </div>
  );
};

export default MenuBar;
