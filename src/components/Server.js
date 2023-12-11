import "./styles/Server.css";

function Server(props) {
  let serverClassName = "server ";
  serverClassName += props.first ? "direct-message selected" : "";

  return (
    <div className={props.first ? "first" : ""}>
      {props.first ? <div className="selected-band"></div> : ""}
      <div className={serverClassName}>
        {props.src ? (
          <img src={props.src} alt={props.name} className="server-img" />
        ) : (
          <>{props.name[0]}</>
        )}
      </div>
    </div>
  );
}
export default Server;
