// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { Trans, useTranslation } from 'react-i18next'
// 組件 (component)
import Anchor from '../../components/Anchor'

// 首頁
function PrivacyPolicy() {
  // 語言
  const { t } = useTranslation()
  return (
    <>
      <main className={S.main}>
        <div className={S.container}>
          <h1 className={S.title}>{t('privacyMainTitle')}</h1>
          <ol className={S.list}>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('privacyTitle01')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      <Trans i18nKey="privacy001"></Trans>
                    </li>
                    <li>{t('privacy002')}</li>
                    <li>{t('privacy003')}</li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('privacyTitle02')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>{t('privacy004')}</li>
                    <li>{t('privacy005')}</li>
                    <li>{t('privacy006')}</li>
                    <li>{t('privacy007')}</li>
                    <li>{t('privacy008')}</li>
                    <li>{t('privacy009')}</li>
                    <li>{t('privacy010')}</li>
                    <li>{t('privacy011')}</li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('privacyTitle03')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>{t('privacy012')}</li>
                    <li>{t('privacy013')}</li>
                    <li>{t('privacy014')}</li>
                    <li>{t('privacy015')}</li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('privacyTitle04')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>{t('privacy016')}</li>
                    <li>{t('privacy017')}</li>
                    <li>{t('privacy018')}</li>
                    <li>{t('privacy019')}</li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('privacyTitle05')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>{t('privacy020')}</li>
                    <li>{t('privacy021')}</li>
                    <li>
                      <Trans
                        i18nKey="privacy022"
                        components={{
                          1: <Anchor ext="info@moneyexpresscrypto.ee" email />,
                          3: <Anchor int="/complaints" target="_blank" />
                        }}
                      ></Trans>
                    </li>
                  </ol>
                </div>
              </section>
            </li>
          </ol>
        </div>
      </main>
    </>
  )
}

export default PrivacyPolicy
