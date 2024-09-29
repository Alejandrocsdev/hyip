// 樣式模組 (css module)
import S from './style.module.css'
// 圖檔 (image)
import usdtTrc20Png from '../../../assets/img/element/usdt-trc20.png'
// 組件 (component)
import Calculator from './Calculator'

// (第一區: 獎勵計算)組件
function Section1() {
  return (
    <section className={S.section}>
      <div className={S.container}>
        {/* 登陸文字 */}
        <div className={S.content}>
          {/* 主標題 */}
          <h1 className={S.title}>
            Cryptocurrency investment <span>express</span>
          </h1>
          {/* 副標題 */}
          <p className={S.subtitle}>
            Choose your investment amount, start earning profits, and receive your first payment by
            next Monday
          </p>
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
