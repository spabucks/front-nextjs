import { detailProduct } from "@/types/type";

export default function DetailProduct(props: { data: detailProduct }) {
  return (
    <>
      <section className="section-main">
        <div className="product-main-info">
          <img src={props.data.imgUrl} alt="main-img" />
          <div className="product-detail-main__info">
            <div className="product-detail-main__title">
              <h2>{props.data.title}</h2>
              <img src="../assets/images/icons/share.svg" />
            </div>
            <p>{props.data.description}</p>
            <p className="product-charge">
              <span>{props.data.price}</span>원
            </p>
          </div>
        </div>
        <div className="sep"></div>
        <div className="product-detail-info">
          <h3>상품정보</h3>
          {props.data.productDetailImgUrl.map((item) => {
            return <img src={item} alt="상품상세정보" />;
          })}
        </div>
      </section>
    </>
  );
}
