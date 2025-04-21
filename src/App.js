import { useEffect } from "react";
import "./App.css";
import logo from "./image/header-logo.png";
import menu from "./image/header-menu.png";
import mainVisual1 from "./image/main-visual1.jpg";
import mainVisual2 from "./image/main-visual2.jpg";
import mainVisual3 from "./image/main-visual3.jpg";
import mainVisual4 from "./image/main-visual4.jpg";
import mainVisual5 from "./image/main-visual5.jpg";
import mainVisual6 from "./image/main-visual6.jpg";
import mainNewstitle1 from "./image/main-news-title1.svg";
import mainNewstitle2 from "./image/main-news-title2.svg";
import mainNewstitle3 from "./image/main-news-title3.svg";
import mainNewstitle4 from "./image/main-news-title4.svg";
import mainNews1 from "./image/main-news1.jpg";
import mainNews2 from "./image/main-news2.jpg";
import mainNews3 from "./image/main-news3.jpg";
import mainNews4 from "./image/main-news4.png";
import mainNews5 from "./image/main-news5.jpg";
import mainNews6 from "./image/main-news6.jpg";
import mainNews7 from "./image/main-news7.jpg";
import mainNews8 from "./image/main-news8.jpg";
import mainNewsIconNew from "./image/main-news-icon-new.png";
import youtube from "./image/footer-icon-youtube.png";
import facebook from "./image/footer-icon-face.png";
import instagram from "./image/footer-icon-insta.png";
import kakaoTalk from "./image/footer-icon-kakao.png";
import blog from "./image/footer-icon-blog.svg";

function App() {
  useEffect(() => {
    //슬라이더
    let slides = document.querySelector(".slides"),
      slide = document.querySelectorAll(".slides li"),
      currentIdx = 0,
      slideCount = slide.length,
      slideWidth = window.innerWidth,
      prevBtn = document.querySelector(".prev"),
      nextBtn = document.querySelector(".next");
    function makeClone() {
      for (let i = 0; i < slideCount; i++) {
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add("clone");
        slides.appendChild(cloneSlide);
      }
      for (let i = slideCount - 1; i >= 0; i--) {
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add("clone");
        slides.prepend(cloneSlide);
      }
      updateWidth();
      setinit();
      setTimeout(function () {
        slides.classList.add("animated");
      }, 100);
    }
    function updateWidth() {
      let currentSlides = document.querySelectorAll(".slides li");
      let newSlideCount = currentSlides.length;
      let newWidth = slideWidth * newSlideCount + "px";
      slides.style.width = newWidth;
    }
    function setinit() {
      let TranslateValue = -slideWidth * slideCount;
      slides.style.transform = "translateX(" + TranslateValue + "px)";
    }
    nextBtn.addEventListener("click", function () {
      moveSlide(currentIdx + 1);
      makeClone();
    });
    prevBtn.addEventListener("click", function () {
      moveSlide(currentIdx - 1);
      makeClone();
    });
    function moveSlide(num) {
      slides.style.left = -num * slideWidth + "px";
      currentIdx = num;
      console.log(currentIdx, slideCount);
      if (currentIdx === slideCount || currentIdx === -slideCount) {
        setTimeout(function () {
          slides.classList.remove("animated");
          slides.style.left = "0px";
          currentIdx = 0;
        }, 500);
        setTimeout(function () {
          slides.classList.add("animated");
        }, 600);
      }
    }
    function sliderEffect() {
      moveSlide(currentIdx + 1);
    }
    setInterval(sliderEffect, 8000);
  }, []);
  return (
    <div>
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
          <a
            className="career"
            href="https://careers.kakaoenterprise.com/intro"
          >
            <span>인재영입</span>
          </a>
          <a className="menu" href="/03.kakao/kakao.html">
            <img alt="" src={menu} />
          </a>
        </div>
      </header>
      <main>
        <section id="visual">
          <div className="slide_wrapper">
            <ul className="slides">
              <li>
                <img alt="" src={mainVisual1} />
                <div className="text">
                  <div className="container">
                    <h2>
                      {`                    <카카오클라우드 고객사례>                    `}
                      <br />
                      AI 특화 서비스로 비용 절감
                    </h2>
                    <a href="https://kakaoenterprise.com/press/%ec%8a%a4%ec%ba%90%ed%84%b0%eb%9e%a9-%ec%a0%9c%ed%83%80%eb%a5%bc-ai-%ed%8a%b9%ed%99%94-%ec%b9%b4%ec%b9%b4%ec%98%a4%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c%eb%a1%9c/">
                      <span>자세히 보기</span>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <img alt="" src={mainVisual2} />
                <div className="text">
                  <div className="container">
                    <h2>
                      스타트업 성장에 날개를
                      <br />
                      달아주는 센터플로우
                    </h2>
                    <a href="https://kakaoenterprise.com/press/centerflow-kakaocloud/">
                      <span>자세히 보기</span>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <img alt="" src={mainVisual3} />
                <div className="text">
                  <div className="container">
                    <h2>
                      카카오클라우드,
                      <br />
                      글로벌 슈퍼컴퓨터 TOP500 진출!
                    </h2>
                    <a href="https://kakaoenterprise.com/press/kakaocloud-top500/">
                      <span>자세히 보기</span>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <img alt="" src={mainVisual4} />
                <div className="text">
                  <div className="container">
                    <h2>
                      {`                    <센터플로우 고객사례>                    `}
                      <br />
                      다이소의 고객 서비스 혁신
                    </h2>
                    <a href="https://blog.kakaocloud.com/76">
                      <span>자세히 보기</span>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <img alt="" src={mainVisual5} />
                <div className="text">
                  <div className="container">
                    <h2>
                      [서비스명 변경 안내]
                      <br />
                      센터플로우로 새롭게 시작합니다.
                    </h2>
                    <a href="https://blog.kakaocloud.com/51">
                      <span>자세히 보기</span>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <img alt="" src={mainVisual6} />
                <div className="text">
                  <div className="container">
                    <h2>
                      2024년과 함께
                      <br />
                      카클 뉴스레터가 시작합니다!
                    </h2>
                    <a href="https://page.stibee.com/subscriptions/310762">
                      <span>자세히 보기</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="controls">
            <span className="prev" />
            <span className="next" />
          </div>
        </section>
        <section id="news">
          <div className="container">
            <div className="content">
              <div className="news-title">
                <img alt="" src={mainNewstitle1} />
                <img alt="" src={mainNewstitle2} />
                <img alt="" src={mainNewstitle3} />
                <img alt="" src={mainNewstitle4} />
              </div>
              <div className="news-content">
                <div className="left">
                  <div className="item">
                    <div className="title">
                      <a href="https://kakaoenterprise.com/info/news/press/">
                        <span>보도자료</span>
                        <img alt="" src={mainNewsIconNew} />
                      </a>
                    </div>
                    <a
                      className="image"
                      href="https://kakaoenterprise.com/press/%ec%84%9c%ec%9a%b8%ea%b2%bd%ec%a0%9c%ec%a7%84%ed%9d%a5%ec%9b%90%ea%b3%bc-%ec%83%81%eb%b0%98%ea%b8%b0-ai-%eb%b0%8f-%eb%94%94%ec%a7%80%ed%84%b8-%ec%a0%84%ed%99%98-%ec%9c%84%ed%95%9c-%eb%a1%9c/"
                    >
                      <h3>
                        서울경제진흥원과
                        <br />
                        상반기 AI 및 디지털 전환 위한 ‘로켓런처’ 참여 기업 모집
                      </h3>
                      <div>
                        <img alt="" src={mainNews2} />
                      </div>
                    </a>
                    <div className="tag">
                      <a href="https://kakaoenterprise.com/tag/ai/">
                        <span>#AI</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%eb%a1%9c%ec%bc%93%eb%9f%b0%ec%b2%98/">
                        <span>#로켓런처</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%84%9c%ec%9a%b8%ea%b2%bd%ec%a0%9c%ec%a7%84%ed%9d%a5%ec%9b%90/">
                        <span>#서울경제진흥원</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%b9%b4%ec%b9%b4%ec%98%a4%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c/">
                        <span>#카카오클라우드</span>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="title">
                      <a href="https://kakaoenterprise.com/info/news/press/">
                        <span>보도자료</span>
                      </a>
                    </div>
                    <a
                      className="image"
                      href="https://kakaoenterprise.com/press/%ec%a0%84%eb%b6%81%ed%8a%b9%eb%b3%84%ec%9e%90%ec%b9%98%eb%8f%84-%ec%a7%80%ec%97%ad%ed%98%81%ec%8b%a0%ec%a4%91%ec%8b%ac-%eb%8c%80%ed%95%99%ec%a7%80%ec%9b%90%ec%b2%b4%ea%b3%84rise-%ed%94%8c%eb%9e%ab/"
                    >
                      <h3>
                        전북특별자치도 지역혁신중심 대학지원체계(RISE) 플랫폼
                        구축
                      </h3>
                      <div>
                        <img alt="" src={mainNews4} />
                      </div>
                    </a>
                    <div className="tag">
                      <a href="https://kakaoenterprise.com/tag/rise/">
                        <span>#RISE</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%eb%8c%80%ed%95%99%ec%a7%80%ec%9b%90%ec%b2%b4%ea%b3%84/">
                        <span>#대학지원체계</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%a0%84%eb%b6%81%ec%9e%90%ec%b9%98%eb%8f%84/">
                        <span>#전북자치도</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%a0%84%eb%b6%81%ed%8a%b9%eb%b3%84%ec%9e%90%ec%b9%98%eb%8f%84/">
                        <span>#전북특별자치도</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%a7%80%ec%97%ad%ed%98%81%ec%8b%a0%ec%a4%91%ec%8b%ac/">
                        <span>#지역혁신중심</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%b9%b4%ec%b9%b4%ec%98%a4%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c/">
                        <span>#카카오클라우드</span>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="title">
                      <a href="https://kakaoenterprise.com/info/news/press/">
                        <span>보도자료</span>
                      </a>
                    </div>
                    <a
                      className="image"
                      href="https://kakaoenterprise.com/press/%ec%b9%b4%ec%b9%b4%ec%98%a4%ec%97%94%ed%84%b0%ed%94%84%eb%9d%bc%ec%9d%b4%ec%a6%88-%ec%83%81%ec%83%9d-%ed%94%84%eb%a1%9c%ea%b7%b8%eb%9e%a8-%eb%a1%9c%ec%bc%93%eb%9f%b0%ec%b2%98/"
                    >
                      <h3>
                        카카오엔터프라이즈 상생 프로그램 ‘로켓런처’ 생태계 확대
                      </h3>
                      <div>
                        <img alt="" src={mainNews6} />
                      </div>
                    </a>
                    <div className="tag">
                      <a href="https://kakaoenterprise.com/tag/%eb%a1%9c%ec%bc%93%eb%9f%b0%ec%b2%98/">
                        <span>#로켓런처</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%eb%b2%a4%ec%b2%98%ec%ba%90%ed%94%bc%ed%83%88/">
                        <span>#벤처캐피탈</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%95%a1%ec%85%80%eb%9f%ac%eb%a0%88%ec%9d%b4%ed%84%b0/">
                        <span>#액셀러레이터</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%b9%b4%ec%b9%b4%ec%98%a4%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c/">
                        <span>#카카오클라우드</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c%ed%81%ac%eb%a0%88%eb%94%a7/">
                        <span>#클라우드크레딧</span>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="title">
                      <a href="https://kakaoenterprise.com/info/news/press/">
                        <span>보도자료</span>
                      </a>
                    </div>
                    <a
                      className="image"
                      href="https://kakaoenterprise.com/press/%ec%b9%b4%ec%b9%b4%ec%98%a4%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c-%ed%99%88%ed%8e%98%ec%9d%b4%ec%a7%80-%ec%83%88-%eb%8b%a8%ec%9e%a5-%ec%82%ac%ec%9a%a9%ec%9e%90-%ec%a4%91%ec%8b%ac-%ec%bd%98/"
                    >
                      <h3>
                        카카오클라우드 홈페이지 새 단장 ”사용자 중심 콘텐츠 및
                        접근성 강화”
                      </h3>
                      <div>
                        <img alt="" src={mainNews8} />
                      </div>
                    </a>
                    <div className="tag">
                      <a href="https://kakaoenterprise.com/tag/%eb%a1%9c%ec%bc%93%eb%9f%b0%ec%b2%98/">
                        <span>#로켓런처</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%eb%a7%88%ec%bc%93%ed%94%8c%eb%a0%88%ec%9d%b4%ec%8a%a4/">
                        <span>#마켓플레이스</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%b9%b4%ec%b9%b4%ec%98%a4%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c/">
                        <span>#카카오클라우드</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c%ec%a0%84%ed%99%98/">
                        <span>#클라우드전환</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="item">
                    <div className="title">
                      <a href="https://kakaoenterprise.com/info/news/press/">
                        <span>보도자료</span>
                      </a>
                    </div>
                    <a
                      className="image"
                      href="https://kakaoenterprise.com/press/%ec%9d%b4%ec%9b%90%ec%a3%bc-%eb%8c%80%ed%91%9c%ec%9d%b4%ec%82%ac-%ec%84%a0%ec%9e%84/"
                    >
                      <h3>이원주 대표이사 선임</h3>
                      <div>
                        <img alt="" className="image-01" src={mainNews1} />
                      </div>
                    </a>
                    <div className="tag">
                      <a href="https://kakaoenterprise.com/tag/%eb%94%94%ec%bc%80%ec%9d%b4%ed%85%8c%ed%81%ac%ec%9d%b8/">
                        <span>#디케이테크인</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%9d%b4%ec%9b%90%ec%a3%bc%eb%8c%80%ed%91%9c/">
                        <span>#이원주대표</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%b9%b4%ec%b9%b4%ec%98%a4%ec%97%94%ed%84%b0%ed%94%84%eb%9d%bc%ec%9d%b4%ec%a6%88/">
                        <span>#카카오엔터프라이즈</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%b9%b4%ec%b9%b4%ec%98%a4%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c/">
                        <span>#카카오클라우드</span>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="title">
                      <a href="https://kakaoenterprise.com/info/news/press/">
                        <span>보도자료</span>
                      </a>
                    </div>
                    <a
                      className="image"
                      href="https://kakaoenterprise.com/press/k-%eb%94%94%ec%a7%80%ed%84%b8-%ed%8a%b8%eb%a0%88%ec%9d%b4%eb%8b%9d-%eb%94%94%ec%a7%80%ed%84%b8-%ec%84%a0%eb%8f%84%ea%b8%b0%ec%97%85-%ec%95%84%ec%b9%b4%eb%8d%b0%eb%af%b8-%ea%b5%90%ec%9c%a1%ec%83%9d/"
                    >
                      <h3>
                        K-디지털 트레이닝 디지털 선도기업 아카데미 교육생 모집
                      </h3>
                      <div>
                        <img alt="" src={mainNews3} />
                      </div>
                    </a>
                    <div className="tag">
                      <a href="https://kakaoenterprise.com/tag/aiaas/">
                        <span>#Alaas</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/k%eb%94%94%ec%a7%80%ed%84%b8%ed%8a%b8%eb%a0%88%ec%9d%b4%eb%8b%9d/">
                        <span>#디지털트레이닝</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%eb%94%94%ec%a7%80%ed%84%b8%ec%84%a0%eb%8f%84%ea%b8%b0%ec%97%85/">
                        <span>#디지털 선도기업</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%b9%b4%ec%b9%b4%ec%98%a4%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c/">
                        <span>#카카오클라우드</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c%ea%b5%90%ec%9c%a1/">
                        <span>#클라우드교육</span>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="title">
                      <a href="https://kakaoenterprise.com/info/news/press/">
                        <span>보도자료</span>
                      </a>
                    </div>
                    <a
                      className="image"
                      href="https://kakaoenterprise.com/press/%ec%94%a8%ec%97%94%ed%8b%b0%ed%85%8c%ed%81%ac%ec%99%80-%ec%b4%88%ea%b8%b0%ec%b0%bd%ec%97%85%ed%8c%a8%ed%82%a4%ec%a7%80-%ea%b3%b5%eb%8f%99-%ec%9a%b4%ec%98%81-%eb%b0%8f-%ec%95%a1%ec%85%80%eb%9f%ac/"
                    >
                      <h3>
                        씨엔티테크와 초기창업패키지 공동 운영 및 액셀러레이팅
                        협력 체계 구축
                      </h3>
                      <div>
                        <img alt="" src={mainNews5} />
                      </div>
                    </a>
                    <div className="tag">
                      <a href="https://kakaoenterprise.com/tag/%eb%a1%9c%ec%bc%93%eb%9f%b0%ec%b2%98/">
                        <span>#로켓런처</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%8a%a4%ed%83%80%ed%8a%b8%ec%97%85/">
                        <span>#스타트업</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%94%a8%ec%97%94%ed%8b%b0%ed%85%8c%ed%81%ac/">
                        <span>#씨엔티테크</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%b9%b4%ec%b9%b4%ec%98%a4%ec%97%94%ed%84%b0%ed%94%84%eb%9d%bc%ec%9d%b4%ec%a6%88/">
                        <span>#카카오엔터프라이즈</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%b9%b4%ec%b9%b4%ec%98%a4%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c/">
                        <span>#카카오클라우드</span>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="title">
                      <a href="https://kakaoenterprise.com/info/news/press/">
                        <span>보도자료</span>
                      </a>
                    </div>
                    <a
                      className="image"
                      href="https://kakaoenterprise.com/press/%eb%aa%bd%ea%b3%a8-%ea%b3%bc%ea%b8%b0%eb%8c%80-%ec%9d%b8%ed%84%b4%ec%8b%ad-%ed%94%84%eb%a1%9c%ea%b7%b8%eb%9e%a8-%ec%a2%85%eb%a3%8c%ef%bf%bc/"
                    >
                      <h3>몽골 과기대 인턴십 프로그램 종료￼</h3>
                      <div>
                        <img alt="" src={mainNews7} />
                      </div>
                    </a>
                    <div className="tag">
                      <a href="https://kakaoenterprise.com/tag/koica/">
                        <span>#KOICA</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/koica%ed%94%8c%eb%9e%ab%ed%8f%bcesg%ec%9d%b4%eb%8b%88%ec%85%94%ed%8b%b0%eb%b8%8c/">
                        <span>#KOICA플랫폼ESG이니셔티브</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%eb%aa%bd%ea%b3%a8%ea%b3%bc%ed%95%99%ea%b8%b0%ec%88%a0%eb%8c%80%ed%95%99%ea%b5%90/">
                        <span>#몽골과학기술대학교</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%b9%b4%ec%b9%b4%ec%98%a4%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c/">
                        <span>#카카오클라우드</span>
                      </a>
                      <a href="https://kakaoenterprise.com/tag/%ec%bd%94%ec%9d%b4%ec%b9%b4/">
                        <span>#코이카</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="more">
              <div className="more-content">
                <a href="https://kakaoenterprise.com/">
                  <span>더 불러오기</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="banner">
          <div className="container">
            <div className="back">
              <div className="wrap">
                <div className="data">
                  <div className="inner">
                    <h2>
                      카카오엔터프라이즈의
                      <br />
                      다양한 영상 자료들도 확인해보세요
                    </h2>
                    <div className="link">
                      <a href="https://www.youtube.com/@Kakaocloud/featured">
                        <span>공식채널 보기</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="business">
          <div className="container">
            <div className="head">
              <h2>혁신적인 비즈니스</h2>
            </div>
            <ul className="list">
              <li>
                <span className="label">회사소개</span>
                <p className="txt">
                  카카오엔터프라이즈는 비즈니스와 일상에 기술을 더하여 디지털
                  혁신을 만들어갑니다.
                </p>
                <a
                  className="link"
                  href="https://kakaoenterprise.com/info/about/"
                >
                  <span>회사소개 바로가기</span>
                </a>
              </li>
              <li>
                <span className="label">개발자</span>
                <p className="txt">
                  카카오엔터프라이즈는 개발자들과 함께 성장하는 기술 기업입니다.
                </p>
                <a
                  className="link"
                  href="https://kakaoenterprise.com/developer/"
                >
                  <span>개발자 바로가기</span>
                </a>
              </li>
              <li>
                <span className="label">인재영입</span>
                <p className="txt">
                  국내 최고의 개발자, 기획자, 디자이너 그리고 비즈니스 전문가가
                  모여 새로운 길을 만들어갑니다.
                </p>
                <a
                  className="link"
                  href="https://careers.kakaoenterprise.com/intro"
                >
                  <span>인재영입 바로가기</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="extend">
            <nav>
              <ul>
                <li>
                  <a href="https://kakaoenterprise.com/info/about/">회사소개</a>
                </li>
                <li>
                  <a href="https://policy.kakaoenterprise.com/service_privacy">
                    개인정보처리방침
                  </a>
                </li>
                <li>
                  <a href="https://compliance.kakaoenterprise.com/cyberethics/info">
                    사이버윤리실
                  </a>
                </li>
                <li>
                  <a href="https://kakaoenterprise.com/notice/">공지사항</a>
                </li>
                <li>
                  <a href="https://help.kakaoenterprise.com/hc/ko">고객지원</a>
                </li>
              </ul>
            </nav>
            <div className="button">
              <button>
                <span>관련사이트</span>
              </button>
            </div>
          </div>
          <nav className="wrap">
            <ul>
              <li>
                <a href="https://www.instagram.com/kakaocloud/#">
                  <img alt="" src={instagram} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/kakaocloud">
                  <img alt="" src={facebook} />
                </a>
              </li>
              <li>
                <a href="https://blog.kakaocloud.com/">
                  <img alt="" src={blog} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCVxXa4KKYyw3mQ3KYqze9Ng/featured">
                  <img alt="" src={youtube} />
                </a>
              </li>
              <li>
                <a href="https://pf.kakao.com/_lVmtT">
                  <img alt="" src={kakaoTalk} />
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            <p>© Kakao Enterprise Corp.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
