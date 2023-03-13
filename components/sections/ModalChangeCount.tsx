import { useState} from "react";
import { cartInfo } from "@/types/type";

export default function ModalChangeCount(props:{setIsChangeModal:React.Dispatch<React.SetStateAction<Boolean>>}){
  const BaseUrl = process.env.baseApiUrl;
  const [changedata,setChangeData]=useState<cartInfo>()

  console.log('changedata',changedata)
  return(
    <>
      <header>
        <div className="sub-header">
          <img src="assets/images/icons/close.svg" />
          <h1 className="sub-header-title">주문수정</h1>
          <img src="assets/images/icons/close.svg" onClick={()=>{setIsChangeModal(false)}}/>
        </div>
      </header>
      <section className="modalchangecount-main boder-under-border">
        <div className="modalchangecount-info">
          <div className="modalchangecount-img">
            <img src={""} />
          </div>
          <div className="modalchangecount-title-count">
            <p>ffffffff</p>
            <p>gggggg</p>
          </div>
        </div>
      </section>
      <div className="buy-product-change-lists">
        <div className="buy-product-change-list-main">
          <div className="buy-product-change-list">
            <p>상품주문수량</p>
            <div className="buy-product-change--count-charge">
              <div className="buy-product-change-count">
                <button>-</button>
                <span>ii</span>
                <button>+</button>
              </div>
              <div className="buy-product-change-charge">dddd원</div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-product-cart">
         <div className="footer-product-cart__info">
           <div>주문금액</div>
           <p>
             <span>합계 26,000</span>원
           </p>
         </div>
         <div className="footer-charge-total-btn">
           <button type="button">취소</button>
           <button type="button">확인</button>
         </div>
       </footer>
    </>

  )
}
