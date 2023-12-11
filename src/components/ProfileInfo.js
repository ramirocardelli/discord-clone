import { useState } from "react";
import "./styles/ProfileInfo.css";
import PictureAndState from "./PictureAndState";
function ProfileInfo({ name, src }) {
  const Visibility = ["En línea", "Ausente", "No molestar", "Invisible"];
  const ClassName = ["online", "absent", "dont-disturb", "invisible"];
  const [state, setState] = useState(0);

  const changeState = () => {
    let newState = (state + 1) % Visibility.length;
    setState(newState);
  };

  let stateDotClassName = "state-dot ";
  stateDotClassName += ClassName[state];

  return (
    <div className="profile-info" onClick={changeState}>
      <PictureAndState src={src} state={stateDotClassName} />
      <div className="profile-name-and-state">
        <p className="profile-name">{name}</p>
        <p className="profile-state">{Visibility[state]}</p>
      </div>
    </div>
  );
}

export default ProfileInfo;
