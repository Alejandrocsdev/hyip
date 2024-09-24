// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'
// 組件
import Logo from '../../components/Logo'
import LangDrop from './LangDrop'
import MobileMenu from './MobileMenu'

// 頁首組件
function Header() {
  return (
    <>
      <header className={S.header}>
        <nav className={S.nav}>
          <Logo type="crypto" color="white" />
          {/* 電腦版: 選單 */}
          <div className={S.menu}>
            {/* 登入 */}
            <Link className={S.signIn} to="/sign-in">
              Sign In
            </Link>
            {/* 語言: 下拉選單 */}
            <LangDrop />
            {/* 手機版: 選單 */}
            <MobileMenu />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
