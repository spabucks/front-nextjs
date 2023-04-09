import Rightarrow from "../ui/Rightarrow";

export default function ProductDetailBottom() {
  return (
    <>
      <footer className="footer-product-detail">
        <div className="footer-product-checkinfo">
          <div className="boder-under">
            <p>이용조건 및 배송 안내</p>
            <Rightarrow />
          </div>
          <div className="boder-under">
            <p>상품제공정보고시</p>
            <Rightarrow />
          </div>
          <div className="boder-under">
            <p>교환/반품 안내</p>
            <Rightarrow />
          </div>
          <div className="boder-under">
            <p>취소/환불 안내</p>
            <Rightarrow />
          </div>
        </div>
      </footer>
    </>
  );
}
