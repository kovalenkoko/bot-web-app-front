import React, { useState } from "react";
import "./Item.css";
import { useNavigate } from "react-router";

function Item({ item }) {
  const navigate = useNavigate();

  const { name, urls, price, _id } = item;

  const onItemDetailsHandler = (event) => {
    const itemsId = event.currentTarget.id;
    navigate(`/item-details/${itemsId}`);
  };

  return (
    <div className="item" id={_id} onClick={onItemDetailsHandler}>
      <div className="image_container">
        <img src={urls[0]} alt={name} />
      </div>
      <h4 className="item_title">
        {name} . <span className="item_price">$ {price}</span>
      </h4>
    </div>
  );
}

export default Item;
