import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutLinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./new.scss";

const New = ({ inputs, title }) => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="Empty avatar"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutLinedIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="juana_doe" />
              </div>
              <div className="formInput">
                <label>Name & Surname</label>
                <input type="text" placeholder="Juana Doe" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="juana_doe@gmail.com" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="+54 9 15 1234-6789" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Calle Falsa 123" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="Argentine" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
