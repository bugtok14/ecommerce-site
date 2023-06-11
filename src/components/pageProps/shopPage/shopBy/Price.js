import React from "react";
import NavTitle from "./NavTitle";

const Price = () => {
  const priceList = [
    {
      _id: 950,
      priceOne: 0.0,
      priceTwo: 500,
    },
    {
      _id: 951,
      priceOne: 501,
      priceTwo: 999,
    },
    {
      _id: 952,
      priceOne: 1000.0,
      priceTwo: 1999,
    },
    {
      _id: 953,
      priceOne: 2000,
      priceTwo: 4999,
    },
    {
      _id: 954,
      priceOne: 5000,
      priceTwo: 9999,
    },
    {
      _id: 955,
      priceOne: 10000,
      priceTwo: 20000,
    },
  ];
  return (
    <div className="cursor-pointer">
      <NavTitle title="Shop by Price" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              ₱{item.priceOne.toFixed(2)} - ₱{item.priceTwo.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
