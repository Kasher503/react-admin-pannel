import React from "react";

const Orders = () => {
  const Td = [
    { Option: "Name" },
    { Option: "Price" },
    { Option: "Payment" },
    { Option: "Status" },
  ];
  const orders = [
    {
      name: "Star Refrigerator",
      price: "$1200",
      payment: "Paid",
      status: "Delivered",
    },
    {
      name: "Dell Laptop",
      price: "$110",
      payment: "Due",
      status: "Pending",
    },
    {
      name: "Apple Watch",
      price: "$1200",
      payment: "Paid",
      status: "Return",
    },
    {
      name: "Addidas Shoes",
      price: "$620",
      payment: "Due",
      status: "InProgress",
    },
    {
      name: "Star Refrigerator",
      price: "$1200",
      payment: "Paid",
      status: "Delivered",
    },
    {
      name: "Dell Laptop",
      price: "$110",
      payment: "Due",
      status: "Pending",
    },
    {
      name: "Apple Watch",
      price: "$1200",
      payment: "Paid",
      status: "Return",
    },
    {
      name: "Addidas Shoes",
      price: "$620",
      payment: "Due",
      status: "InProgress",
    },
  ];
  return (
    <div>
      <div className="recentOrders">
        <div className="cardHeader">
          <h2>Recent Orders</h2>
          <a href="#" className="btn">
            View All
          </a>
        </div>

        <table>
          <thead>
            <tr>
              {Td.map(({ index, Option }) => (
                <td key={index}>{Option}</td>
              ))}
            </tr>
          </thead>

          <tbody>
            {orders.map(({ name, price, payment, status, index }) => (
              <tr key={index}>
                <td>{name}</td>
                <td>{price}</td>
                <td>{payment}</td>
                <td>
                  <span className={`status ${status.toLowerCase()}`}>{status}</span>
                </td>
              </tr>
            ))};
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
