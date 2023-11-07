import { useState, useEffect, memo } from "react";
import addressess from "./servingAddres.json";
const Address = (props) => {
  const [stateServing, setStateServing] = useState([]);
  const [cityServing, setCityServing] = useState([]);
  const [localityServing, setLocalityServing] = useState([]);
  const [orderFormData, setOrderFormData] = useState({
    state: "",
    city: "",
    pinCode: "",
    locality: "",
    line1: "",
    line2: "",
    landMark: "",
    phoneNumber: "",
    street: "",
    houseNumber: "",
  });
  const [formError, setFormError] = useState(props.formError);
  console.log("formError in address-->", formError);

  const onStateSelect = (state) => {
    const cities = JSON.parse(state).city
    setCityServing([...cities]);
    setLocalityServing([...cities[0].localities]);
    setOrderFormData({ ...orderFormData, state: JSON.parse(state)?.state, city: cities[0]?.name, locality: (cities[0]).localities[0] });
  };
  const onCitySelect = (city) => {
    const localities = JSON.parse(city).localities;
    setLocalityServing([...localities]);
    setOrderFormData({ ...orderFormData, city: city?.name });


  };
  const onLocalitySelect = (locality) => {
    console.log("locality selected-->", JSON.parse(locality));
    setOrderFormData({ ...orderFormData, locality: locality });

  };
  if (props.getDataFromChild) {
    props.getDataFromChild(orderFormData);
  }
  return (
    <>
      <form>

        <div>
          <span>
            state:{" "}
            <select
              onChange={(e) => {
                onStateSelect(e.target.value);
              }}
            >
              <option disabled>Select state</option>
              {addressess.map((orderFormData, index) => {
                return <option value={JSON.stringify(orderFormData)}>{orderFormData?.state}</option>;
              })}
            </select>
            {formError.locality ? <p style={{ color: "red" }}>please enter state</p> : ""}

          </span>
          <span>
            city:{" "}
            <select
              onChange={(e) => {
                console.log("on select change--->", e.target.value);
                onCitySelect(e.target.value)
              }}
            >
              <option disabled>Select city</option>
              {cityServing && cityServing.map((city, index) => {
                return <option value={JSON.stringify(city)}>{city?.name}</option>
              })}
            </select>
            {formError.locality ? <p style={{ color: "red" }}>please enter city</p> : ""}

          </span>
          <span>
            Locality:{" "}
            <select
              onChange={(e) => {
                console.log("on select change--->", e.target.value);
                onLocalitySelect(e.target.value)
              }}
            >
              <option disabled>Select Locality</option>
              {localityServing && localityServing.map((locality, index) => {
                return <option value={JSON.stringify(locality)}>{locality}</option>
              })}
            </select>
            {formError.locality ? <p style={{ color: "red" }}>please enter locality</p> : ""}

          </span>
        </div>
        <div>
          <span>
            Address Line 1: <input type="text" onChange={(e) => {
              setOrderFormData({ ...orderFormData, line1: e.target.value })
            }} required />
            {formError.addressLine1 ? <p style={{ color: "red" }}>please enter address line 1</p> : ""}
            <br />
          </span>
          <span>
            Address Line 2: <input type="text" onChange={(e) => {
              setOrderFormData({ ...orderFormData, line2: e.target.value })

            }} required />
            {formError.addressLine2 ? <p style={{ color: "red" }}>please enter address line 2</p> : ""}
            <br />
          </span>
        </div>
        <div>
          Landmark: <input type="text" onChange={(e) => {
            setOrderFormData({ ...orderFormData, landMark: e.target.value })

          }} />
          {formError.landMark ? <p style={{ color: "red" }}>please enter landmark</p> : ""}
        </div>
        <div>
          street: <input type="text" onChange={(e) => {
            setOrderFormData({ ...orderFormData, street: e.target.value })

          }} />
          {formError.street ? <p style={{ color: "red" }}>please enter street</p> : ""}
        </div>
        <div>
          houseNumber: <input type="text" onChange={(e) => {
            setOrderFormData({ ...orderFormData, houseNumber: e.target.value })

          }} />
          {formError.houseNumber ? <p style={{ color: "red" }}>please enter houseNumber</p> : ""}
        </div>
        <div>
          pin: <input type="number" required onChange={(e) => {
            setOrderFormData({ ...orderFormData, pinCode: e.target.value })

          }} />
          {formError.pin ? <p style={{ color: "red" }}>Please enter pin</p> : ""}

        </div>
        <div>
          phoneNumber: <input type="number" required onChange={(e) => {
            setOrderFormData({ ...orderFormData, phoneNumber: e.target.value })

          }} />
          {formError.pin ? <p style={{ color: "red" }}>Please enter phoneNumber</p> : ""}

        </div>
      </form>
    </>
  );
};

export default memo(Address);
