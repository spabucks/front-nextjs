import { productBestList } from "@/types/type";
import ProductBestListCard from "../ui/ProductBestListCard";

export default function ProductBestList(props: {
  itemData: productBestList[];
}) {
  return (
    <section className="best-product-lists">
      <div className="best-product-list">
        {props.itemData &&
          props.itemData.map((items, i) => (
            <ProductBestListCard key={items.id} data={items} count={i} />
          ))}
      </div>
    </section>
  );
}
