import logo from "../image/header-logo.png";
import menu from "../image/header-menu.png";

export const Header = () => {
  return (
    <header>
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
