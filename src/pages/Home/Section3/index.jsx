// 樣式模組 (css module)
import S from './style.module.css'
// 圖檔 (image)
import competitiveProfitPng from '../../../assets/img/info/competitive-profit.png'
import checkMarkSvg from '../../../assets/img/icon/check-mark.svg'
import reliablePartnerSvg from '../../../assets/img/organization/mkm.svg'
import affiliateProgramSvg from '../../../assets/img/icon/binary-system.svg'

import { useTranslation } from 'react-i18next'

// (第三區: 投資優勢)組件
function Section3() {
  const { t } = useTranslation()
  return (
    <section className={S.section}>
      <div className={S.container}>
        {/* 標題 */}
        <h2 className={S.title}>{t('sec3Title')}</h2>
        <ul className={S.content}>
          {/* 收益優勢 */}
          <li className={`${S.item} ${S.wide}`}>
            <div className={S.info}>
              <h3>{t('competitiveProfit')}</h3>
              <p>{t('competitiveProfit_text1')}</p>
            </div>
            <div className={S.profit}>
              <img src={competitiveProfitPng} />
              <div className={S.greenBar}>
                <img src={checkMarkSvg} />
                <span>{t('competitiveProfit_text2')}</span>
              </div>
            </div>
          </li>
          {/* 公司可靠 */}
          <li className={S.item}>
            <div className={S.info}>
              <h3>{t('reliablePartner')}</h3>
              <p>{t('reliablePartner_text')}</p>
            </div>
            <div className={S.partner}>
              <img src={reliablePartnerSvg} />
            </div>
          </li>
          {/* 推廣計畫 */}
          <li className={S.item}>
            <div className={S.info}>
              <h3>{t('affiliateProgram')}</h3>
              <p>{t('affiliateProgram_text')}</p>
            </div>
            <div className={S.affiliate}>
              <img src={affiliateProgramSvg} />
            </div>
          </li>
          {/* 手續優惠 */}
          <li className={S.item}>
            <div className={S.info}>
              <h3>{t('lowFee')}</h3>
              <p>{t('lowFee_text')}</p>
            </div>
            <div className={S.fee}>
              <div>5</div>
              <div>USDT</div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Section3
