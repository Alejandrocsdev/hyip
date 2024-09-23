// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'
import { useState } from 'react'
// 圖檔
import logo_svg from '../../assets/img/logo/logo.svg'
import logo_origin_svg from '../../assets/img/logo/logo-origin.svg'
// 組件
import FacebookSVG from '../SVG/FacebookSVG'
import TwitterSVG from '../SVG/TwitterSVG'
import InstagramSVG from '../SVG/InstagramSVG'

// 頁尾組件
function Footer() {
  return (
    <>
      <footer className={S.footer}>
        <div className={S.container}>
          <div className={S.body}>
            <div className={S.social}>
              <Link to="/">
                <img src={logo_svg} />
                <span className={S.crypto}>CRYPTO</span>
              </Link>
              <Link to="https://moneyexpress.ee/en" target="blank">
                <img src={logo_origin_svg} />
              </Link>
              <div className={S.icons}>
                <Link to="https://www.facebook.com/moneyexpresslv" target="blank">
                  <FacebookSVG />
                </Link>
                <Link to="https://x.com/MONEYEXPRESSLV" target="blank">
                  <TwitterSVG />
                </Link>
                <Link to="https://www.instagram.com/moneyexpress.lv/" target="blank">
                  <InstagramSVG />
                </Link>
              </div>
            </div>
            <div className={S.info}>
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
