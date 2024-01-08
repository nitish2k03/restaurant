import React from "react";
import { menu } from "~/data";
const MenuPage = () => {
  return (
    <div className="flex md:flex-row flex-col h-[calc(100vh-4rem)]">
      {menu.map((singleMenu) => (
        <div key={singleMenu.id} className="back">
          <div>{singleMenu.title}</div>
          <div>{singleMenu.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
