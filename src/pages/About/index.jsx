// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

// 首頁
function About() {
  const { t } = useTranslation()
  return (
    <>
      <main className={S.main}>
        <div className={S.container}>
          <div className={S.title}>
            <h1>{t('aboutUsTitle')}</h1>
          </div>
          <div className={S.text}>
            <p>{t('aboutP001')}</p>
            <p>{t('aboutP002')}</p>
            <ul>
              <li>{t('aboutLi001')}</li>
              <li>{t('aboutLi002')}</li>
              <li>{t('aboutLi003')}</li>
              <li>{t('aboutLi004')}</li>
              <li>{t('aboutLi005')}</li>
            </ul>
            <p>
              {t('aboutP003_1')}{' '}
              <Link
                to="https://mtr.ttja.ee/juriidiline_isik/83251?backurl=%2Fjuriidiline_isik"
                target="_blank"
              >
                {t('aboutP003_2')}
              </Link>{' '}
              {t('aboutP003_3')}
            </p>
            <p>
              {t('aboutP004_1')}{' '}
              <Link
                to="https://fi.ee/en/payment-services/payment-institutions/payment-agents-providers-cross-border-payment-services/moneyexpress-ou"
                target="_blank"
              >
                {t('aboutP004_2')}
              </Link>
              .
            </p>
            <p>{t('aboutP005')}</p>
            <p>{t('aboutP006')}</p>
            <p>{t('aboutP007')}</p>
            <p>{t('aboutP008')}</p>
            <p>{t('aboutP009')}</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default About
