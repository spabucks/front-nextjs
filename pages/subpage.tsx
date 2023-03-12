import Link from "next/link";
import SubPageMenu from "@/components/sections/SubPageMenu";
import { useEffect, useState } from "react";
import { subPageMenu } from "@/types/type";
import axios from "axios";
export default function Subpage() {
  const [data,setData]= useState<subPageMenu[]>([])

  useEffect(()=>{
    axios.get(`http://localhost:3001/subpagemanu`)
    .then(res=>{
      setData(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  return (
    <>
      <div className="sub-page__main-header sub-boder-under">
        <div className="sub-page__main-header-content">
          <div className="sub-page__main-header-content-icon">
          <Link href={`/`}>
            <img src="assets/images/icons/close.svg" />
            </Link>
          </div>
          <h2>sign in to Online Store</h2>
          <p>
            <Link href={`/login`}>
            <button className="sub-page-login" type="button">
              로그인
            </button>
            </Link>후 이용해보세요
          </p>
        </div>
      </div>
      <section className="sub-page__main-contents">
        <div className="sub-page__main-contents-title">
          전제상품보기
          <img
            className="sub-change-left-icon"
            src="assets/images/icons/left-chevron.svg"
          />
        </div>
        <div className="sub-page__main-first-content">
          <Link href="./best?category=1">
          <div className="sub-page__main-content-category">
            <img src="assets/images/products/케이크.jpg" />
            <p>케이크</p>
          </div>
          </Link>
          <Link href="./best?category=2">
          <div className="sub-page__main-content-category">
            <img src="assets/images/products/텀블러보온병.jpg" />
            <p>텀블러/보온병</p>
          </div>
          </Link>
          <Link href="./best?category=3">
          <div className="sub-page__main-content-category">
            <img src="assets/images/products/머그컵.jpg" />
            <p>머그/컵</p>
          </div>
          </Link>
        </div>
        <div className="sub-page__main-second-content">
        <Link href="./best?category=4">
          <div className="sub-page__main-content-category">
            <img src="assets/images/products/라이프스타일.jpg" />
            <p>라이프스타일</p>
          </div>
          </Link>
          <Link href="./best?category=5">
          <div className="sub-page__main-content-category">
            <img src="assets/images/products/티커피용품.jpg" />
            <p>티/커피용품</p>
          </div>
          </Link>
          <Link href="./best?category=6">
          <div className="sub-page__main-content-category">
            <img src="assets/images/products/세트.jpg" />
            <p>세트</p>
          </div>
          </Link>
        </div>
      </section>

      <section className="sub-page__sub-contents">
        {data && data.map(item=>(
          <SubPageMenu key={item.title} title={item.title} context={item.context}/>)
        )}
      </section>
    </>
  );
}
