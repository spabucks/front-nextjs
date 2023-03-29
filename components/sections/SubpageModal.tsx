import Link from "next/link";
import SubPageMenu from "@/components/sections/SubPageMenu";
import { useEffect, useState } from "react";
import { subPageMenu } from "@/types/type";
import axios from "axios";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { subPage } from "@/state/subPage";
import { userState } from "@/state/userState";
export default function SubpageModal() {
    const [data, setData] = useState<subPageMenu[]>([]);
    const [subPageModal,setSubpageModal] = useRecoilState(subPage);
    const [loginData,setLoginData]=useRecoilState(userState)
    const handleSubpageClose = () =>{
        setSubpageModal(false)
    }
    useEffect(() => {
      axios
        .get(`http://localhost:3001/subpagemanu`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    if(!subPageModal) {
        return null;
    }
    return (
    
      <div className="modal">
        <div className="sub-page__main-header sub-boder-under">
          <div className="sub-page__main-header-content">
            <div className="sub-page__main-header-content-icon">
                <img src="assets/images/icons/close.svg" onClick={handleSubpageClose}/>
            </div>

            {loginData.isLogin === true ? (
            <>
              <h2>Welcome</h2>
              <p className="welcome-title">온라인 스토어에 오신 것을 환영합니다.</p>
            </>
          ) : (
            <>
              <h2>sign in to Online Store</h2>
              <p>
                <Link href={`/login`}>
                  <button className="sub-page-login" type="button">
                    로그인
                  </button>
                </Link>
                후 이용해보세요
              </p>
            </>
          )}
          </div>
        </div>
        <section className="sub-page__main-contents">
          <div className="sub-page__main-contents-title">
            <Link
              href={`http://localhost:3000/filter?bigCategory=0`}
              className="sub-page__main-contents-a"
              onClick={handleSubpageClose}
            >
              전체상품보기
              <img
                className="sub-change-left-icon"
                src="assets/images/icons/left-chevron.svg"
              />
            </Link>
          </div>
          <div className="sub-page__main-first-content">
            <div className="sub-page__main-content-category">
              <Link href="http://localhost:3000/filter?bigCategory=1"
              onClick={handleSubpageClose}>
                <img src="assets/images/products/케이크.jpg" />
                <p>케이크</p>
              </Link>
            </div>
            <div className="sub-page__main-content-category">
              <Link href="http://localhost:3000/filter?bigCategory=2"
              onClick={handleSubpageClose}>
                <img src="assets/images/products/텀블러보온병.jpg" />
                <p>텀블러/보온병</p>
              </Link>
            </div>
            <div className="sub-page__main-content-category">
              <Link href="http://localhost:3000/filter?bigCategory=3"
              onClick={handleSubpageClose}>
                <img src="assets/images/products/머그컵.jpg" />
                <p>머그/컵</p>
              </Link>
            </div>
          </div>
          <div className="sub-page__main-second-content">
            <div className="sub-page__main-content-category">
              <Link href="http://localhost:3000/filter?bigCategory=4"
              onClick={handleSubpageClose}>
                <img src="assets/images/products/라이프스타일.jpg" />
                <p>라이프스타일</p>
              </Link>
            </div>
            <div className="sub-page__main-content-category">
              <Link href="http://localhost:3000/filter?bigCategory=5"
              onClick={handleSubpageClose}>
                <img src="assets/images/products/티커피용품.jpg" />
                <p>티/커피용품</p>
              </Link>
            </div>
            <div className="sub-page__main-content-category">
              <Link href="http://localhost:3000/filter?bigCategory=6"
              onClick={handleSubpageClose}>
                <img src="assets/images/products/세트.jpg" />
                <p>세트</p>
              </Link>
            </div>
          </div>
        </section>
  
        <section className="sub-page__sub-contents">
          {data &&
            data.map((item) => (
              <SubPageMenu
                key={item.title}
                title={item.title}
                context={item.context}
              />
            ))}
        </section>
      </div>
    );
  }
  