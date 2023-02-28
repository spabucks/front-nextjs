import Link from "next/link";
import { slideCircleProducts } from "@/data/slideCircleProduct";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function SlideCircleProduct(){
    return(
    <section className="slide-circle-product-lists">
    <div>
      <p className="slide-circle-product__main-title">TREND TAG</p>
      <div className="slide-circle-product-list">
        {
            slideCircleProducts.map(data=>(
                <div key={data.id} className="slide-circle-product-itemlist">
                    <div className="slide-circle-product-item__img">
                        <Image className="slide-circle-item-img" width={120} height={120} src={data.img} alt={data.title}></Image>
                    </div>
                    <div className="slide-circle-product-item-title">{data.title}</div>
                </div>
            )
            )
        }
        </div>
    </div>
  </section>
  )
}