import axios from "axios";
import { useState, useEffect } from "react";

import FirstHeader from "@/components/sections/FirstHeader";
import SlideSquareProduct from "@/components/layouts/SlideSquareProduct";
import SliderContainer from "@/components/layouts/Slide";
import TopScrollBtn from "@/components/ui/TopScrollBtn";

import { recommandData } from "@/types/type";
import Loading from "@/components/ui/Loading";

export default function Home() {
  const [data, setData] = useState<recommandData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const BaseUrl = process.env.baseApiUrl;
    axios
      .get(`${BaseUrl}/api/v1/event-products/get/recommendMD`)
      .then((res) => {
        setData(res.data.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <TopScrollBtn />
      <FirstHeader />
      {!isLoading && (
        <div style={{ height: "100vh" }}>
          <Loading />
        </div>
      )}
      {isLoading && (
        <>
          <SliderContainer />
          {data &&
            data.map((item) => (
              <SlideSquareProduct
                key={item.id}
                title={item.name}
                itemData={item.data}
                description={item.description}
              />
            ))}
        </>
      )}
    </>
  );
}
