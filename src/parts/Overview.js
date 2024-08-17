import React from "react";

const Overview = () => {
  const details = [
    {
      id: 1,
      numbers: '1,504',
      CardName: 'Daily Views',
      icon: 'eye-outline'
    },
    {
      id: 2,
      numbers: '80',
      CardName: 'Sales',
      icon: 'cart-outline'
    },
    {
      id: 3,
      numbers: '210',
      CardName: 'Comments',
      icon: 'chatbubbles-outline'
    },
    {
      id: 4,
      numbers: '23,897$',
      CardName: 'Earning',
      icon: 'cash-outline'
    }
  ];
  return (
    <div>
      <div className="cardBox">
        {details.map(({ numbers, CardName, icon }) => (
          <div className="card" key={icon}>
            <div>
              <div className="numbers">{numbers}</div>
              <div className="cardName">{CardName}</div>
            </div>
            <div className="iconBx">
              <ion-icon name={icon}></ion-icon>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
