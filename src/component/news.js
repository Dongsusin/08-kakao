import mainNewstitle1 from "../image/main-news-title1.svg";
import mainNewstitle2 from "../image/main-news-title2.svg";
import mainNewstitle3 from "../image/main-news-title3.svg";
import mainNewstitle4 from "../image/main-news-title4.svg";
import mainNews1 from "../image/main-news1.jpg";
import mainNews2 from "../image/main-news2.jpg";
import mainNews3 from "../image/main-news3.jpg";
import mainNews4 from "../image/main-news4.png";
import mainNews5 from "../image/main-news5.jpg";
import mainNews6 from "../image/main-news6.jpg";
import mainNews7 from "../image/main-news7.jpg";
import mainNews8 from "../image/main-news8.jpg";
import mainNewsIconNew from "../image/main-news-icon-new.png";

export const News = () => {
  return (
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
                    전북특별자치도 지역혁신중심 대학지원체계(RISE) 플랫폼 구축
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
                    씨엔티테크와 초기창업패키지 공동 운영 및 액셀러레이팅 협력
                    체계 구축
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
  );
};
