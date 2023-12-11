import "./styles/PictureAndState.css";

function PictureAndState({ src, state }) {
  return (
    <div className="picture-and-state">
      <img src={src} alt="" className="profile-pic" />
      <div className={state}></div>
    </div>
  );
}

export default PictureAndState;
