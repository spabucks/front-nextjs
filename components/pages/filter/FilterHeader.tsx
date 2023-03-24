import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { filterType, cakecategoryType } from "@/types/filterTypes";
import { bigCategoryType } from "@/types/filterTypes";
import filter from "@/pages/filter";

export default function FilterHeader() {
  const { pathname, query } = useRouter();
  const [bigcategory, setBigCategory] = useState<bigCategoryType[]>();
  const [subCategory, setSubCategory] = useState<cakecategoryType[]>([]);
  const [filterList, setFilterList] = useState<filterType[]>([]);
console.log('filterList',filterList)
  const BaseUrl = process.env.baseApiUrl;
  const router = useRouter();
  const bigcategoryId: string | string[] | undefined = router.query.bigCategory;

  /**빅카테고리 API호출 */
  useEffect(() => {
    axios
      .get(`${BaseUrl}/api/v1/product/getBigCategory`)
      .then((res) => {
        setBigCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /**하위 카테고리 불러오기 전체타입 */
  useEffect(() => {
    axios
      .get(`${BaseUrl}/api/v1/product/getSubCategory/${bigcategoryId}`)
      .then((res) => {
        setSubCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query.bigCategory]);

  const handleSubFilter = (event: ChangeEvent<HTMLInputElement>) => {
    let checker = filterList.find(
      (filter) => filter.value === event.target.value
    );

    if (checker?.checked === true && event.target.checked === false) {
      let newList = filterList.filter(
        (filter) =>
          filter.value !== event.target.value ||
          filter.name !== event.target.name
      );
      setFilterList(newList);
    } else {
      setFilterList([
        ...filterList,
        {
          name: event.target.name,
          value: event.target.value,
          checked: event.target.checked,
          title: event.target.title,
        },
      ]);
    }
  };

  useEffect(() => {
    let url = "";
    filterList.map((filter) =>
      filter.checked ? (url += `&${filter.name}=${filter.value}`) : ""
    );
    router.push(`/filter?bigCategory=${query.bigCategory}${url}`, undefined, {
      shallow: true,
    });
  }, [filterList]);

  const handleFilter = (id: number) => {
    setFilterList([]);
    router.push(`/filter?bigCategory=${id}`);
  };

  const deleteFilter = (title: String) => {
    setFilterList((prev) =>
      prev.filter((item: filterType) => item.title !== title)
    );
  };

  // const allDelete = ()=>{
  //   setFilterList("")
  // };

  return (
    <>
      {/**메인 헤더*/}
      {pathname === "/filter" ? (
        <div className="filter-mainheader-sub border-under">
          <nav>
            <ul>
              {bigcategory &&
                bigcategory.map((menu) => (
                  <li
                    key={menu.index}
                    onClick={() => handleFilter(menu.index)}
                    className={
                      menu.index.toString() === router.query.bigCategory
                        ? "active"
                        : ""
                    }
                  >
                    {menu.name}
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      ) : null}

      {subCategory && router.query.bigCategory == bigcategoryId
        ? subCategory.map((menu, index) => (
            <div className="filter-main-category" key={index}>
              <div className="filter-title">{menu.title}</div>
              <div className="filter-container">
                {menu.data.map((data, index) => (
                  <>
                    <div className="filter-subheader-sub" key={index}>
                      <ul className="filter-subheader-sub-content">
                        <li key={data.id}>
                          <input
                            type="checkbox"
                            name={menu.value}
                            value={data.id}
                            title={`${data.name}`}
                            onChange={handleSubFilter}
                            id="filtercheckbox"
                            checked={
                              filterList.find(
                                (item: filterType) => item.title === data.name
                              )
                                ? true
                                : false
                            }
                          />
                          { filterList.find(
                                (item: filterType) => item.title === data.name
                              )? <label className="bolder-string" htmlFor={`${data.id}`}>{data.name}</label>: <label htmlFor={`${data.id}`}>{data.name}</label>}
                        </li>
                      </ul>
                    </div>
                  </>
                ))}
              </div>
            </div>
          ))
        : null}
      {filterList.length > 0 && (
        <>
          <div className="filter-btn-list">
            <div>
              <img
                src="assets/images/icons/새로고침.png"
                className="refresh-img"
                //  onClick={()=>allDelete}
              />
            </div>
            <div className="filter-btn-content-list">
              {filterList.map((item, index) => (
                <>
                  <div
                    className="filter-btn-box"
                    key={index}
                    onClick={() => deleteFilter(item.title)}
                  >
                    <div className="filter-btn-box-title">{item.title}</div>
                    <img
                      src="assets/images/icons/close.svg"
                      className="filter-btn-close"
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
