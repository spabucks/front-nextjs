export default function SubPageMenu(props:{title:string,context:string}){
    return(
        <>
        <div className="sub-page__sub-content boder-under">
          <div className="sub-page__sub-content-title">
            <p>{props.title}</p>
            <p>{props.context}</p>
          </div>
          <div className="sub-page__sub-content-icon">
            <img
              className="sub-change-left-icon"
              src="assets/images/icons/left-chevron.svg"
            />
          </div>
        </div>
        </>
    )
}