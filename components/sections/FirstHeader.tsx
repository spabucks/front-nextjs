import Link from "next/link";
import {
  headerMenus,
  headerRightIcons,
  headerEventSubMenus,
  headerBestSubMenus,
} from "@/data/navMenuDatas";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import { categoryMenu } from "@/types/type";
import { useRecoilState } from "recoil";
import { subPage } from "@/state/subPage";
import { userState } from "@/state/userState";
import Swal from "sweetalert2";
import { useCookies } from "react-cookie";
export default function FirstHeader() {
  const router = useRouter();
  const categoryId: any = router.query.category;

  const [loginData, setLoginData] = useRecoilState(userState);
  const [categoryBestMenus, setCategoryBestMenus] = useState<categoryMenu[]>(
    []
  );
  const [categoryEventMenus, setCategoryEventMenus] = useState<categoryMenu[]>(
    []
  );
  const [subpagemodal, setSubpageModal] = useRecoilState(subPage);

  const handleSubpageOpen = () => {
    setSubpageModal(true);
  };
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  /** 베스트 관련 메뉴*/
  useEffect(() => {
    const BaseUrl = process.env.baseApiUrl;
    axios
      .get(`${BaseUrl}/api/v1/bigCategory/get/all`)
      .then((res) => {
        setCategoryBestMenus(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  /** 이벤트 관련 매뉴 */
  useEffect(() => {
    const BaseUrl = process.env.baseApiUrl;
    axios
      .get(`${BaseUrl}/api/v1/tag/get/all`)
      .then((res) => {
        setCategoryEventMenus(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        });
        // removeCookie('id')
        // removeCookie('id', {path : '/'})
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userId");

        let timerInterval: string | number | NodeJS.Timer | undefined;
        Swal.fire({
          html: "다음에도 이용해주세요~",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            // const b = Swal.getHtmlContainer().querySelector("b");
            // timerInterval = setInterval(() => {
            //   b.textContent = Swal.getTimerLeft();
            // }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
        router.push("/");
      }
    });
  };
  return (
    <header>
      <div className="main-header-top">
        <div className="main-header__menu-icon">
          <Image
            src="assets/images/icons/menu.svg"
            alt=""
            width={20}
            height={20}
            onClick={handleSubpageOpen}
          ></Image>
        </div>
        <Link href="/" className="mainpage-link">
          <h1>온라인 스토어</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/search">
                <Image
                  width={20}
                  height={20}
                  src="assets/images/icons/search.svg"
                  alt="search"
                ></Image>
              </Link>
            </li>

            {loginData.isLogin === true ? (
              <li>
                <Link href="/cart">
                  <Image
                    width={20}
                    height={20}
                    src="assets/images/icons/shopping-cart.svg"
                    alt="cart"
                  ></Image>
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/cart">
                  <Image
                    width={20}
                    height={20}
                    src="assets/images/icons/shopping-cart.svg"
                    alt="cart"
                  ></Image>
                </Link>
              </li>
            )}
            {loginData.isLogin === true ? (
              //로그인체크가 true일 때?
              <li>
                <Image
                  width={20}
                  height={20}
                  src="/assets/images/icons/logout.png"
                  alt="login"
                  onClick={handleLogout}
                ></Image>
              </li>
            ) : (
              //로그인체크가 false일 때?
              <li>
                <Link href="/login">
                  <Image
                    width={20}
                    height={20}
                    src="assets/images/icons/user.svg"
                    alt="login"
                  ></Image>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>

      {router.pathname === "/cart" ||
      router.pathname === "/filter" ||
      router.pathname === "/search2" ? (
        ""
      ) : (
        <div className="main-header-bottom boder-under">
          <nav>
            <ul>
              {headerMenus.map((menu) => (
                <li
                  key={menu.id}
                  className={
                    router.pathname === menu.link.split("?")[0] ? "active" : ""
                  }
                >
                  <Link href={menu.link}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      {router.pathname === "/event" && (
        <div className="main-header-sub">
          <nav>
            <ul>
              {categoryEventMenus.map((eventSubMenu) =>
                eventSubMenu.image === "" ? null : (
                  <li key={eventSubMenu.id}>
                    <Link
                      href={`/event?category=${eventSubMenu.id}`}
                      className={
                        eventSubMenu.id == categoryId
                          ? "main_header-sub-click "
                          : "main_header-sub-nonclick"
                      }
                    >
                      {eventSubMenu.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      )}
      {router.pathname === "/best" && (
        <div className="main-header-sub">
          <nav>
            <ul>
              {categoryBestMenus.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/best?category=${category.id}`}
                    className={
                      category.id == categoryId
                        ? "main_header-sub-click "
                        : "main_header-sub-nonclick"
                    }
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
