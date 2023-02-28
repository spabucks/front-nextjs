import { productCardData } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard(props:{data:productCardData}) {
    return (
        <div className="slide-square-product-itemlist">
            <div className="slide-square-product-item__img">
            <Link href={`/product/${props.data.id}`}>
             <img
                className="slide-square-item-img"
                src={props.data.imgUrl}
                alt={props.data.title} /> 
            </Link>
            </div>                        
            <div className="slide-square-product-item__info">
            <p className={props.data.isNew===true? "product-item-new" : "product-item-new product-item-new-hidden"}>New</p>
            <p className="slide-square-product-item-title">
                <Link href={`/product/${props.data.id}`}>{props.data.title}</Link>
            </p>
            <p className="slide-square-product-item-price">
                <span>{props.data.price}</span>원
            </p>
            </div>
        </div>
    );
}