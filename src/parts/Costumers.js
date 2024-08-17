import React from "react";
import image1 from "../assets/imgs/customer01.jpg";
import image2 from "../assets/imgs/customer02.jpg";

const Customers = () => {
  const data = [
    { imgSrc: image2, name: 'David', location: 'Italy' },
    { imgSrc: image1, name: 'Amit', location: 'India' },
    { imgSrc: image2, name: 'Steve', location: 'Japan' },
    { imgSrc: image1, name: 'Cris', location: 'China' },
    { imgSrc: image2, name: 'Ahmad', location: 'Lahore' },
    { imgSrc: image1, name: 'Smith', location: 'Canada' },
  ];

  return (
    <div>
      <div className="recentCustomers">
        <div className="cardHeader">
          <h2>Recent Customers</h2>
        </div>
        <table>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td width="60px">
                  <div className="imgBx">
                    <img src={item.imgSrc} alt="Customer" />
                  </div>
                </td>
                <td>
                  <h4>
                    {item.name} <br />
                    <span>{item.location}</span>
                  </h4>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
