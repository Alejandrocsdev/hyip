// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useTranslation } from 'react-i18next'
// 圖檔 (image)
import phoneSvg from '../../assets/img/icon/phone.svg'
import mailSvg from '../../assets/img/icon/mail.svg'
import mapSvg from '../../assets/img/icon/map.svg'
// 組件 (component)
import Anchor from '../../components/Anchor'
import ContactForm from './ContactForm'

// 聯繫
function Contact() {
  // 語言
  const { t } = useTranslation()
  return (
    <>
      <main className={S.main}>
        <div className={S.container}>
          <div className={S.inner}>
            <div className={S.content}>
              <h1 className={S.title}>{t('contactUs')}</h1>
              <p className={S.text}>{t('contactUs_subtitle')}</p>
            </div>
            <ContactForm />
            <address className={S.address}>
              <Anchor ext="+3726609010" phone>
                <i>
                  <img src={phoneSvg} />
                </i>
                +372 6 609 010
              </Anchor>
              <Anchor ext="info@moneyexpresscrypto.ee" email>
                <i>
                  <img src={mailSvg} />
                </i>
                info@moneyexpresscrypto.ee
              </Anchor>
              <div className={S.map}>
                <i>
                  <img src={mapSvg} />
                </i>
                <p>
                  MoneyExpress OÜ
                  <br />
                  {t('registerNumber')}: 11557160
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
