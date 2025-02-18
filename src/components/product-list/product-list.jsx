import ProductCard from "../product-card/product-card";
import "swiper/css";
import "swiper/css/navigation";
import "./product-list.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";

import nextSvg from "../../assets/next.svg";

function ProductList() {
  const products = [
    {
      name: "Engagement Ring 1",
      popularityScore: 0.85,
      weight: 2.1,
      images: {
        yellow:
          "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG085-100P-Y.jpg?v=1696588368",
        rose: "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG085-100P-R.jpg?v=1696588406",
        white:
          "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG085-100P-W.jpg?v=1696588402",
      },
    },
    {
      name: "Engagement Ring 2",
      popularityScore: 0.51,
      weight: 3.4,
      images: {
        yellow:
          "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG012-Y.jpg?v=1707727068",
        rose: "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG012-R.jpg?v=1707727068",
        white:
          "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG012-W.jpg?v=1707727068",
      },
    },
    {
      name: "Engagement Ring 3",
      popularityScore: 0.92,
      weight: 3.8,
      images: {
        yellow:
          "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG020-100P-Y.jpg?v=1683534032",
        rose: "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG020-100P-R.jpg?v=1683534032",
        white:
          "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG020-100P-W.jpg?v=1683534032",
      },
    },
    {
      name: "Engagement Ring 4",
      popularityScore: 0.88,
      weight: 4.5,
      images: {
        yellow:
          "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG022-100P-Y.jpg?v=1683532153",
        rose: "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG022-100P-R.jpg?v=1683532153",
        white:
          "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG022-100P-W.jpg?v=1683532153",
      },
    },
    {
      name: "Engagement Ring 5",
      popularityScore: 0.8,
      weight: 2.5,
      images: {
        yellow:
          "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG074-100P-Y.jpg?v=1696232035",
        rose: "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG074-100P-R.jpg?v=1696927124",
        white:
          "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG074-100P-W.jpg?v=1696927124",
      },
    },
    {
      name: "Engagement Ring 6",
      popularityScore: 0.82,
      weight: 1.8,
      images: {
        yellow:
          "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG075-100P-Y.jpg?v=1696591786",
        rose: "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG075-100P-R.jpg?v=1696591802",
        white:
          "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG075-100P-W.jpg?v=1696591798",
      },
    },
    {
      name: "Engagement Ring 7",
      popularityScore: 0.7,
      weight: 5.2,
      images: {
        yellow:
          "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG094-100P-Y.jpg?v=1696589183",
        rose: "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG094-100P-R.jpg?v=1696589214",
        white:
          "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG094-100P-W.jpg?v=1696589210",
      },
    },
    {
      name: "Engagement Ring 8",
      popularityScore: 0.9,
      weight: 3.7,
      images: {
        yellow:
          "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG115-100P-Y.jpg?v=1696596076",
        rose: "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG115-100P-R.jpg?v=1696596151",
        white:
          "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG115-100P-W.jpg?v=1696596147",
      },
    },
  ];

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
