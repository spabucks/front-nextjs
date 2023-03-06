import { useRouter } from "next/router";
import SecondHeader from "@/components/layouts/SecondHeader";
import SlideSquareProduct from '@/components/layouts/SlideSquareProduct'
import DetailProduct from "@/components/ui/DetailProduct";
import { recommandproduct } from "@/types/type";
import { useState, useEffect } from 'react'
import axios from 'axios'
import FooterBtn from "@/components/ui/FooterBtn";

export default function Product() {

    const router = useRouter();
    const [data, setData] = useState<recommandproduct[]>([])

  useEffect(() => {
    axios.get("http://localhost:3001/recommandproduct")
    .then( res => {
      console.log(res)
      setData(res.data)
    })
    .catch( err  => console.log( err ))
  },[])
  console.log(data)
    return (
      <>
    <SecondHeader/>
    <div className="sep"></div>
      <DetailProduct/>
      {
        data.map( item => (
          <SlideSquareProduct 
            key={item.id}
            title={item.name}
            itemData={item.data}
          />
        ))
      }
      <div className="sep"></div>


      <footer className="footer-product-detail">
        <div className="footer-product-checkinfo">
          <div className="boder-under">
            <p>이용조건 및 배송 안내</p>
            <img src="../assets/images/icons/left-chevron.svg" alt="arrow-right" className="right-arrow"/>
          </div>
          <div className="boder-under">
            <p>상품제공정보고시</p>
            <img src="../assets/images/icons/left-chevron.svg" alt="arrow-right" className="right-arrow"/>
          </div>
          <div className="boder-under">
            <p>교환/반품 안내</p>
  
            <img src="../assets/images/icons/left-chevron.svg" alt="arrow-right" className="right-arrow"/>
          </div>
          <div className="boder-under">
            <p>취소/환불 안내</p>
            <img src="../assets/images/icons/left-chevron.svg" alt="arrow-right" className="right-arrow"/>
          </div>
        </div>
      </footer>
      <FooterBtn title={'구매하기'}></FooterBtn>
</>
    );
}