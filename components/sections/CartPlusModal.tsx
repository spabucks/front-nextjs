import React from "react";

import Link from "next/link";
import Image from "next/image";

import ModalBackground from "../ui/ModalBackground";

export interface ChildProps {
  isView?: Boolean;
  setIsCartModal: React.Dispatch<React.SetStateAction<Boolean>>;
}

export default function CartPlusModal({ isView, setIsCartModal }: ChildProps) {
  if (!isView) {
    return null;
  }

  const handleCloseModal = () => {
    setIsCartModal(false);
  };

  return (
    <>
      <ModalBackground isView={isView} />
      <div className="cartplusmodal">
        <div className="carplus-title">
          <p>장바구니 추가되었습니다</p>
          <Image
            src={"../assets/images/icons/close.svg"}
            alt={"닫기버튼"}
            width={20}
            height={20}
          ></Image>
        </div>
        <div className="carplus-btn">
          <button type="button">
            <Link href={"/cart"}>장바구니 가기</Link>
          </button>

          <button type="button">상품 더보기</button>
        </div>
      </div>
    </>
  );
}
