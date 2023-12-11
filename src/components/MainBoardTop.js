import "./styles/MainBoardTop.css";
import VerticalSeparator from "./VerticalSeparator";
import FriendsButton from "./FriendsButton";

function MainBoardTop() {
  return (
    <div className="main-board-top">
      <div className="friends">
        <img className="friends-img" src="./headphones.png" alt="" />
        <p>Amigos</p>
      </div>
      <VerticalSeparator />
      <FriendsButton text="En línea" />
      <FriendsButton text="Todos" />
      <FriendsButton text="Pendiente" />
      <FriendsButton text="Bloqueado" />
      <FriendsButton text="Añadir amigo" addFriend={true} />
    </div>
  );
}

export default MainBoardTop;
