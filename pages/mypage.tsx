import Head from "next/head";
import { useRecoilState } from "recoil";
import { userState } from "@/state/userState";

import FirstHeader from "@/components/sections/FirstHeader";
import MyPageTop from "@/components/sections/MyPageTop";
import MypageMenuLists from "@/components/sections/MyPageMenuLists";
import Logincheck from "@/components/ui/Logincheck";
import SecondHeader from "@/components/layouts/SecondHeader";

export default function Mypage() {
  const [loginData, setLoginData] = useRecoilState(userState);
  return (
    <>
      {loginData.isLogin === true ? (
        <>
          <FirstHeader />
          <MyPageTop />
          <MypageMenuLists title={"서비스"} />
          <div className="mypage-logout-btn">로그아웃</div>
        </>
      ) : (
        <>
          <SecondHeader title={"온라인스토어"} />
          <Logincheck />
        </>
      )}
    </>
  );
}
