export const Business = () => {
  return (
    <section id="business">
      <div className="container">
        <div className="head">
          <h2>혁신적인 비즈니스</h2>
        </div>
        <ul className="list">
          <li>
            <span className="label">회사소개</span>
            <p className="txt">
              카카오엔터프라이즈는 비즈니스와 일상에 기술을 더하여 디지털 혁신을
              만들어갑니다.
            </p>
            <a className="link" href="https://kakaoenterprise.com/info/about/">
              <span>회사소개 바로가기</span>
            </a>
          </li>
          <li>
            <span className="label">개발자</span>
            <p className="txt">
              카카오엔터프라이즈는 개발자들과 함께 성장하는 기술 기업입니다.
            </p>
            <a className="link" href="https://kakaoenterprise.com/developer/">
              <span>개발자 바로가기</span>
            </a>
          </li>
          <li>
            <span className="label">인재영입</span>
            <p className="txt">
              국내 최고의 개발자, 기획자, 디자이너 그리고 비즈니스 전문가가 모여
              새로운 길을 만들어갑니다.
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
  );
};
