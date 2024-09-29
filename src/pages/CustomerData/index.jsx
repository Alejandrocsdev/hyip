// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { Link } from 'react-router-dom'

// 用戶資訊
function CustomerData() {
  return (
    <>
      <main className={S.main}></main>
    </>
  )
}

export default CustomerData
