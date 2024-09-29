// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { Link } from 'react-router-dom'
import { useState } from 'react'
// 組件 (component)
import Logo from '../../components/Logo'
import LangDrop from './LangDrop'
import MobMenu from './MobMenu'

// 頁首組件
function Header() {
  const [hasBackdrop, setHasBackdrop] = useState(false)

  return (
    <header className={`${S.header} ${hasBackdrop ? S.showBackdrop : ''}`}>
      <nav className={S.nav}>
        {/* Logo */}
        <Logo type="crypto" color="white" />
        {/* 電腦版: 選單 */}
        <div className={S.menu}>
          {/* 登入 */}
          <Link className={S.signIn} to="/sign-in">
            Sign In
          </Link>
          {/* 語言: 下拉選單 */}
          <LangDrop onBackdropToggle={setHasBackdrop} />
          {/* 手機版: 選單 */}
          <MobMenu onBackdropToggle={setHasBackdrop} />
        </div>
      </nav>
    </header>
  )
}

export default Header
