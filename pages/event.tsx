import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { productEventList } from "@/types/type";

import FirstHeader from "@/components/sections/FirstHeader";
import ProductEventList from "@/components/sections/ProductEventList";
import TopScrollBtn from "@/components/ui/TopScrollBtn";
import EventNote from "@/components/ui/EventNote";
import Loading from "@/components/ui/Loading";

export default function Event() {
  const [data, setData] = useState<productEventList>();
  const router = useRouter();
  const categoryId: string | string[] | undefined = router.query.category;
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const BaseUrl = process.env.baseApiUrl;
    axios
      .get(`${BaseUrl}/api/v1/product-tag/exhibition/get/${categoryId}`)
      .then((res) => {
        setData(res.data.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  const checkEventNote = () => {
    setShow(!show);
  };
  return (
    <>
      <FirstHeader />
      <TopScrollBtn />
      {!isLoading && (
        <div style={{ height: "100vh" }}>
          <Loading />
        </div>
      )}
      {isLoading && (
        <>
          {data && (
            <ProductEventList
              id={data.id}
              imgUrl={data.imgUrl}
              itemData={data.data}
            />
          )}

          <footer className="event-page-footer border-top">
            <div
              className="event-page-footer-main__title"
              onClick={checkEventNote}
            >
              <h4>기획전 유의사항</h4>
              {show === false ? (
                <Image
                  className="bottom-arrow-icon"
                  src="../assets/images/icons/left-chevron.svg"
                  alt="arrow-icon"
                  height={20}
                  width={20}
                />
              ) : (
                <Image
                  className="top-arrow-icon"
                  src="../assets/images/icons/left-chevron.svg"
                  alt="arrow-icon"
                  height={20}
                  width={20}
                />
              )}
            </div>
            {show === false ? "" : <EventNote />}
          </footer>
        </>
      )}
    </>
  );
}
