import { useState } from "react";
import "./OrderPage.css";
import useFetch from "../../hooks/useFetch";
import { useTelegram } from "../../hooks/useTelegram";
import { useParams, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const OrderPage = () => {
  const params = useParams();
  const itemId = params.id;

  const navigate = useNavigate();
  const { tg, queryId } = useTelegram();
  console.log(queryId);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [flat, setFlat] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const [item] = useFetch(`${process.env.REACT_APP_BASE_URL}items/${itemId}`);

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/");
    // const formData = {
    //   itemId: item._id,
    //   itemSize: selectedSize,
    //   firstName,
    //   lastName,
    //   telephone,
    //   shippingAddress: `${country}, ${city}, ${street} ${house}, ${flat}`,
    //   queryId,
    // };

    // const response = await fetch(`${process.env.REACT_APP_BASE_URL}orders`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });

    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // } else {
    //   setFirstName("");
    //   setLastName("");
    //   setTelephone("");
    //   setCountry("");
    //   setCity("");
    //   setStreet("");
    //   setHouse("");
    //   setFlat("");
    //   setSelectedSize("");

    //   navigate("/");
    // }

    // tg.sendData(JSON.stringify(formData));
  };
  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
      {item ? (
        <>
          <div className="item_details_container">
            <div className="item_details_image_container">
              <img src={item.urls[0]} alt={item.name} />
            </div>
            <h4 className="item_title">
              {item.name} . <span className="item_price">$ {item.price}</span>
            </h4>
            <div className="item_description">{item.description}</div>
            <h4 className="select_title">Select Size:</h4>
            <div className="button_container">
              {item.itemSizes.map((size) => (
                <button
                  key={size}
                  className={`button ${
                    selectedSize === size ? "selected" : ""
                  }`}
                  onClick={() => handleSizeSelection(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <hr className="horizontal_line"></hr>
          </div>

          <h2 className="order_form_title">Order form</h2>
          <form onSubmit={handleSubmit} className="order_form">
            <label>
              First Name:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
            <label>
              Telephone:
              <input
                type="tel"
                value={telephone}
                pattern="^\+375(17|25|29|33|44)\d{7}$"
                title="Phone number must be Belarusian"
                onChange={(e) => setTelephone(e.target.value)}
                required
              />
            </label>
            <label>
              Country:
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </label>
            <label>
              City:
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </label>
            <label>
              Street:
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                required
              />
            </label>
            <label>
              House:
              <input
                type="text"
                value={house}
                onChange={(e) => setHouse(e.target.value)}
                required
              />
            </label>
            <label>
              Flat:
              <input
                type="text"
                value={flat}
                onChange={(e) => setFlat(e.target.value)}
                required
              />
            </label>
            <div className="submit_order_button_container">
              <button
                disabled={!selectedSize}
                type="submit"
                className="order_submit"
              >
                Submit Order
              </button>
            </div>
          </form>
          {/* <ToastContainer /> */}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default OrderPage;
