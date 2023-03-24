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
import Link from "next/link";
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
        modules={[ EffectFade, Pagination,Autoplay]}
        className="mySwiper"
        loop={true}
      >
        {data.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
           {item.name==="케이크"&& <Link href={`http://localhost:3000/event?category=4`}><img src={item.imageUrl} /></Link>}
           {item.name==="데스크"&& <Link href={`http://localhost:3000/filter?bigCategory=0&season=9`}><img src={item.imageUrl} /></Link>}
           {item.name==="삼일절"&& <Link href={`http://localhost:3000/filter?bigCategory=0&season=8`}><img src={item.imageUrl} /></Link>}
           {item.name==="23체리블라썸"&& <Link href={`http://localhost:3000/filter?bigCategory=0&season=4`}><img src={item.imageUrl} /></Link>}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}