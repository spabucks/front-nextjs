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

export default function FilterPage() {
  const router = useRouter();
  const categoryId: any = router.query.category;
  const BaseUrl = process.env.baseApiUrl;
   /** 베스트 카테고리 관련 변수저장*/
  const [categoryBestMenus, setCategoryBestMenus] = useState<categoryMenu[]>(
    []
  );
   /** 가격 관련 변수저장 */
  const [categoryChargeMenus, setCategoryChargeMenus] = useState<categoryMenu[]>(
    []
  );
  /** 베스트 관련 메뉴*/
  useEffect(() => {
    axios
      .get(`${BaseUrl}/api/v1/bigCategory/get/all`)
      .then((res) => {
        setCategoryBestMenus(res.data);
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
        setCategoryChargeMenus(res.data);
        let cNames: string[] = [];
        //  setCateName(cNames)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
    return(
<header>
      <div className="main-header-top">
        <div className="main-header__menu-icon">
          <Link href={`/subpage`}>
            <img src="assets/images/icons/menu.svg" alt="" />
          </Link>
        </div>
        <h1>온라인 스토어</h1>
        <nav>
          <ul>
            {headerRightIcons.map((menuIcon) => (
              <li key={menuIcon.id}>
                <Image
                  width={20}
                  height={20}
                  src={menuIcon.icon}
                  alt={menuIcon.name}
                ></Image>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/*전체 메뉴에 대한 api 받아오기*/}
      <div className="main-header-sub">
        <nav>
          <ul>
          {categoryBestMenus.map((eventSubMenu) =>
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
      {/* {router.pathname === "/event" && (
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
      )}*/}
    </header> 
  );
}
