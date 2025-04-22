import youtube from "../image/footer-icon-youtube.png";
import facebook from "../image/footer-icon-face.png";
import instagram from "../image/footer-icon-insta.png";
import kakaoTalk from "../image/footer-icon-kakao.png";
import blog from "../image/footer-icon-blog.svg";

export const Footer = () => {
  return (
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
  );
};
