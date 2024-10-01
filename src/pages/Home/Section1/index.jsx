// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useTranslation } from 'react-i18next'
// 圖檔 (image)
import usdtTrc20Png from '../../../assets/img/element/usdt-trc20.png'
// 組件 (component)
import Calculator from './Calculator'


// (第一區: 獎勵計算)組件
function Section1() {
  // 語言
  const { t } = useTranslation()
  return (
    <section className={S.section}>
      <div className={S.container}>
        {/* 登陸文字 */}
        <div className={S.content}>
          {/* 主標題 */}
          <h1 className={S.title}>
          {t('sec1Title')} <span>{t('express')}</span>
          </h1>
          {/* 副標題 */}
          <p className={S.subtitle}>{t('sec1Subtitle')}</p>
          {/* 桌面板: USDT */}
          <div className={S.usdt}>
            <img src={usdtTrc20Png} />
            <span>USDT ( TRC-20 )</span>
          </div>
        </div>
        {/* 計算機 */}
        <Calculator />
        {/* 手機板: USDT */}
        <div className={S.usdtMob}>
          <img src={usdtTrc20Png} />
          <span>USDT ( TRC-20 )</span>
        </div>
      </div>
    </section>
  )
}

export default Section1
