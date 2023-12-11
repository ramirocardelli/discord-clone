import "./styles/Chat.css";
import PictureAndState from "./PictureAndState";

function Chat({ src, name, state }) {
  const ClassName = ["online", "absent", "dont-disturb", "invisible"];
  let stateDotClassName = "state-dot ";
  stateDotClassName += ClassName[state];
  return (
    <div className="chat">
      <PictureAndState src={src} state={stateDotClassName} />
      <p className="chat-name">{name}</p>
    </div>
  );
}

export default Chat;
