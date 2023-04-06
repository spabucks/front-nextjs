import { LoginReq } from "@/types/UserRequest/Request";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
interface ChildProps {
  inputData: LoginReq;
  setInputData: React.Dispatch<React.SetStateAction<LoginReq>>;
}

export default function LoginMain({ inputData, setInputData } : ChildProps) {

  const router = useRouter();

  const handleChagne = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    })
  }
  
  return (
    <>
      <section className="section-main-login">
        <div className="section-main-login_title">
          <Image src="/assets/images/logo/logo.png" alt="스타벅스로고" width={120} height={120}></Image>
          <h2>
            안녕하세요. <br />
            스타벅스입니다
          </h2>
          <p>회원 서비스 이용을 위해 로그인 해주세요.</p>
        </div>
        <form className="main-login__input" action="">
          <input type="text" placeholder="아이디" name="loginId" onChange={handleChagne}/>
          <input type="password" placeholder="비밀번호" name="password" onChange={handleChagne}/>
        </form>
        <div className="main-login__search">
        <button type="button">아이디 찾기</button><p>|</p>
        <button type="button">비밀번호 찾기</button><p>|</p>
          <button type="button" onClick={()=>router.push('/signup')}>회원가입</button>
        </div>
      </section>
    </>
  );
}
