import { useState } from "react";
import "./OrderPage.css";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router";

const OrderPage = () => {
  const params = useParams();
  const itemId = params.id;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [flat, setFlat] = useState("");

  const [item] = useFetch(`${process.env.REACT_APP_BASE_URL}items/${itemId}`);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      telephone,
      country,
      city,
      street,
      house,
      flat,
    });
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
            <hr class="horizontal_line"></hr>
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
              <button type="submit" className="order_submit">
                Submit Order
              </button>
            </div>
          </form>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default OrderPage;
