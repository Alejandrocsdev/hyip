// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'
// 組件
import Logo from '../../components/Logo'
import FacebookSvg from '../../components/Svg/FacebookSvg'
import TwitterSvg from '../../components/Svg/TwitterSvg'
import InstagramSvg from '../../components/Svg/InstagramSvg'

// 頁尾組件
function Footer() {
  return (
    <>
      <footer className={S.footer}>
        <div className={S.container}>
          {/* 主體 */}
          <div className={S.body}>
            {/* 社群 */}
            <div className={S.social}>
              <Logo type="crypto" color="white" />
              <Logo type="origin" color="white" />
              <div className={S.icons}>
                <Link to="https://www.facebook.com/moneyexpresslv" target="blank">
                  <FacebookSvg />
                </Link>
                <Link to="https://x.com/MONEYEXPRESSLV" target="blank">
                  <TwitterSvg />
                </Link>
                <Link to="https://www.instagram.com/moneyexpress.lv/" target="blank">
                  <InstagramSvg />
                </Link>
              </div>
            </div>
            {/* 資訊 */}
            <div className={S.info}>
              {/* 關於 */}
              <div className={S.item}>
                <h5 className={S.title}>About us</h5>
                <ul>
                  <li>
                    <Link to="/about-us">Money Express Crypto</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Contacts</Link>
                  </li>
                </ul>
              </div>
              {/* 聯繫 */}
              <div className={S.item}>
                <h5 className={S.title}>Contacts</h5>
                <address>
                  <div className={S.contacts}>
                    <a href="tel:+3726609010">+372 6 609 010</a>
                    <a href="mailto:info@moneyexpresscrypto.ee">info@moneyexpresscrypto.ee</a>
                  </div>
                  <p>
                    MoneyExpress OÜ
                    <br />
                    Reg. number: 11557160
                    <br />
                    KMKR: EE101342285
                    <br />
                    Pirita tee 20/4-219, Tallinn, 12011, Estonia
                  </p>
                </address>
              </div>
            </div>
          </div>
          {/* 下方 */}
          <div className={S.bottom}>
            <p>© MONEY EXPRESS © All Rights Reserved</p>
            <div className={S.privacy}>
              <Link to="/privacy-policy">Terms and conditions</Link>
              <span> | </span>
              <Link to="/customer-data-processing">Customer data processing procedure</Link>
              <span> | </span>
              <Link to="/complaints">Complaints resolution procedure</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
