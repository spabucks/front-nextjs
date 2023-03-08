import {eventProductList} from "@/types/type";
import EventProductListCard from "../ui/EventListProductCard";
export default function EventProductList(props : { itemData:eventProductList[]}){
    return(
        <section className="flex-wrap-product-lists">
        <div className="flex-wrap-product-list">
      {
                props.itemData && props.itemData.map( items => (
                    <EventProductListCard
                        key = {items.id}
                        data = {items}
                    />
                ))
            }
      </div>
    </section>

    )
}