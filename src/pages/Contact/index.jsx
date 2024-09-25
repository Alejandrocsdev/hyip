// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'
// 圖檔
import phoneSvg from '../../assets/img/icon/phone.svg'
import mailSvg from '../../assets/img/icon/mail.svg'
import mapSvg from '../../assets/img/icon/map.svg'
import checkboxSvg from '../../assets/img/icon/checkbox.svg'
import greenCheckSvg from '../../assets/img/icon/green-check.svg'

// 首頁
function Contact() {
  return (
    <>
      <main className={S.main}>
        <div className={S.container}>
          <div className={S.inner}>
            <div className={S.content}>
              <h1 className={S.title}>Contact us</h1>
              <p className={S.text}>We are happy to answer any of your questions</p>
            </div>
            <div className={S.form}>
              <form>
                <div className={S.inputs}>
                  <div className={S.input}>
                    <span>Name</span>
                    <input type="text" />
                  </div>
                  <div className={S.input}>
                    <span>Email</span>
                    <input type="text" />
                  </div>
                  <div className={S.input}>
                    <span>Phone</span>
                    <input type="text" />
                  </div>
                </div>
                <div className={S.message}>
                  <span>How can we help?</span>
                  <textarea name="" id="" placeholder="Write your question"></textarea>
                </div>
                <div className={S.agreements}>
                  <input className={S.checkbox} type="checkbox" name="" id="agreeTermsConditions" />
                  <div className={S.checkboxBody}>
                    <label htmlFor="agreeTermsConditions"></label>
                    <img src={checkboxSvg} />
                    <p>
                      I consent to the use of my data and have read the{' '}
                      <Link>Terms and conditions</Link> ,{' '}
                      <Link>Customer data processing procedure</Link> and{' '}
                      <Link>Complaints resolution procedure</Link>
                    </p>
                  </div>
                </div>
                <button className={S.submit}>Send</button>
              </form>
              {/* <div className={S.thanks}>
                <img src={greenCheckSvg} />
                <p>
                  <b>Thank you! Your message has been sent.</b>
                </p>
                <button type="button">Done</button>
              </div> */}
            </div>
            <address className={S.address}>
              <a href="tel:+3726609010">
                <i>
                  <img src={phoneSvg} />
                </i>
                +372 6 609 010
              </a>
              <a href="mailto:info@moneyexpresscrypto.ee">
                <i>
                  <img src={mailSvg} />
                </i>
                info@moneyexpresscrypto.ee
              </a>
              <div className={S.map}>
                <i>
                  <img src={mapSvg} />
                </i>
                <p>
                  MoneyExpress OÜ
                  <br />
                  Reg. number: 11557160
                  <br />
                  KMKR: EE101342285
                  <br />
                  Pirita tee 20/4-219, Tallinn, 12011, Estonia
                </p>
              </div>
            </address>
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact
