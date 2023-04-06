import MyPageMenuList from "../ui/MyPageMenuList";
import Link from "next/link";

export default function MyPageMenuLists(props: { title: string }) {
  return (
    <>
      <section className="main-service">
        <p className="main-service-title">{props.title}</p>
        <div className="main-service-lists">
          <>
            <Link href="/orderlists" className="link-mypage">
              <MyPageMenuList
                menuicon={"assets/images/icons/online-order.svg"}
                title={"주문내역"}
              />
            </Link>
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
        </div>
      </section>
    </>
  );
}
