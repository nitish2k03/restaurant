import React from "react";
import Pizzas from "~/components/Pizzas";
import { Product } from "~/data";
const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const getData = async (category: string) => {
    const res = await fetch(
      `http://localhost:3000/api/products?cat=${category}`
    );
    if (!res.ok) {
      return new Error("Failed");
    }
    return res.json();
  };
  const pizzas: Product[] = await getData(params.category);
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
