import "./styles/MainBoardBottom.css";
import MainBoardBottomLeft from "./MainBoardBottomLeft";
import MainBoardBottomRight from "./MainBoardBottomRight";

function MainBoardBottom() {
  return (
    <div className="main-board-bottom">
      <MainBoardBottomLeft />
      <MainBoardBottomRight />
    </div>
  );
}

export default MainBoardBottom;
