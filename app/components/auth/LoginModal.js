import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Login from "./Login";
import "./loginModal.css";
function LoginModal(props) {
  const token = JSON.parse(localStorage.getItem("token"));

  const [show, setShow] = useState(props.loginModal);

  const handleClose = () => {
    setShow(false);
    props.setLoginModal(false);
  };
  const handleShow = () => setShow(true);
  let onSubmitLogin;
  const loginFunc = (login) => {
    onSubmitLogin = login;
  };
  const onSubmit = async () => {
    const res = await onSubmitLogin();
    if (res?.data?.status == 200 || res?.data?.status == 201) {
      handleClose();
    }
  };
  return (
    <>
      {!token && <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="login_title">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login loginFunc={loginFunc} handleClose={handleClose} />
        </Modal.Body>

      </Modal>}
    </>
  );
}

export default LoginModal;
