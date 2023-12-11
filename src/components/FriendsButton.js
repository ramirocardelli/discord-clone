import "./styles/FriendsButton.css";

function FriendsButton({ text, addFriend }) {
  let className = "friends-button ";
  className += addFriend ? "add-friend" : "";

  return <div className={className}>{text}</div>;
}

export default FriendsButton;
