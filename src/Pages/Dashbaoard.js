import { useEffect } from "react";
import RightBar from "../parts/RightBar";
import TopBar from "../parts/TopBar";
import Overview from "../parts/Overview";
import Orders from "../parts/Orders";
import Costumers from "../parts/Costumers";
const Dashboard = () => {
  useEffect(() => {
    let list = document.querySelectorAll(".navigation li");

    function activeLink() {
      list.forEach((item) => {
        item.classList.remove("hovered");
      });
      this.classList.add("hovered");
    }

    list.forEach((item) => item.addEventListener("mouseover", activeLink));

    let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");

    if (toggle) {
      toggle.onclick = function () {
        navigation.classList.toggle("active");
        main.classList.toggle("active");
      };
    }
  }, []);
  return (
    <div className="container">
      <RightBar />
      <div className="main">
        <TopBar />
        <Overview />
        <div className="details">
          <Orders />
          <Costumers />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
