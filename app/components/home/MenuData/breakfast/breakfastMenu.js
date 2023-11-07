import { useState, useEffect } from "react";
import FoodCard from "../Card";
import "./breakfast.css"
import menuData from "./breakfast.json" assert { type: "json" };

const BreakfastMenu = (props) => {
  console.log("inside breakfast menu--->", menuData);
  return (
    <>
        {menuData.length > 0 &&
          menuData.map((item, index) => {
            return <div className="breakfast_menu_container">
              <FoodCard item={item} index={index}/>
            </div>
            
          })}
      
    </>
  );
};

export default BreakfastMenu;
