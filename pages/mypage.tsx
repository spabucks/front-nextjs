import Head from "next/head";
import { useRecoilState } from "recoil";
import { userState } from "@/state/userState";
import Swal from "sweetalert2";

import FirstHeader from "@/components/sections/FirstHeader";
import MyPageTop from "@/components/sections/MyPageTop";
import MypageMenuLists from "@/components/sections/MyPageMenuLists";
import Logincheck from "@/components/ui/Logincheck";
import SecondHeader from "@/components/layouts/SecondHeader";
import { useRouter } from "next/router";

export default function Mypage() {
  const [loginData, setLoginData] = useRecoilState(userState);
  const router = useRouter();

  const handleLogout = () => {
    Swal.fire({
      title: "로그아웃 하시겠습니까?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `확인`,
      denyButtonText: `취소`,
    }).then((result) => {
      if (result.isConfirmed) {
        setLoginData({
          userId: "",
          accessToken: "",
          isLogin: false,
          nickName: "",
        });
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("nickName");

        let timerInterval: string | number | NodeJS.Timer | undefined;

        Swal.fire({
          title: "다음에도 이용해주세요!",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
        router.push("/");
      }
    });
  };

  return (
    <>
      {loginData.isLogin === true ? (
        <>
          <FirstHeader />
          <MyPageTop />
          <MypageMenuLists title={"서비스"} />
          <div className="mypage-logout-btn" onClick={handleLogout}>로그아웃</div>
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
