import React from "react";
import "../App.css";

function Card({ product }) {
  return (
    <div>
      <div
        className="card p-2"
        style={{
          width: "18rem",
        }}
      >
        <img src={product.image} width="90rem" alt="" />
        <div className="card-body">
          <h5 className="card-title text-truncate text-primary">
            {product.title}
          </h5>
          <p className="card-text text-secondary text-truncate small">
            {product.description}
          </p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
