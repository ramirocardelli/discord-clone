import "./styles/MainBoardBottomLeft.css";
import SearchBar from "./BigSearchBar";
import Connected from "./Connected";

function MainBoardBottomLeft() {
  return (
    <div className="main-board-bottom-left">
      <SearchBar />
      <div className="connected">
        <p className="count-connected">Conectado - 10</p>
        <Connected
          src="./profile-pic.jpg"
          name="Greg"
          state={0}
          description="Jason Funderburker"
        />
        <Connected
          src="./profile-pic.jpg"
          name="Gregory"
          state={1}
          description="Mr. President"
        />
        <Connected
          src="./profile-pic.jpg"
          name="Alfred"
          state={2}
          description="Wirt"
        />
        <Connected
          src="./profile-pic.jpg"
          name="Jack"
          state={3}
          description="Dr. Cucumber"
        />
        <Connected
          src="./profile-pic.jpg"
          name="Steve"
          state={0}
          description="Skipper"
        />
        <Connected
          src="./profile-pic.jpg"
          name="Stephen"
          state={0}
          description="Benjamin Franklin"
        />
      </div>
    </div>
  );
}

export default MainBoardBottomLeft;
