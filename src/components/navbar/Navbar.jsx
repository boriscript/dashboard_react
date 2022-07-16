import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        Navbar Wrapper
        <div className="search">
          search bar
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <PublicOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <NightlightOutlinedIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
