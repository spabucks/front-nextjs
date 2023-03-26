import Link from "next/link";
import { eventProductList} from "@/types/type";

export default function EventProductListCard(props: { data: eventProductList }) {
  return(
    <div className="flex-wrap-product">
    <div className="flex-wrap-product__img">
     
      <Link href={`/product/${props.data.id}`}>
        <img src={props.data.imgUrl} alt={props.data.title} />
      </Link>
    </div>
    <div className="flex-wrap-product__info">
    <div className="new-best">
    {props.data.isNew === true ? (
            <p className={"product-item-new"}>New</p>
          ) : (
            <p className={"product-item-new-hidden"}> </p>
          )}
          {props.data.isBest==true ? (
            <p className={"product-item-best"}>Best</p>
          ) : (
            <p className={"product-item-new-hidden"}> </p>
          )}
        </div>
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
