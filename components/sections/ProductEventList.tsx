import { eventProductList } from "@/types/type";
import EventProductList from "../layouts/EventProductList";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getImageSize } from "react-image-size";
export default function ProductEventList(props: {
  id: number;
  imgUrl: string;
  itemData: eventProductList[];
}) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    getImageSize(props.imgUrl).then((res) => {
      setSize({ width: res.width, height: res.height });
    });
  }, [props.imgUrl]);

  return (
    <>
      <section className="event-page-banner">
        <Image
          src={props.imgUrl}
          alt="event-cake-banner"
          width={1000}
          height={500}
        ></Image>
      </section>
      <EventProductList itemData={props.itemData} />
    </>
  );
}
