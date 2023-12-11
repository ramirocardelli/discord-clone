import "./styles/Profile.css";
import AudioConfiguration from "./AudioConfiguration";
import ProfileInfo from "./ProfileInfo";
function Profile({ src }) {
  return (
    <div className="profile">
      <ProfileInfo src={src} name="Ramiro" />
      <div className="audio-configurations">
        <AudioConfiguration src="./microphone.png" />
        <AudioConfiguration src="./headphones.png" />
        <AudioConfiguration src="./settings.png" settings={true} />
      </div>
    </div>
  );
}

export default Profile;
