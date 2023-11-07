import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Address from "./Address";
import { submitOrderApi } from "./../../../api/order"

const AddressModal = (props) => {
  const token = localStorage.getItem("token");
  const orderItems = useSelector((state) => state.cart)
  // const [validate,setValid]=useState(true);
  const [show, setShow] = useState(props.addressModal);
  const [formError, setFormError] = useState({
    state: false,
    city: false,
    pinCode: false,
    locality: false,
    line1: false,
    line2: false,
    landMark: false,
    phoneNumber: false,
    street: false,
    houseNumber: false,
  });
  const handleClose = () => {
    props.setAddressModal(false);
    setShow(false);
  };
  let addressData;
  const getDataFromChild = (data, formErrorData, setFormErrorFunc) => {
    addressData = data;
    // formError = formErrorData
    // setFormError=setFormErrorFunc;
    console.log("setFormError-->", setFormError)

  };
  const onSubmit = async () => {
    let formValid = true;
    const fieldsToBeValidated = [
      "state",
      "city",
      "pinCode",
      "line1",
      "line2",
      "locality",
      "phoneNumber",
      "street",
      "houseNumber"
    ];
    console.log("addressData on submit--->", addressData);
    for (let key of Object.keys(addressData)) {
      if (fieldsToBeValidated.includes(key) && addressData[key] == "") {
        console.log("formError in onSubmit --->", formError)
        console.log("key in objects---->", key);
        formValid = false;
        setFormError({ ...formError, key: true })
      } else {
        setFormError({ ...formError, key: false })
      }
    }
    if (formValid) {
      console.log("formValidated successfully---->");
      let res = await submitOrderApi({ "address": addressData, "order": orderItems });
      console.log("res in submit order api--->", res);
      if (res?.data?.status == 201 || res?.data?.status == 200) {
        handleClose();
      }
    } else {
      console.log("form is invalid---->");
    }
  };
  const handleShow = () => setShow(true);
  return (
    <>
      {token && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="login_title">Address</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Address getDataFromChild={getDataFromChild} formError={formError} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default AddressModal;
