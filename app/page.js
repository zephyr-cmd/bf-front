"use client"
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import TabsMenu from "./components/home/MenuData/TabsMenu";
import SideBar from "./components/home/SideBar/Sidebar"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Banner from "./banner"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  const [showSideBar, setShowSideBar] = useState(false);
  const cartData = useSelector(state => state.cart);
  console.log("carData in bell icon-->", cartData);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>



      <div>
        <div className=" flex justify-between bg-[#a264ea] p-2 sticky-top  ">
          <div className=" font-bold font-serif  text-white text-shadow-lg ">
            <div className="pt-2 pl-12">
              {/* <img src={"img_girl.jpg"} alt="image girl" /> */}
              BACHELOR&apos;S FOOD
            </div>

          </div>
          <ToastContainer />
          <div className=" flex gap-2 mr-2 p-1">
            <button type="button" class="btn  position-relative" onClick={handleShow}>
              <img style={{ width: "20px" }} src="/icons/cart-fill.svg" onClick={() => {
                setShowSideBar(true)
              }} />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartData?.totalQuantity}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>

          </div>

          <Offcanvas show={show} onHide={handleClose} backdrop="static">
            <Offcanvas.Header closeButton className="bg-blue-300 ">
              <Offcanvas.Title >
                <div className="font-bold     ">BACHELOR&apos;S FOOD</div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <SideBar />
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <div className="main_body">
          <TabsMenu />
        </div>

      </div>



    </>
  );
}
