export default function CartProductTitle(props:{title:string}){
    return(
    <>
        <div className="check-title-main">
          <div className="check-btn">
            <input type="checkbox" id="general-product-check" />
            <p>{props.title}</p>
          </div>
        </div>
    </>
    )
}