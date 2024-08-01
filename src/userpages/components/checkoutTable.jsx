import React, { useState } from "react";
import watch from "../../assets/air.png";

const Table = () => {
  const initialData = [
    { product: "Product A", image: watch, quantity: 10, price: 20 },
    { product: "Product B", image: watch, quantity: 15, price: 30 },
  ];

  const [data, setData] = useState(initialData);

  const handleIncrease = (index) => {
    const newData = [...data];
    newData[index].quantity += 1;
    setData(newData);
  };

  const handleDecrease = (index) => {
    const newData = [...data];
    if (newData[index].quantity > 0) {
      newData[index].quantity -= 1;
    }
    setData(newData);
  };

  const totalQuantity = data.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = data.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <table className="md:w-[700px] w-[400px] border-collapse mx-auto">
      <thead>
        <tr>
          <th className="p-2 text-center">Product</th>
          <th className="p-2 text-center">Quantity</th>
          <th className="p-2 text-center">Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border-t border-b">
            <td className="p-2 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.product}
                className="mr-5 w-[110px] h-[110px]"
              />
              <span>{item.product}</span>
            </td>
            <td className="p-2 text-center ">
              <div className="border-2 rounded-2xl w-[80px] px-4 py-2 flex justify-center items-center mx-auto">
                <button onClick={() => handleDecrease(index)} className="px-2">
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button onClick={() => handleIncrease(index)} className="px-2">
                  +
                </button>
              </div>
            </td>
            <td className="p-2 text-center">GH₵{item.price}</td>
          </tr>
        ))}
        <tr className="border-t">
          <td className="p-2 text-center"></td>
          <td className="p-2 text-center font-bold"></td>
          <td className="p-2 text-center">
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold text-[25px]">Total</span>
              <span>GH₵{totalPrice}</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
