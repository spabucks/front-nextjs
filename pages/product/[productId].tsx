import { useRouter } from "next/router";

export default function Product() {

    const router = useRouter();

    console.log(router)
    return (
        <>
        {/**<h3>{router.query.productId}</h3> */}
        <header>
      <div className="sub-header">
        <img src="assets/images/icons/left-chevron.svg" />
        <h1 className="sub-header-title">온라인 스토어</h1>
        <img src="assets/images/icons/close.svg" />
      </div>
    </header>

    <section className="section-cart-top">
      <h2>장바구니</h2>
        <div className="check-row">
          <div className="check-left">
            <input type="checkbox" id="total-product-check" />
            <label>전체 선택</label>
          </div>
          <div className="check-right">
            <button><span>선택삭제</span></button>
            <button>전체삭제</button>
          </div>
        </div>
        <div className="check-row">
          <div className="check-left">
            <input type="checkbox" id="general-product-check" />
            <label>일반 상품</label>
          </div>
        </div>
        <div className="check-row">
          <div className="check-left">
            <input type="checkbox" id="product-check" />
            <label></label>
          </div>
          <div className="product-cart-view">
            <div className="product-view">
              <img
                src="assets/images/banner/스타벅스_우산.jpg"
                alt="상품이미지"
              />
              <div className="product-view-info">
                <p>23 체리블라썸 로맨틱 문 장우산</p>
                <p><span>23,000</span>원</p>
              </div>
              <img src="assets/images/icons/close.svg" />
            </div>
            <div className="product-view-count-info">
              <div className="product-view-count">수량: 1개</div>
              <div className="product-view-charge-info">
                <p className="product-view-charge__title">주문금액</p>
                <p className="product-view-charge"><span>23,000</span>원</p>
              </div>
              <div className="product-view-change_buy__btn">
                <button type="button">주문 수정</button>
                <button type="button">바로 구매</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-cart-middle border-top">
        <div>
            <p>상품 1건 23,000원 배송비 3,000원 = 총 26,000원</p>
            <p>7,000원 더 담으면 무료배송</p>
        </div>
        <button type="button">더 담으러 가기</button>
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
    );
}