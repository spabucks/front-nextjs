export default function CartProductCard() {
  return (
    <>
      <div className="check-row">
        <div className="check-left">
          <input type="checkbox" id="product-check" />
        </div>
        <div className="product-cart-view">
          <div className="product-view">
            <img
              src="assets/images/banner/스타벅스_우산.jpg"
              alt="상품이미지"
            />
            <div className="product-view-info">
              <p>23 체리블라썸 로맨틱 문 장우산</p>
              <p>
                <span>23,000</span>원
              </p>
            </div>
            <img src="assets/images/icons/close.svg" />
          </div>
          <div className="product-view-count-info">
            <div className="product-view-count">수량: 1개</div>
            <div className="product-view-charge-info">
              <p className="product-view-charge__title">주문금액</p>
              <p className="product-view-charge">
                <span>23,000</span>원
              </p>
            </div>
            <div className="product-view-change_buy__btn">
              <button type="button">주문 수정</button>
              <button type="button">바로 구매</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
