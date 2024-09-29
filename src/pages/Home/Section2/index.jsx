// 樣式模組 (css module)
import S from './style.module.css'

// (第二區: 如何投資)組件
function Section2() {
  return (
    <section className={S.section}>
      <div className={S.container}>
        {/* 標題 */}
        <h2 className={S.title}>How to start earning?</h2>
        <ol className={S.content}>
          {/* 步驟1: 註冊 */}
          <li>
            <p className={S.tag}>#1</p>
            <h3 className={S.name}>Sign Up</h3>
            <p className={S.text}>Create an account using invitation code or link</p>
          </li>
          {/* 步驟2: 選擇計劃 */}
          <li>
            <p className={S.tag}>#2</p>
            <h3 className={S.name}>Select a plan</h3>
            <p className={S.text}>
              Choose Basic for 0.5% or Elite for 1.0% ROI, and deposit in USDT
            </p>
          </li>
          {/* 步驟3: 提領 */}
          <li>
            <p className={S.tag}>#3</p>
            <h3 className={S.name}>Top up</h3>
            <p className={S.text}>Payments reflect on your dashboard every Monday</p>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default Section2
