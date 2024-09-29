// 樣式模組 (css module)
import S from './style.module.css'
// 圖檔 (image)
import competitiveProfitPng from '../../../assets/img/info/competitive-profit.png'
import checkMarkSvg from '../../../assets/img/icon/check-mark.svg'
import reliablePartnerSvg from '../../../assets/img/organization/mkm.svg'
import affiliateProgramSvg from '../../../assets/img/icon/binary-system.svg'

// (第三區: 投資優勢)組件
function Section3() {
  return (
    <section className={S.section}>
      <div className={S.container}>
        {/* 標題 */}
        <h2 className={S.title}>Benefits</h2>
        <ul className={S.content}>
          {/* 收益優勢 */}
          <li className={`${S.item} ${S.wide}`}>
            <div className={S.info}>
              <h3>Competitive profit</h3>
              <p>
                We guarantee a fixed daily profit. The more you deposit, the more you top up by next
                Monday.
              </p>
            </div>
            <div className={S.profit}>
              <img src={competitiveProfitPng} />
              <div className={S.greenBar}>
                <img src={checkMarkSvg} />
                <span>Invest 1,000 USDT or more and enjoy a guaranteed 1% daily return!</span>
              </div>
            </div>
          </li>
          {/* 公司可靠 */}
          <li className={S.item}>
            <div className={S.info}>
              <h3>Reliable partner</h3>
              <p>
                MONEY EXPRESS is an international financial company, registered with the Ministry of
                Economic Affairs and Communications of the Republic of Estonia for currency exchange
                services since 2016.
              </p>
            </div>
            <div className={S.partner}>
              <img src={reliablePartnerSvg} />
            </div>
          </li>
          {/* 推廣計畫 */}
          <li className={S.item}>
            <div className={S.info}>
              <h3>Affiliate Program</h3>
              <p>Earn bonuses and rewards through referrals and team growth.</p>
            </div>
            <div className={S.affiliate}>
              <img src={affiliateProgramSvg} />
            </div>
          </li>
          {/* 手續優惠 */}
          <li className={S.item}>
            <div className={S.info}>
              <h3>Low withdrawal fee</h3>
              <p>Withdraw with a fixed 5 USDT fee, no matter the amount.</p>
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
