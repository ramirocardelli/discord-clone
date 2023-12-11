import "./styles/Item.css";

function Item({ src, text }) {
  return (
    <div className="item">
      <img src={src} alt="" className="item-img" />
      <p className="item-text">{text}</p>
    </div>
  );
}

export default Item;
