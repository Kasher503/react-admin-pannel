import React from "react";

const RightBar = () => {
  const Bar = [
    { id: 1, option: "Brand Logo", icon: "logo-apple" },
    { id: 2, option: "Dashboard", icon: "eye-sharp" }
  ];
  return (
    <div className="navigation">
      <ul>
        {Bar.map(({ option, icon }) => (
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name={icon}></ion-icon>
              </span>
              <span className="title">{option}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightBar;
