import React from "react";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="avatar"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Juana Doe</h1>
                <div className="detailItem">
                  <div className="itemKey">Email:</div>
                  <div className="itemValue">juanadoe@gmail.com</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Phone:</div>
                  <div className="itemValue">+54 9 15 1234-6789</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Address:</div>
                  <div className="itemValue">Calle Falsa 123</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Country:</div>
                  <div className="itemValue">Argentine</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={2 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
