// import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import "./sidebar.css"
import ItemCard from "./ItemCard"
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import LoginModal from '../../auth/LoginModal';
import Login from '../../auth/Login';
import AddressModal from '../../address/AddressModal';

const SideBar = (props) => {
    const token = localStorage.getItem('token');
    const orderData = useSelector((state) => state.cart);
    const [loginModal, setLoginModal] = useState(false);
    const [addressModal, setAddressModal] = useState(false);
    console.log("orderData", orderData)

    return (
        <>

            <div className='' >
                <div>CART ITEMS</div>

                <br />
                <div className='bg-red-400 '>
                    {orderData?.totalItems && orderData.totalItems.map((item, index) => {
                        return (
                            <>
                                <ItemCard item={item} />
                            </>
                        )
                    })}
                </div>
                <div className='m-2'><br />
                    Total Price:&#8377; {orderData?.totalPrice}
                </div>
                <button className='bg-red-500 p-2 m-2 text-white
                '  onClick={() => {
                        token ? setAddressModal(true) : setLoginModal(true)

                    }}>Proceed to checkout</button>

                {
                    addressModal && <AddressModal addressModal={addressModal} setAddressModal={setAddressModal} />
                }
                {
                    loginModal && (
                        <>
                            <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
                        </>
                    )
                }
            </div>
        </>
    )
}

export default SideBar;
