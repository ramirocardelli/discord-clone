import { useState } from "react";
import "./styles/AudioConfiguration.css";

function AudioConfiguration({ src, settings }) {
  const [clicked, setClicked] = useState(false);

  const clickeado = () => {
    setClicked(!clicked);
  };

  let crossed = clicked ? "crossed" : "";
  return (
    <div className="audio-configuration" onClick={clickeado}>
      <img src={src} alt="" className="audio-configuration-img" />
      {!settings ? <div className={crossed}></div> : <></>}
    </div>
  );
}

export default AudioConfiguration;
