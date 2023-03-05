import { recommandData } from '@/types/type'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { detailProduct } from '@/types/type'

export default function DetailProduct(props:{data:detailProduct}) {
    const [data, setData] = useState<detailProduct>()
    const { query } = useRouter();
    const BaseUrl = process.env.baseApiUrl;
    console.log(query.productId)
    useEffect(() => {
        axios.get(`${BaseUrl}/api/v1/product/get/${query.productId}`)
        .then( res => {
          console.log(res.data)
          setData(res.data)
        })
        .catch( err  => console.log( err ))
      },[query.productId])

  return (
    <>
      <section className="section-main">
        <div className="product-main-info">
          <img
            src={data?.imgUrl}
            alt="main-img"
          />
          <div className="product-detail-main__info">
            <div className="product-detail-main__title">
              <h2>{data?.title}</h2>
              <img src="../assets/images/icons/share.svg" />
            </div>
            <p>
              {data?.description}
            </p>
            <p className="product-charge">
              <span>{data?.price}</span>원
            </p>
          </div>
        </div>
        <div className="sep"></div>
        <div className="product-detail-info">
          <h3>상품정보</h3>
          {data?.productDetailImgUrl.map((item)=>{
          return(
            <img
            src={item}
            alt="상품상세정보"
            />  
          )
          })}
        </div>
      </section>
    </>
  );
}
