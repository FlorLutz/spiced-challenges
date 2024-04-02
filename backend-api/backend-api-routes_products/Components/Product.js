import React from "react";

export default function Product({
  name,
  category,
  description,
  price,
  currency,
}) {
  return (
    <section>
      <h2>{`Product: ${name}`}</h2>
      <h3>{`Category: ${category}`}</h3>
      <p>{`Description: ${description}`}</p>
      <p>{`Price: ${price} ${currency}`}</p>
      <button>BUY NOW!</button>
    </section>
  );
}
