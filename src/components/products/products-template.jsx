import React from 'react';

const Cards = (props) => {
  const { image, title, information, price } = props;

  return (
    <div>
        <img src={image} alt="Product" />
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{information}</p>
    </div>
  );
};

export default Cards