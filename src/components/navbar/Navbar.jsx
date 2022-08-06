import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CropFreeOutlinedIcon from "@mui/icons-material/CropFreeOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useContext } from "react";
import { DarkContext } from "../../context/darkContext";
import "./navbar.scss";
// import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";

const Navbar = () => {
  const { dispatch } = useContext(DarkContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <PublicOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <NightlightOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <CropFreeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              className="avatar"
              src="https://thumbs.dreamstime.com/b/darth-vader-flat-icon-star-wars-vector-illustration-isolated-white-space-character-gradient-style-design-designed-darth-vader-174034014.jpg"
              alt="user avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
