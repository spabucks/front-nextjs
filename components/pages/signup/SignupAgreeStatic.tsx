import Rightarrow from '@/components/ui/Rightarrow'
import React from 'react'

export default function SignupAgreeStatic() {
  return (
    <div className="agree-info-wrap">
      <div className="agree-info-wrap-list">
        <p>휴대폰 본인 인증 서비스 이용약관 동의(필수)</p>
        <Rightarrow />
      </div>

      <div className="agree-info-wrap-list">
        <p>휴대폰 통신사 이용약관 동의(필수)</p>
        <Rightarrow />
      </div>
      <div className="agree-info-wrap-list">
        <p>개인정보 제공 및 이용 동의(필수)</p>
        <Rightarrow />
      </div>
      <div className="agree-info-wrap-list">
        <p>고유식별정보 처리(필수)</p>
        <Rightarrow />
      </div>
    </div>
  )
}
