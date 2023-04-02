import Leftarrow from "./Leftarrow";

export default function MyPageMenuList(props:{menuicon:string, title:string}){
    return(
        <>
        
        <div className="main-service-list">
              <div className="main-service-list-item">
                <img src={props.menuicon} /> 
                <div className="main-service-list-item-title">{props.title}</div>
              </div>
             <Leftarrow/>
            </div>
        </>
    )
}