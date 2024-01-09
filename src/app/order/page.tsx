import React from "react";
const OrderPage = () => {
  return (
    <div className="flex items-center h-[calc(100vh-4rem)] justify-center">
      <table className=" w-[90%] ">
        <thead className="">
          <tr className="text-left">
            <th className="hidden md:block  my-3">Order ID</th>
            <th className=" ">Date</th>
            <th className=" ">Price</th>
            <th className="hidden lg:block my-3">Descriptions</th>
            <th className=" ">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden lg:block py-6 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden lg:block py-6 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden lg:block py-6 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default OrderPage;
