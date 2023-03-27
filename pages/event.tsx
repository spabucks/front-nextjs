import FirstHeader from "@/components/sections/FirstHeader";
import Head from "next/head";
import { productEventList } from "@/types/type";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ProductEventList from "@/components/sections/ProductEventList";
import { subPage } from "@/state/subPage";
import { useRecoilState } from "recoil";
import SubpageModal from "@/components/sections/SubpageModal";
export default function Event() {

  const [data, setData] = useState<productEventList>();
  const BaseUrl = process.env.baseApiUrl;
  const router = useRouter();
  const categoryId: string | string[] | undefined = router.query.category;
 const [subpagemodal, setSubpageModal] = useRecoilState(subPage);
  useEffect(() => {
    axios
      .get(`${BaseUrl}/api/v1/product-tag/exhibition/get/${categoryId}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <>
      <Head>
        <title>starbucks event page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicrfon.ico" />
      </Head>
      <FirstHeader />
      {data && (
        <ProductEventList
          id={data.id}
          imgUrl={data.imgUrl}
          itemData={data.data}
        />
      )}

      <footer className="event-page-footer border-top">
        <div className="event-page-footer-main__title">
          <h4>기획전 유의사항</h4>
          <img
            className="top-arrow-icon"
            src="../assets/images/icons/left-chevron.svg"
            alt="arrow-icon"
          />
        </div>
        <div className="event-page-footer-info">
          <p>
            . 택배를 통해 배송되는 냉동 상품입니다. 매장을 통한 구매, 교환 혹은
            반품은 불가합니다.
          </p>
          <p>∙ 사진은 연출된 이미지 컷으로 실제와 다를 수 있습니다.</p>
          <p>∙ 한정 수량으로 제작되어 조기 소진될 수 있습니다.</p>
          <p>
            ∙ 상품에 대한 자세한 정보 및 구매, 교환, 환불 등 서비스 관련 내용은
            각 상품의 상세페이지에서 확인하시기 바랍니다.
          </p>
          <p>
            ∙ 무료 음료 쿠폰은 온라인 스토어에서 구매하신 홀케이크의 수량만큼
            ‘수신자‘에게 지급됩니다.
          </p>
          <p>
            ∙ 무료 음료 쿠폰은 배송 완료일로부터 9일차에 카카오톡 알림톡으로
            발송되며, 알림톡 발송 실패 시 문자(LMS)로 발송됩니다.
          </p>
          <p>
            ∙ 무료 음료 쿠폰에 대한 자세한 정보는 각 상품의 상세페이지에서
            확인하시기 바랍니다.
          </p>
          <p>
            ∙ 구매 별은 스타벅스 리워드 웰컴, 그린, 골드 레벨 회원이 본인 계정에
            등록된 스타벅스 카드를 이용하여 온라인 스토어에서 구매 시
            적립됩니다.
            <br />
            (단, 스타벅스 카드 결제 금액 1천원 이상인 경우에만 별 적립 대상에
            포함)
          </p>
          <p>
            . 구매 별 적립 대상자가 1만원 이상 결제 시, 배송비를 제외한 총
            결제금액 1만원 당 이벤트 별 1개가 적립됩니다.
          </p>
          <p>
            ∙ 별은 배송완료일로부터 9일차에 '구매자'에게 적립되며, 별 적립 이후
            상품을 반품할 경우 적립된 별은 회수됩니다. (불량 등의 사유로 반품할
            경우에도 별은 회수됨)
          </p>
          <p>∙ 별 적립 일정은 당사 사정에 따라 변경될 수 있습니다.</p>
          <p>∙ 적립된 별의 유효기간은 적립일로부터 1년입니다.</p>
        </div>
      </footer>
      
    </>
  );
}
