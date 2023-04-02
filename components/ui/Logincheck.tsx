import React from 'react'
import SecondHeader from "@/components/layouts/SecondHeader";
import Image from 'next/image';
import { useRouter } from 'next/router';
export default function Logincheck() {
  const router = useRouter();
  return (
    <div>
      <p className="login-check-title">로그인 후<br/>이용할 수 있는 서비스입니다.</p>
      <div className='login-check-title-btn'>
        <button onClick={()=>router.push('/')}>메인으로 가기</button>
        <button onClick={()=>router.push('/login')}>로그인</button>
      </div>
      <Image src="/assets/images/banner/로그인이미지.jpg" alt="로그인이미지" width={400} height={580}></Image>
    </div>
  )
}
