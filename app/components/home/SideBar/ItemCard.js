import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  itemsIncrement,
  itemsDecrement,
} from "./../../../GlobalRedux/Cart/cart";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import "./itemCard.css";
const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  console.log("item inside the itemCard--->", item)
  const incrementItem = () => {
    //   setOrder({
    //     ...item,
    //     qty: Number(order.qty) + Number(1),
    //     totalPrice: Number(order.totalPrice) + Number(item?.price),
    //   });
    dispatch(
      itemsIncrement({
        ...item,
        qty: Number(item.qty) + Number(1),
        totalPrice: Number(item.totalPrice) + Number(item?.price),
      })
    );
    // dispatch(increment())
  };
  const decrementItem = () => {
    if (item?.qty) {
      // setOrder({
      //   ...item,
      //   qty: Number(order.qty) - Number(1),
      //   totalPrice: Number(order.totalPrice) - Number(item?.price),
      // });
      dispatch(itemsDecrement({
        ...item,
        qty: Number(item.qty) - Number(1),
        totalPrice: Number(item.totalPrice) - Number(item?.price),
      }));
    }

  };
  return (
    <>
      <div className=" bg-slate-400 border-2 p-2  ">
        <div className="flex justify-between">
          <div >
            <div className="">
              <span ><span className="font-bold text-blue-600">Item :</span> {item?.name}</span><br /></div>
            <span><span className="font-bold text-blue-600">Quantity :</span> {item?.qty}</span>

          </div>
          <div className="flex gap-2">

            <div>
              <button className="bg-red-500 rounded-full w-7 h-7 font-bold hover:bg-purple-400" onClick={decrementItem}> -</button>

            </div>


            <div>
              <button className="bg-red-500 rounded-full w-7 h-7 font-bold hover:bg-purple-400" onClick={incrementItem}> +</button>

            </div>
          </div>
        </div>
        <span>Price :&#8377; {item?.totalPrice}</span>
      </div>
    </>
  );
};

export default ItemCard;
