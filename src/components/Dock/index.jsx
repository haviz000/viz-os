import "./index.css";

// eslint-disable-next-line react/prop-types
const Dock = ({ isModalOpen }) => {
  const handleClick = () => {
    isModalOpen(true);
  };
  return (
    <div className="dock">
      <div className="dock-container">
        <li className="li-1" onClick={handleClick}>
          <img
            className="ico"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png"
            alt=""
          />
        </li>
        <li className="li-2">
          <img
            className="ico"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ff3bafbac60495771_siri.png"
            alt=""
          />
        </li>
        <li className="li-3">
          <img
            className="ico"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853943597517f128b9b4_launchpad.png"
            alt=""
          />
        </li>
        <li className="li-4">
          <img
            className="ico"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853743597518c528b9b3_contacts.png"
            alt=""
          />
        </li>
        <li className="li-5">
          <img
            className="ico"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c849ec3735b52cef9_notes.png"
            alt=""
          />
        </li>
        <li className="li-6">
          <img
            className="ico"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853d44d99641ce69afeb_reminders.png"
            alt=""
          />
        </li>
        <li className="li-7">
          <img
            className="ico"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c55558a2e1192ee09_photos.png"
            alt=""
          />
        </li>
        <li className="li-8">
          <img
            className="ico"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853a55558a68e192ee08_messages.png"
            alt=""
          />
        </li>
        <li className="li-9">
          <img
            className="ico"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708537f18e2cb27247c904_facetime.png"
            alt=""
          />
        </li>
        <li className="li-10">
          <img
            className="ico"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ba0782d6ff2aca6b3_music.png"
            alt=""
          />
        </li>
        <li className="li-11">
          <img
            className="ico"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853cc718ba9ede6888f9_podcasts.png"
            alt=""
          />
        </li>
        <li className="li-12">
          <img
            className="ico"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708540dd82638d7b8eda70_tv.png"
            alt=""
          />
        </li>
        <li className="li-12">
          <img
            className="ico"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853270b5e2ccfd795b49_appstore.png"
            alt=""
          />
        </li>
        <li className="li-14">
          <img
            className="ico"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ddd826358438eda6d_safari.png"
            alt=""
          />
        </li>
        <li className="li-bin li-15">
          <img
            className="ico ico-bin"
            src="https://findicons.com/files/icons/569/longhorn_objects/128/trash.png"
            alt=""
          />
        </li>
      </div>
    </div>
  );
};

export default Dock;
