/* eslint-disable react/prop-types */
// import React from "rea{values:{name,quantityct";

export default function Product({ name, quantity }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Quantity: {quantity}</p>
    </div>
  );
}
