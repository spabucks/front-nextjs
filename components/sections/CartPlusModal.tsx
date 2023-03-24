import React from "react";
import ModalBackground from "../ui/ModalBackground";
import Link from "next/link";
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
          <img
            src="../assets/images/icons/close.svg"
            alt=""
            onClick={handleCloseModal}
          />
        </div>
        <div className="carplus-btn">
  
            <button type="button"><Link href={"/cart"}>장바구니 가기</Link></button>
      
          <button type="button">상품 더보기</button>
        </div>
      </div>
    </>
  );
}
