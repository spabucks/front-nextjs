import Leftarrow from "./Leftarrow";
import Image from "next/image";

export default function MyPageMenuList(props: {
  menuicon: string;
  title: string;
}) {
  return (
    <>
      <div className="main-service-list">
        <div className="main-service-list-item">
          <Image src={props.menuicon} alt={"아이콘"} height={200} width={200} />
          <div className="main-service-list-item-title">{props.title}</div>
        </div>
        <Leftarrow />
      </div>
    </>
  );
}
