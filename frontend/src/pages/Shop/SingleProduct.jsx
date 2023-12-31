import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Tags from "./Tags";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";
import Review from "../../components/Review";
import MostPopularPost from "../../components/Sidebar/MostPopularPost";
import ProductDisplay from "./ProductDisplay";
import Data from "../../products.json";
const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  console.log("Data", Data);
  // if(Data){
  //   setProduct(Data);
  // }
  useEffect(() => {
    setProduct(Data);
  }, []);

  const result = product.filter((p) => p.id === id);
  return (
    <div>
      <PageHeader title={"OUR SHOP SINGLE"} curPage={"Shop / Single Product"} />
      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            modules={[Navigation]}
                            navigation={{
                              prevEl: ".pro-single-prev",
                              nextEl: ".pro-single-next",
                            }}
                          >
                            {result.map((item, i) => (
                              <SwiperSlide key={i}>
                                <div className="single-thumb">
                                  <img src={item.img} alt="" />
                                </div>
                              </SwiperSlide>
                            ))}
                            {result.map((item, i) => (
                              <SwiperSlide key={i}>
                                <div className="single-thumb">
                                  <img src={item.img} alt="" />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                          <div className="pro-single-next">
                            <i className="icofont-rounded-left"></i>
                          </div>
                          <div className="pro-single-prev">
                            <i className="icofont-rounded-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        <div>
                          {result.map((item) => (
                            <ProductDisplay item={item} key={item.id} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="review">
                  <Review />
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-7 col-12">
              <aside className="ps-lg-4">
                <MostPopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
