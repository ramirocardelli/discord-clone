import "./styles/Chats.css";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import Item from "./Item";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <SearchBar />
      <Item src="./headphones.png" text="Amigos" />
      <Item src="./headphones.png" text="Nitro" />
      <Item src="./headphones.png" text="Tienda" />
      <div className="direct-messages">
        <p>Mensajes directos</p>
        <p className="plus">+</p>
      </div>
      <div>
        <Chat src="./profile-pic.jpg" name="Fred" state={0} />
        <Chat src="./profile-pic.jpg" name="Josh" state={1} />
        <Chat src="./profile-pic.jpg" name="Nick" state={2} />
        <Chat src="./profile-pic.jpg" name="Greg" state={3} />
      </div>
      <Profile src="profile-pic.jpg" />
    </div>
  );
}

export default Chats;
