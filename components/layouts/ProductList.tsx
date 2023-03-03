import {productList} from "@/types/type";
import ProductListCard from "../ui/ProductListCard";

export default function ProductList(props : { itemData:productList[]}){
    console.log('props.itemData',props.itemData)
    return(
    <section className="best-product-lists">
      <div className="best-product-list">
      {
                props.itemData && props.itemData.map( items => (
                    <ProductListCard
                        key = {items.id}
                        data = {items}
                    />
                ))
            }
      </div>
    </section>

    )
}