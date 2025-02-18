import { FaStar } from "react-icons/fa";
import "./star-rating.css";

function StarRating({ popularityScore,rating }) {

  


  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} color="#F4D19C" />);
  }

 
  if (hasHalfStar) {
    stars.push(
      <div className="star" key="half-star">
  
        <FaStar color="#ccc" />
      
        <div className="star-half">
          <FaStar color="#F4D19C" />
        </div>
      </div>
    );
  }


  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaStar key={`empty-${i}`} color="#ccc" />);
  }

  return <div>{stars}</div>;
}

export default StarRating;
