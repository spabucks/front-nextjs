import { myMenuList } from "@/types/type";
import { useState } from "react";
import MyPageMenuList from "../ui/MyPageMenuList";
import Link from "next/link";
export default function MyPageMenuLists(props: { title: string }) {
  return (
    <>
      <section className="main-service">
        <p className="main-service-title">{props.title}</p>
        <div className="main-service-lists">
          {props.title === "서비스" ? (
            <>
              <MyPageMenuList
                menuicon={"assets/images/icons/online-order.svg"}
                title={"주문내역"}
              />
              <Link href="/cart" className="link-mypage">
                <MyPageMenuList
                  menuicon={"assets/images/icons/gift.svg"}
                  title={"장바구니"}
                />
              </Link>
              <Link href="/delivery" className="link-mypage">
                <MyPageMenuList
                  menuicon={"assets/images/icons/delivery-truck.svg"}
                  title={"배송지 관리"}
                />
              </Link>
            </>
          ) : (
            <>
              <MyPageMenuList
                menuicon={"assets/images/icons/agree.svg"}
                title={"배송지 정보 수집 및 이용 동의"}
              />
              <div className="main-page-service-logout">로그아웃</div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
