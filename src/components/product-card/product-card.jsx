import { useState } from "react";
import "./product-card.css";
import StarRating from "../star-rating/star-rating";

function roundToNearestHalf(num) {
    return Math.round(num * 2) / 2;
  }

function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState(1);
  const rating = parseFloat((roundToNearestHalf(product.popularityScore * 5)).toFixed(1));

  return (
    <>
      <div className="card">
        <img
          src={
            selectedColor === 1
              ? product.images.yellow
              : selectedColor === 2
              ? product.images.white
              : selectedColor === 3
              ? product.images.rose
              : ""
          }
          alt=""
          className="image-card"
        />
        <div className="card-content">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-price">$150 USD</p>

          <div className="colors">
            <div
              className={
                selectedColor == 1
                  ? "circle color-1 selected"
                  : "circle color-1"
              }
              onClick={() => setSelectedColor(1)}
            ></div>
            <div
              className={
                selectedColor == 2
                  ? "circle color-2 selected"
                  : "circle color-2"
              }
              onClick={() => setSelectedColor(2)}
            ></div>
            <div
              className={
                selectedColor == 3
                  ? "circle color-3 selected"
                  : "circle color-3"
              }
              onClick={() => setSelectedColor(3)}
            ></div>
          </div>
          <p className="color-desc">
            {selectedColor === 1
              ? "Yellow Gold"
              : selectedColor === 2
              ? "White"
              : selectedColor === 3
              ? "Rose"
              : ""}
          </p>
           <div className="card-rating">
           <StarRating popularityScore={product.popularityScore} rating={rating} />
           <p className="rating-number">{rating} / 5 </p>

           </div>
     
        </div>
      </div>
    </>
  );
}

export default ProductCard;
