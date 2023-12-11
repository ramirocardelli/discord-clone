import "./styles/LateralBar.css";
import Server from "./Server";
import Separator from "./Separator";

function LateralBar() {
  const servers = [
    {
      name: "Mi servidor de Discord",
    },
    {
      name: "estamos probando esto",
    },
    {
      name: "somos nosotros",
    },
    {
      name: "somos nosotros",
    },
    {
      name: "imagenes",
    },
  ];
  return (
    <div className="lateral-bar">
      <Server
        name="Mensajes directos"
        src="./discord.png"
        first={true}
        selected={true}
      />
      <Separator />
      {servers?.map((server) => (
        <Server name={server.name} src={server.src} />
      ))}
    </div>
  );
}

export default LateralBar;
