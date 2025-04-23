import logo from "../image/header-logo.png";
import menu from "../image/header-menu.png";
import React, { useEffect, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    //스크롤시 배경색 변경
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    //스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", onScroll);
    //스크롤 이벤트 리스너 해제
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="container">
        <h1 className="logo">
          <a href="/03.kakao/kakao.html">
            <img alt="" src={logo} />
          </a>
        </h1>
        <nav>
          <ul>
            <li>서비스</li>
            <li>개발자</li>
            <li>회사정보</li>
          </ul>
        </nav>
        <a className="career" href="https://careers.kakaoenterprise.com/intro">
          <span>인재영입</span>
        </a>
        <a className="menu" href="/03.kakao/kakao.html">
          <img alt="" src={menu} />
        </a>
      </div>
    </header>
  );
};
