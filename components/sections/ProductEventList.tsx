
import Link from "next/link";
import ProductListCard from "../ui/ProductBestListCard";
import { eventProductList } from "@/types/type";
import EventProductList from "../layouts/EventProductList";
export default function ProductEventList(props: {
  id:number,
  imgUrl:string,
  itemData:eventProductList[];
}) {
  return (
    <>
      <section className="event-page-banner">
        <img src={props.imgUrl} alt="event-cake-banner" />
      </section>
     <EventProductList itemData={props.itemData}/>
    </>
  );
}
