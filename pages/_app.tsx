import '@/styles/globals.css'
import '../public/assets/css/style.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { useState } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
export default function App({ Component, pageProps }: AppProps) {
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태
  
  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if(ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  }

  const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);  // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })

  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <button 
        className={BtnStatus ? "topBtn active top-arrow-icon" : "topBtn top-arrow-icon"} // 버튼 노출 여부
        onClick={handleTop}  // 버튼 클릭시 함수 호출
      ><Image className="topbtn-scroll" src={"assets/images/icons/left-chevron.svg"} alt={''} width={20} height={20}></Image></button>
    </RecoilRoot>
    
  )
}
