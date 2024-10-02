// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
// 組件 (component)
import Logo from '../../components/Logo'
import Anchor from '../../components/Anchor'
import FacebookSvg from '../../components/Svg/FacebookSvg'
import TwitterSvg from '../../components/Svg/TwitterSvg'
import InstagramSvg from '../../components/Svg/InstagramSvg'

// 頁尾組件
function Footer() {
  // 語言
  const { t } = useTranslation()

  const { lang } = useParams()

  return (
    <>
      <footer className={S.footer}>
        <div className={S.container}>
          {/* 主體 */}
          <div className={S.body}>
            {/* 社群 */}
            <div className={S.social}>
              <Logo site="crypto" color="white" />
              <Logo site="origin" color="white" />
              <div className={S.icons}>
                <Anchor ext="https://www.facebook.com/moneyexpresslv">
                  <FacebookSvg className={S.icon} />
                </Anchor>
                <Anchor ext="https://x.com/MONEYEXPRESSLV">
                  <TwitterSvg className={S.icon} />
                </Anchor>
                <Anchor ext="https://www.instagram.com/moneyexpress.lv/">
                  <InstagramSvg className={S.icon} />
                </Anchor>
              </div>
            </div>
            {/* 資訊 */}
            <div className={S.info}>
              {/* 關於 */}
              <div className={S.item}>
                <h5 className={S.title}>{t('aboutUs')}</h5>
                <ul>
                  <li>
                    <Anchor int="/about-us">{t('aboutCompany')}</Anchor>
                  </li>
                  <li>
                    <Anchor int="/contacts">{t('contacts')}</Anchor>
                  </li>
                </ul>
              </div>
              {/* 聯繫 */}
              <div className={S.item}>
                <h5 className={S.title}>{t('contacts')}</h5>
                <address>
                  <div className={S.contacts}>
                    <Anchor ext="+3726609010" phone>+372 6 609 010</Anchor>
                    <Anchor ext="info@moneyexpresscrypto.ee" email>info@moneyexpresscrypto.ee</Anchor>
                  </div>
                  <p>
                    MoneyExpress OÜ
                    <br />
                    {t('registerNumber')}: 11557160
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
              <Anchor int="/privacy-policy">{t('privacyPolicy')}</Anchor>
              <span> | </span>
              <Anchor int="/customer-data-processing">{t('customerDataProcessing')}</Anchor>
              <span> | </span>
              <Anchor int="/complaints">{t('complaints')}</Anchor>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
