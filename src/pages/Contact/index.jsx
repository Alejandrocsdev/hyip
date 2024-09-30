// 樣式模組 (css module)
import S from './style.module.css'
// 圖檔 (image)
import phoneSvg from '../../assets/img/icon/phone.svg'
import mailSvg from '../../assets/img/icon/mail.svg'
import mapSvg from '../../assets/img/icon/map.svg'
// 組件 (component)
import ContactForm from './ContactForm'

// 聯繫
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
            <ContactForm />
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
