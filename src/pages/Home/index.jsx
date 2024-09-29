// 樣式模組 (css module)
import S from './style.module.css'
// 組件 (component)
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

// 首頁
function Home() {
  return (
    <>
      <main className={S.main}>
        {/* 第一區: 獎勵計算 */}
        <Section1 />
        {/* 第二區: 如何投資 */}
        <Section2 />
        {/* 第三區: 投資優勢 */}
        <Section3 />
      </main>
    </>
  )
}

export default Home
