import Link from "next/link";
import Leftarrow from "../ui/Leftarrow";

export default function SubPageMenu(props: { title: string; context: string }) {
  return (
    <>
      <div className="sub-page__sub-content boder-under">
        <div className="sub-page__sub-content-title">
          <p>{props.title}</p>
          <p>{props.context}</p>
        </div>
        {props.title === "베스트" ? (
          <Link href="/best?category=1">
            <div className="sub-page__sub-content-icon">
              <Leftarrow/>
            </div>
          </Link>
        ) : (
          <Link href="/event?category=1">
            <div className="sub-page__sub-content-icon">
            <Leftarrow/>
            </div>
          </Link>
        )}
      </div>
    </>
  );
}
