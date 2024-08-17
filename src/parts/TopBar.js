import React from "react";
import image1 from "../assets/imgs/customer01.jpg";

const TopBar = () => {
  return (
    <div>
      <div className="topbar">
        <div className="toggle">
          <ion-icon name="menu-outline"></ion-icon>
        </div>

        <div className="search">
          <label>
            <input type="text" placeholder="Search here" />
            <ion-icon name="search-outline"></ion-icon>
          </label>
        </div>

        <div className="user">
          <img src={image1} alt="User" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
