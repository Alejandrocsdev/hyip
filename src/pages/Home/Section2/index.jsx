// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useTranslation } from 'react-i18next'

// (第二區: 如何投資)組件
function Section2() {
  // 語言
  const { t } = useTranslation()
  return (
    <section className={S.section}>
      <div className={S.container}>
        {/* 標題 */}
        <h2 className={S.title}>{t('sec2Title')}</h2>
        <ol className={S.content}>
          {/* 步驟1: 註冊 */}
          <li>
            <p className={S.tag}>#1</p>
            <h3 className={S.name}>{t('signUp')}</h3>
            <p className={S.text}>{t('signUp_text')}</p>
          </li>
          {/* 步驟2: 選擇計劃 */}
          <li>
            <p className={S.tag}>#2</p>
            <h3 className={S.name}>{t('selectPlan')}</h3>
            <p className={S.text}>{t('selectPlan_text')}</p>
          </li>
          {/* 步驟3: 提領 */}
          <li>
            <p className={S.tag}>#3</p>
            <h3 className={S.name}>{t('topUp')}</h3>
            <p className={S.text}>{t('topUp_text')}</p>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default Section2
