import { useState } from "react";
import "./product-card.css";
import StarRating from "../star-rating";


function ProductCard({ productName, productImages }) {
  const [selectedColor, setSelectedColor] = useState(1);

  return (
    <>
      <div className="card">
        <img src={selectedColor === 1 ? productImages.yellow :
            selectedColor === 2 ? productImages.white :
            selectedColor === 3 ? productImages.rose : ""
        } alt="" className="image-card" />
        <div className="card-content">
          <h3 className="card-title">{productName}</h3>
          <p className="card-price">$150USD</p>
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
          <p className="selected-color"></p>
          <StarRating />
        </div>
      </div>
    </>
  );
}

export default ProductCard;
