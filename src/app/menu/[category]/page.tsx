import React from "react";
import Pizzas from "~/components/Pizzas";
import { pizzas } from "~/data";
const CategoryPage = () => {
  return (
    <div className="flex flex-wrap">
      {pizzas.map((pizza) => (
        <div
          key={pizza.id}
          className=" h-[40vh] w-[100vw] sm:w-1/2 lg:w-1/3 lg:h-[50vh]"
        >
          <Pizzas
            title={pizza.title}
            img={pizza.img}
            price={pizza.price}
            id={pizza.id}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
