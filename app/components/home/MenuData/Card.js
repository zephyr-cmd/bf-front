"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import {
  increment,
  decrement,
  itemsIncrement,
  itemsDecrement
} from "./../../../GlobalRedux/Cart/cart";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import "./foodCart.css";

const FoodCard = ({ item, index }) => {
  const cartData = useSelector((state) => state.cart);
  const itemData = cartData.totalItems.filter((itm) => {
    console.log("itm===>", itm.name);
    console.log("item==>", item.name);
    if (item.name == itm.name) return itm
  });
  console.log("itemData", itemData);
  const [tasteOptions, setTasteOptions] = useState([]);
  const [order, setOrder] = useState({
    item: item,
    qty: itemData.length > 0 ? itemData[0].qty : 0,
    totalPrice: itemData.length > 0 ? itemData[0].totalPrice : 0,
  });
  useEffect(() => {
    setOrder({
      ...order,
      item: item,
      qty: itemData.length > 0 ? itemData[0].qty : 0,
      totalPrice: itemData.length > 0 ? itemData[0].totalPrice : 0,
    })
  }, [cartData])
  console.log("cartData", cartData);
  const dispatch = useDispatch();
  const incrementItem = () => {
    // alert("Your Item Added Successfull....Check Your Cart")
    const showToast = () => {
      toast.success('Your Item Added Successfull....Check Your Cart', {
        position: 'bottom-right', // Set the position of the toast
        autoClose: 3000, // Close the toast after 3000ms (3 seconds)
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the toast when hovering over it
        draggable: true, // Allow dragging the toast
      });
    };
    showToast();

    setOrder({
      ...item,
      qty: Number(order.qty) + Number(1),
      totalPrice: Number(order.totalPrice) + Number(item?.price),

    });
    dispatch(
      itemsIncrement({
        ...item,
        qty: Number(order.qty) + Number(1),
        totalPrice: Number(order.totalPrice) + Number(item?.price),
      })
    );
    // dispatch(increment())
  };
  const decrementItem = () => {
    if (order?.qty) {
      setOrder({
        ...item,
        qty: Number(order.qty) - Number(1),
        totalPrice: Number(order.totalPrice) - Number(item?.price),
      });
    }
    dispatch(itemsDecrement({
      ...item,
      qty: Number(order.qty) - Number(1),
      totalPrice: Number(order.totalPrice) - Number(item?.price),
    }));
  };
  useEffect(() => {
    let arr = [];
    for (let tst of item?.taste_options) {
      let tsteobj = {};
      tsteobj.key = tst;
      tsteobj.value = false;
      arr.push(tsteobj);
    }
    setTasteOptions([...arr]);
  }, []);
  const taste_option = (taste, index) => {
    return (
      <span className="checkbox_option">
        {" "}
        {taste}:{" "}
        <input
          type="checkbox"
          name={taste}
          checked={tasteOptions[index]["value"]}
          onClick={(e) => {
            for (let [idx, option] of tasteOptions.entries()) {
              if (option["key"] == taste) {
                continue;
              }
              tasteOptions.splice(idx, 1, {
                ...tasteOptions[idx],
                value: false,
              });
            }
            tasteOptions.splice(index, 1, {
              ...tasteOptions[index],
              value: e.target.checked,
            });
            setTasteOptions([...tasteOptions]);
          }}
        />
      </span>
    );
  };
  return (
    <>
      <div className=" p-1 m-1 ">
        <Card className="bg-white shadow-lg ml-9 md:ml-0 outline-none ">
          <Card.Img variant="top" src={item?.image} className="w-full h-40 object-cover" />
          <Card.Body className="px-4 py-2 h-[150px]">
            <div className="flex gap-3 justify-center">
              <div>
                <Card.Title className="text-gray-900 text-xl font-semibold">{item?.name}</Card.Title>

              </div>
              <div className="text-xl text-blue-500">${item?.price}</div>
            </div>
            <Card.Text className="text-gray-700 text-justify mb-2 ">
              {tasteOptions &&
                tasteOptions.map((taste, index) => {
                  return taste_option(taste.key, index);
                })}
            </Card.Text>
            {/* <div className="flex justify-center p-2 ">
              <button className="bg-red-300 rounded-full w-8" onClick={decrementItem}> -</button>
              <span className="text-gray-900  ">{order?.qty}</span>
              <button className="bg-red-300 rounded-full w-8 " onClick={incrementItem}> +</button>
            </div> */}
          </Card.Body>
          <button onClick={incrementItem} className="border-2 border-dotted border-red-500 bg-slate-400 hover:bg-purple-400 p-1 m-2 text-black ">Add to cart</button>

        </Card>

      </div>

      {/* <Card className="card bg-red-500">
        <Card.Img variant="top" src={item?.image} className="card_image" />
        <Card.Body>
          <Card.Title className="card_title">{item?.name}</Card.Title>
          <Card.Text className=" text-center">
            {tasteOptions &&
              tasteOptions.map((taste, index) => {
                return taste_option(taste.key, index);
              })}
          </Card.Text>
          <Button
            variant="primary"
            className="plus_minus_icon"
            onClick={decrementItem}
          >
            -
          </Button>
          <Button variant="primary" className="card_button"  onClick={incrementItem}>
            ADD TO CART {order?.qty}
          </Button>
          <Button
            variant="primary"
            className="plus_minus_icon"
            onClick={incrementItem}
          >
            +
          </Button>
        </Card.Body>
      </Card> */}
    </>
  );
};

export default FoodCard;
