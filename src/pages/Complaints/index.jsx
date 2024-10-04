// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { Trans, useTranslation } from 'react-i18next'
// 組件 (component)
import Anchor from '../../components/Anchor'

// 首頁
function Complaints() {
  // 語言
  const { t } = useTranslation()
  return (
    <>
      <main className={S.main}>
        <div className={S.container}>
          <h1 className={S.title}>{t('complaintsMainTitle')}</h1>
          <div className={S.validTime}>
            <div className={S.date}>
              <p>{t('complaintsDate01')}</p>
              <p>{t('complaintsDate02')}</p>
              <p>{t('complaintsDate03')}</p>
            </div>
          </div>
          <ol className={S.list}>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('complaintsTitle01')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>{t('complaints01')}</li>
                    <li>{t('complaints02')}</li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('complaintsTitle02')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>{t('complaints03')}</li>
                    <li>
                      <Trans
                        i18nKey="complaints04"
                        components={{
                          1: <Anchor ext="info@moneyexpresscrypto.ee" email />
                        }}
                      />
                    </li>
                    <li>
                      {t('complaints05')}

                      <ul>
                        <li>{t('complaints06')}</li>
                        <li>{t('complaints07')}</li>
                        <li>{t('complaints08')}</li>
                        <li>{t('complaints09')}</li>
                        <li>{t('complaints10')}</li>
                      </ul>
                    </li>
                    <li>{t('complaints11')}</li>
                    <li>{t('complaints12')}</li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('complaintsTitle03')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>{t('complaints13')}</li>
                    <li>{t('complaints14')}</li>
                    <li>{t('complaints15')}</li>
                    <li>{t('complaints16')}</li>
                    <li>{t('complaints17')}</li>
                  </ol>
                </div>
              </section>
            </li>
            <li className={S.item}>
              <section className={S.inner}>
                <h2 className={S.subtitle}>{t('complaintsTitle04')}</h2>
                <div className={S.text}>
                  <ol>
                    <li>
                      <Trans
                        i18nKey="complaints18"
                        components={{
                          1: <Anchor ext="info@tarbijakaitseamet.ee" email />
                        }}
                      />
                    </li>
                    <li>
                      <Trans
                        i18nKey="complaints19"
                        components={{
                          1: <Anchor ext="info@aki.ee" email />
                        }}
                      />
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

export default Complaints
