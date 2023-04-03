import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import CloseBtn from "../ui/CloseBtn";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { deliveryChangeModal } from "@/state/deliveryChangeModal";
import { subPage } from "@/state/subPage";
export default function SecondHeader(props: { title: string }) {
  const router = useRouter();
  const [shippingCheck, setShippingCheck] = useState<boolean>(false);
  const [subPageModal, setSubpageModal] = useRecoilState(subPage);
  const [deliveryRechange, setDeliveryRechange] =
    useRecoilState(deliveryChangeModal);

  const handlebackBtn = () => {
    setDeliveryRechange(!deliveryRechange);
    router.push("/mypage");
  };

  const handleCloseBtn = () => {
    setDeliveryRechange(!deliveryRechange);
    router.push("/");
  };
  return (
    <header>
      <div className="second-header-top">
        {router.asPath === "/delivery" ? (
          <div onClick={handlebackBtn}>
            <Image
              src="../assets/images/icons/left-chevron.svg"
              alt="뒤로가기"
              width={20}
              height={20}
            ></Image>
          </div>
        ) : (
          <div onClick={() => router.back()}>
            <Image
              src="../assets/images/icons/left-chevron.svg"
              alt="뒤로가기"
              width={20}
              height={20}
            ></Image>
          </div>
        )}
        {/* <img src="../assets/images/icons/left-chevron.svg" alt="뒤로가기" onClick={() => router.back()} /> */}
        <Link href="/" className="mainpage-link">
          <h1>{props.title}</h1>
        </Link>

        {router.asPath === "/delivery" ? (
          <div onClick={handleCloseBtn}>
            <CloseBtn />
          </div>
        ) : (
          <div onClick={() => router.back()}>
            <CloseBtn />
          </div>
        )}
        {/* <div onClick={() => router.push("/")}>
          <CloseBtn />
        </div> */}
      </div>
    </header>
  );
}
