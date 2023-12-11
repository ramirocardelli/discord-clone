import "./styles/Connected.css";
import PictureAndState from "./PictureAndState";

function Connected({ src, name, state, description }) {
  const ClassName = ["online", "absent", "dont-disturb", "invisible"];
  let stateDotClassName = "state-dot ";
  stateDotClassName += ClassName[state];

  const States = ["online", "absent", "dont-disturb", "invisible"];
  return (
    <div className="connected-user">
      <PictureAndState src={src} state={stateDotClassName} />
      <div className="username-and-description">
        <span className="username">{name}</span>
        <span className="description">{description}</span>
      </div>
    </div>
  );
}

export default Connected;
