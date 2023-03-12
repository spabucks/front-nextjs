import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import axios from "axios";
import { useEffect } from "react";
import { slide } from "@/types/type";

export default function SliderContainer() {
  const [data, setData] = useState<slide[]>([])
  const BaseUrl = process.env.baseApiUrl;
  useEffect(() => {
    axios.get(`${BaseUrl}/api/v1/event/get/banner`)
    .then( res => {
      setData(res.data)
    })
    .catch( err  => console.log( err ))
  },[])
  data.map((item)=>{
    { src: { item.imageUrl} }
  })

  return (
    <>
      <Swiper
        effect={"fade"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Navigation, EffectFade, Pagination,Autoplay]}
        className="mySwiper"
        loop={true}
      >
        {data.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={item.imageUrl} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}