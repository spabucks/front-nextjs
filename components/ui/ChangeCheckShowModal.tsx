import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
export default function ChangeCheckShowModal() {
    const [time, setTime] = useState<boolean>(false);
    useEffect(() => {
      window.setTimeout(() => {
        setTime(true);
      }, 2000);
    });
    if (time === true) {
      return null;
    }
    return (
      <>
        <div className="buy-announcement-show">
          ~~~에 담기수량 가능
        </div>
      </>
    );
}
