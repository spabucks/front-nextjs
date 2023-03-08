export default function MyPageMenuList(props:{menuicon:string, title:string}){
    return(
        <>
        
        <div className="main-service-list">
              <div className="main-service-list-item">
                <img src={props.menuicon} />
                <div className="main-service-list-item-title">{props.title}</div>
              </div>
              <img
                className="main-service-list-arrow change-left-chevron"
                src="assets/images/icons/left-chevron.svg"
              />
            </div>
        </>
    )
}