export default function MyPageTop() {
  return (
    <>
      <section className="main-mypage">
        <div className="main-mypage-first">
          <p>주문/배송 현황</p>
          <p>최근 3개월 동안 구매한 상품</p>
        </div>
        <div className="main-mypage-step">
          <div className="main-mypage-step__product">
            <p>0</p>
            <p>상품준비중</p>
          </div>
          <img
            className="main-mypage-step__icon change-left-chevron"
            src="assets/images/icons/left-chevron.svg"
          />
          <div className="main-mypage-step__product">
            <p>0</p>
            <p>배송준비중</p>
          </div>
          <img
            className="main-mypage-step__icon change-left-chevron"
            src="assets/images/icons/left-chevron.svg"
          />
          <div className="main-mypage-step__product">
            <p>0</p>
            <p>배송중</p>
          </div>
          <img
            className="main-mypage-step__icon change-left-chevron"
            src="assets/images/icons/left-chevron.svg"
          />
          <div className="main-mypage-step__product">
            <p>0</p>
            <p>배송완료</p>
          </div>
        </div>
      </section>
    </>
  );
}
