import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartCount } from "@/state/cartCount";
import { detailProduct } from "@/types/type";

export interface ChildProps {
  isClick?: Boolean;
  setIsClick?: React.Dispatch<React.SetStateAction<Boolean>>;
  data: detailProduct;
  status: number;
  addcount: number;
}

export function ShowModal() {
  const [time, setTime] = useState<boolean>(false);
  useEffect(() => {
    window.setTimeout(() => {
      setTime(true);
    }, 2000);
  });
  if (time === true) {
    return null;
  }
  return (
    <>
      <div className="buy-announcement-show">
        해당 상품은 회원당 최대 5개까지 구매 가능합니다.
      </div>
    </>
  );
}

export function ChangeCheckShowModal(props: {
  status: number;
  addcount: number;
  data: detailProduct;
}) {
  const [time, setTime] = useState<boolean>(false);
  useEffect(() => {
    window.setTimeout(() => {
      setTime(true);
    }, 2000);
  });
  if (time === true) {
    return null;
  }
  return (
    <>
      <div className="buy-checkannouncement-show">
        {`${props.data.title}상품이 장바구니에 담겨있습니다`}
        <br />
        {`담기가능수량 : ${props.addcount}개`}
      </div>
    </>
  );
}

export default function CartProductCardDetail({
  data,
  isClick,
  setIsClick,
  status,
  addcount,
}: ChildProps) {

  // const [count, setCount] = useRecoilState(cartCount);
  const [count, setCount] = useState(1);
  const handleView = () => {
    setIsClick && setIsClick(!isClick);
  };
  
  return (
    <div className="buy-product-lists">
      <div className="view-btn" onClick={handleView}></div>
      {isClick ? (
        <>
          <div className="buy-product-list">
            <p>{data?.title}</p>
            <div className="buy-product-count-charge">
              <div className="buy-product-count">
                {count > 1 ? (
                  <button
                    onClick={() => {
                      setCount(count - 1);
                    }}
                  >
                    -
                  </button>
                ) : (
                  <button>-</button>
                )}
                <p>{count}</p>
                {count < 5 ? (
                  <button
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </button>
                ) : (
                  <button>+</button>
                )}
              </div>
              <div className="buy-product-charge">
                {data && (data.price * count).toLocaleString()}원
              </div>
            </div>
          </div>
          <div className="buy-product-total">
            <p>합계 {data && (data.price * count).toLocaleString()}원</p>
          </div>
          {count === 5 && <ShowModal />}
          {status === 400 && (
            <ChangeCheckShowModal
              status={status}
              addcount={addcount}
              data={data}
            />
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
