import { useRouter } from "next/router";

export default function LoginMain() {

  const router = useRouter();
  
  return (
    <>
      <section className="section-main-login">
        <div className="section-main-login_title">
          <img
            src="https://www.starbucks.co.kr/common/img/common/logo.png"
            alt=""
          />
          <h2>
            안녕하세요. <br />
            스타벅스입니다
          </h2>
          <p>회원 서비스 이용을 위해 로그인 해주세요.</p>
        </div>
        <form className="main-login__input" action="">
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
        </form>
        <div className="main-login__search">
          <button type="button">아이디 찾기</button>
          <p>|</p>
          <button type="button">비밀번호 찾기</button>
          <p>|</p>
          <button type="button" onClick={()=>router.push('/signup')}>회원가입</button>
        </div>
      </section>
    </>
  );
}
