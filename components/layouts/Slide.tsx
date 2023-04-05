import React, { useState,useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

import { slide } from "@/types/type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SliderContainer() {
  const [data, setData] = useState<slide[]>([])
  useEffect(() => {
    const BaseUrl = process.env.baseApiUrl;
    axios.get(`${BaseUrl}/api/v1/event/get/banner`)
    .then( res => {
      setData(res.data.data)
    })
    .catch( err  => console.log( err ))
  },[])
  
  return (
    <>
      <Swiper
        effect={"slide"}
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
           {item.name==="케이크"&& <Link href={`/event?category=4`}><Image src={item.imageUrl} height={500} width={500} alt={'케이크'}></Image></Link>}
           {item.name==="데스크"&& <Link href={`/filter?bigCategory=0&season=9`}><Image src={item.imageUrl} height={500} width={500} alt={'데스크'}></Image></Link>}
           {item.name==="삼일절"&& <Link href={`/filter?bigCategory=0&season=8`}><Image src={item.imageUrl} height={500} width={500} alt={'삼일절'}></Image></Link>}
           {item.name==="23 체리블라썸"&& <Link href={`/filter?bigCategory=0&season=4`}><Image src={item.imageUrl} height={500} width={500} alt={'23체리블라썸'}></Image></Link>}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}