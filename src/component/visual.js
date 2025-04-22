import mainVisual1 from "../image/main-visual1.jpg";
import mainVisual2 from "../image/main-visual2.jpg";
import mainVisual3 from "../image/main-visual3.jpg";
import mainVisual4 from "../image/main-visual4.jpg";
import mainVisual5 from "../image/main-visual5.jpg";
import mainVisual6 from "../image/main-visual6.jpg";

export const Visual = () => {
  return (
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
  );
};
