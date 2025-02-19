import ProductCard from "../product-card/product-card";
import "swiper/css";
import "swiper/css/navigation";
import "./product-list.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";

import nextSvg from "../../assets/next.svg";
import useData from "../../hooks/useData";

function ProductList() {
  const {data:products, loading, error} = useData("http://127.0.0.1:8000/products/");

  return (
    <div className="item-wrapper">
      <h1 className="wrapper-title">Product List</h1>
  
      <div className="custom-nav prev">
        <img src={nextSvg} alt="" />
      </div>
      <div className="custom-nav next">
        <img src={nextSvg} alt="" />
      </div>
      <Swiper
        modules={[Navigation, Scrollbar]}
        scrollbar={{draggable:true, hide:false}}
        navigation={{
          prevEl: ".custom-nav.prev",
          nextEl: ".custom-nav.next",
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          2048: { slidesPerView: 5 },
        }}
        spaceBetween={0}
        observer={true}
        observeParents={true}
        className="items-container"
      >
        
        {products &&
          products.map((product, index) => {

            
            return (
              <SwiperSlide key={index}>
                <ProductCard
                  product={product}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default ProductList;
