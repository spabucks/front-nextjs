import Link from "next/link";
import { productList } from "@/types/type";

export default function ProductListCard(props: { data: productList }) {
  return (
    <div className="best-product">
      <div className="best-product__img">
       
        <Link href={`/product/${props.data.id}`}>

        <img src={props.data.imgUrl} alt={props.data.title} />
        </Link>
        <div>2</div>
      </div>
      <div className="best-product__info">
        <p
          className={
            props.data.isNew === true
              ? "product-item-new"
              : "product-item-new product-item-new-hidden"
          }
        >
          New
        </p>
        <p className="best-product-title">
          <Link href={`/product/${props.data.id}`}>{props.data.title}</Link>
        </p>
        <p className="best-product-price">
          <strong>{props.data.price}</strong>원
        </p>
      </div>
    </div>
  );
}
