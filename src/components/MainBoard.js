import "./styles/MainBoard.css";
import MainBoardTop from "./MainBoardTop";
import MainBoardBottom from "./MainBoardBottom";

function MainBoard() {
  return (
    <div className="main-board">
      <MainBoardTop />
      <MainBoardBottom />
    </div>
  );
}

export default MainBoard;
