import "./App.css";
import LateralBar from "./components/LateralBar";
import Chats from "./components/Chats";
import MainBoard from "./components/MainBoard";

function App() {
  return (
    <div className="App">
      <LateralBar />
      <Chats />
      <MainBoard />
    </div>
  );
}

export default App;
