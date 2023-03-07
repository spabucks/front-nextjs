
export default function MyPageMenuList(){
    return(
        <>
        <div className="main-service-list">
              <div className="main-service-list-item">
                <img src="assets/images/icons/search.svg" />
                <div className="main-service-list-item-title">주문 내역</div>
              </div>
              <img
                className="main-service-list-arrow change-left-chevron"
                src="assets/images/icons/left-chevron.svg"
              />
            </div>
        </>
    )
}