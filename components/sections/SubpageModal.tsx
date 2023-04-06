import Link from "next/link";
import { useEffect} from "react";
import { useRecoilState } from "recoil";
import { subPage } from "@/state/subPage";
import { userState } from "@/state/userState";
import Image from "next/image";
import Leftarrow from "../ui/Leftarrow";
import CloseBtn from "../ui/CloseBtn";

export default function SubpageModal() {
  const [subPageModal, setSubpageModal] = useRecoilState(subPage);
  const [loginData, setLoginData] = useRecoilState(userState);
  const handleSubpageClose = () => {
    setSubpageModal(false);
  };
  if (!subPageModal) {
    return null;
  }

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const accessToken = localStorage.getItem("accessToken");
    const nickName = localStorage.getItem("nickName");
    if (accessToken && !loginData.isLogin) {
      console.log("로그인 되어있음");
      setLoginData({
        userId: userId || "",
        accessToken: accessToken || "",
        isLogin: true,
        nickName:nickName || ""
      });
    }
  }, []);

  return (
    <div className="modal">
      <div className="sub-page__main-header sub-boder-under">
        <div className="sub-page__main-header-content">
          <div className="sub-page__main-header-content-icon" onClick={handleSubpageClose}>
            <CloseBtn/>
          </div>

          {loginData.isLogin === true ? (
            <div className="submodal-maintitle">
              <h2>Welcome</h2>
              <p className="welcome-title">
                온라인 스토어에 오신 것을 환영합니다.
              </p>
            </div>
          ) : (
            <div className="submodal-maintitle">
              <h2>sign in to Online Store</h2>
              <p>
                <Link href={`/login`} >
                  <button className="sub-page-login" type="button" onClick={handleSubpageClose}>
                    로그인
                  </button>
                </Link>
                후 이용해보세요
              </p>
              </div>
          )}
        </div>
      </div>
      <section className="sub-page__main-contents">
        <div className="sub-page__main-contents-title">
          <Link
            href={`/filter?bigCategory=0`}
            className="sub-page__main-contents-a"
            onClick={handleSubpageClose}
          >
            전체상품보기
            <Leftarrow />
          </Link>
        </div>
        <div className="sub-page__main-first-content">
          <div className="sub-page__main-content-category">
            <Link
              href={`/filter?bigCategory=1`}
              onClick={handleSubpageClose}
            >
              <Image
                src="/assets/images/products/케이크.jpg"
                alt="카테고리 이미지"
                width={100}
                height={100}
              ></Image>

              <p>케이크</p>
            </Link>
          </div>
          <div className="sub-page__main-content-category">
            <Link
              href={`/filter?bigCategory=2`}
              onClick={handleSubpageClose}
            >
              <Image
                src="/assets/images/products/텀블러보온병.jpg"
                alt="카테고리 이미지"
                width={100}
                height={100}
              ></Image>

              <p>텀블러/보온병</p>
            </Link>
          </div>
          <div className="sub-page__main-content-category">
            <Link
              href={`/filter?bigCategory=3`}
              onClick={handleSubpageClose}
            >
              <Image
                src="/assets/images/products/머그컵.jpg"
                alt="카테고리 이미지"
                width={100}
                height={100}
              ></Image>

              <p>머그/컵</p>
            </Link>
          </div>
        </div>
        <div className="sub-page__main-second-content">
          <div className="sub-page__main-content-category">
            <Link
              href={`/filter?bigCategory=4`}
              onClick={handleSubpageClose}
            >
              <Image
                src="/assets/images/products/라이프스타일.jpg"
                alt="카테고리 이미지"
                width={100}
                height={100}
              ></Image>

              <p>라이프스타일</p>
            </Link>
          </div>
          <div className="sub-page__main-content-category">
            <Link
              href={`/filter?bigCategory=5`}
              onClick={handleSubpageClose}
            >
              <Image
                src="/assets/images/products/티커피용품.jpg"
                alt="카테고리 이미지"
                width={100}
                height={100}
              ></Image>

              <p>티/커피용품</p>
            </Link>
          </div>
          <div className="sub-page__main-content-category">
            <Link
              href={`/filter?bigCategory=6`}
              onClick={handleSubpageClose}
            >
              <Image
                src="/assets/images/products/세트.jpg"
                alt="카테고리 이미지"
                width={100}
                height={100}
              ></Image>

              <p>세트</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="sub-page__sub-contents">
        <div className="sub-page__sub-content boder-under">
          <div className="sub-page__sub-content-title">
            <p>기획전</p>
            <p>실행중인 기획을 만나보세요</p>
          </div>
          <Link href="/event?category=1" onClick={handleSubpageClose}>
            <div className="sub-page__sub-content-icon">
              <Leftarrow />
            </div>
          </Link>
        </div>
      </section>
      <section className="sub-page__sub-contents">
        <div className="sub-page__sub-content boder-under">
          <div className="sub-page__sub-content-title">
            <p>베스트</p>
            <p>스타벅스의 베스트 상품을 만나보세요</p>
          </div>
          <Link href="/best?category=1" onClick={handleSubpageClose}>
            <div className="sub-page__sub-content-icon">
              <Leftarrow />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
