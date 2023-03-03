import { productCardData } from "@/types/type";
import ProductCard from "../ui/ProductCard"; 

export default function SlideSquareProduct(props : {title:string, itemData:productCardData[]}) {
  return (
    <section className="slide-square-product-lists">
      <div>
        <p className="slide-square-product__main-title">{props.title}</p>
        <div className="slide-square-product-list">
            {
                props.itemData.map( item => (
                    <ProductCard 
                        data = {item}
                    />
                ))
            }
        </div>
      </div>
    </section>
  );
}