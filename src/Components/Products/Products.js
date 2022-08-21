import React from "react";

const Product = ({ image, title, category, price }) => {
  return (
    <div className="product-container">
      <img src={image} height="300" width="300" />
      <div>
        <p className="product-title" title={title}>
          {title}
        </p>
        <p>{category}</p>
        <p className="product-price">Rs: {price}</p>
      </div>
    </div>
  );
};

export default Product;
