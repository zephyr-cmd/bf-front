"use client";
import { useState, useEffect } from "react";
import "./lunch.css"
import menuData from "../breakfast/breakfast.json";
import FoodCard from "../Card";
const LunchMenu = (props) => {
  console.log("inside lunch menu--->");

  return (
    <>
      {menuData.length > 0 &&
        menuData.map((item, index) => {
          return <div className="breakfast_menu_container">
            <FoodCard item={item} index={index} />
          </div>

        })}
    </>
  )
}

export default LunchMenu;