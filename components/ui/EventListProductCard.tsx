import Link from "next/link";
import { eventProductList} from "@/types/type";

export default function EventProductListCard(props: { data: eventProductList }) {
  console.log(props.data)
  return(
    <div className="flex-wrap-product">
    <div className="flex-wrap-product__img">
     
      <Link href={`/product/${props.data.id}`}>
        <img src={props.data.imgUrl} alt={props.data.title} />
      </Link>
    </div>
    <div className="flex-wrap-product__info">
      <p
        className={
          props.data.isNew === true
            ? "product-item-new"
            : "product-item-new product-item-new-hidden"
        }
      >
        New
      </p>
      <p className="flex-wrap-product-title">
        <Link href={`/product/${props.data.id}`}>{props.data.title}</Link>
      </p>
      <p className="flex-wrap-product-price">
        <strong>{props.data.price}</strong>원
      </p>
    </div>
  </div>
  )
}
