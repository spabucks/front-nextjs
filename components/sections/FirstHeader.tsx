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
import { useImageSize } from 'react-image-size';
import { useRecoilState } from "recoil";
import { subPage } from "@/state/subPage";
export default function FirstHeader() {
  const router = useRouter();
  const categoryId: any = router.query.category;
  const BaseUrl = process.env.baseApiUrl;
   /** 베스트 관련 변수저장*/
  const [categoryBestMenus, setCategoryBestMenus] = useState<categoryMenu[]>(
    []
  );
   /** 이벤트 관련 변수저장 */
  const [categoryEventMenus, setCategoryEventMenus] = useState<categoryMenu[]>(
    []
  );
  const [subpagemodal, setSubpageModal] = useRecoilState(subPage);

  const handleSubpageOpen = () =>{
    setSubpageModal(true)
}
  /** 베스트 관련 메뉴*/
  useEffect(() => {
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
    axios
      .get(`${BaseUrl}/api/v1/tag/get/all`)
      .then((res) => {
        setCategoryEventMenus(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <header>
      <div className="main-header-top">
        <div className="main-header__menu-icon">
            <Image src="assets/images/icons/menu.svg" alt="" width={20} height={20} onClick={handleSubpageOpen}></Image>
        </div>
        <Link href='/' className="mainpage-link"><h1>온라인 스토어</h1></Link>
        <nav>
          <ul>
            {headerRightIcons.map((menuIcon) => (
              <li key={menuIcon.id}>
                <Link href={menuIcon.link}>
                <Image
                  width={20}
                  height={20}
                  src={menuIcon.icon}
                  alt={menuIcon.name}
                ></Image>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {(router.pathname==="/cart" || router.pathname==="/filter" || router.pathname==="/search2") ? "" :
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
      
      
      }
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
