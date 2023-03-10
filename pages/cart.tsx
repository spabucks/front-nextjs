import CartProductCard from "@/components/ui/CartProductCard"
import CartProductCheck from "@/components/ui/CartProductCheck"
import CartProductTitle from "@/components/ui/CartProductTitle"
import { cartproduct } from "@/types/type"
import { useState,useEffect } from "react"
import axios from "axios"
export default function Cart(){
    const [data, setData] = useState<cartproduct[]>([])
    const BaseUrl = process.env.baseApiUrl;
    useEffect(() => {
      axios.get(`http://localhost:3001/cartproduct`)
      .then( res => {
        setData(res.data)
      })
      .catch( err  => console.log( err ))
    },[])
    console.log('dataaaaaaaaaaaaaaaa',data)
    return(
        <>
         <header>
      <div className="sub-header">
        <img src="assets/images/icons/left-chevron.svg" />
        <h1 className="sub-header-title">온라인 스토어</h1>
        <img src="assets/images/icons/close.svg" />
      </div>
    </header>
    <h2 className="cart-title">장바구니</h2>
    {/* <section className="non-product-cart">
      <div className="non-product-cart-content">
        <img src="assets/images/icons/shopping-cart.svg" />
        <p>장바구니가 비었습니다</p>
      </div>
    </section>  */}
    <section className="section-cart-top">
        <div className="check-title-main">
          <div className="check-btn">
            <input type="checkbox" id="total-product-check" />
            <p>전체 선택</p>
          </div>
          <div className="check-right">
            <button><span>선택삭제</span></button>
            <button>전체삭제</button>
          </div>
        </div>
        <CartProductTitle title={'일반 상품'}/>
        <CartProductCard/>

        <CartProductCheck/>

        <CartProductTitle title={'냉동 상품'}/>
        <CartProductCard/>
        <CartProductCheck/>

    </section>
    <section className="section-cart-bottom">
        <h4>총 주문 금액</h4>
        <div className="section-cart__product">
            <div><span>상품금액</span><p>0원</p></div>
            <div><span>할인금액</span><p>0원</p></div>
            <div><span>배송비</span><p>0원</p></div>
        </div>
        <div className="section-cart__total-charge  border-top">
            <div><span>최종 결제 금액</span><p>0원</p></div>
        </div>
        <div className="section-cart__total-charge__info">
            <p>장바구니에는 최대  20개까지 담을 수 있으며, 담긴 상품은 최대 2개월간 보관됩니다.<br/>
            가격,옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.</p>
        </div>
    </section>
    <footer className="footer-product-cart border-top">
        <div className="footer-product-cart__info">
            <div>총 1건/20건</div>
            <p><span>26,000</span>원</p>
        </div>
        <div className="footer-charge-total-btn">
            <button type="button">선물하기</button>
            <button type="button">구매하기</button>
        </div>
    </footer>

        </>
    )
}