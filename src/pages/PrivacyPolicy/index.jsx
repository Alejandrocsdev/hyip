// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { Link } from 'react-router-dom'

// 隱私政策
function PrivacyPolicy() {
  return (
    <>
      <main className={S.main}></main>
    </>
  )
}

export default PrivacyPolicy
