// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'
// 圖檔
import logo_svg from '../../assets/img/logo/logo.svg'
// 組件
import Dropdown from '../Dropdown'
import MobileMenu from '../MobileMenu'
// import MobileDropdown from '../MobileDropdown'

// 頁首組件
function Header() {
  return (
    <>
      <header className={S.header}>
        <nav className={S.nav}>
          <div className={S.logo}>
            <Link to="/">
              <img src={logo_svg} />
              <span>CRYPTO</span>
            </Link>
          </div>
          <div className={S.menu}>
            <Link className={S.signIn} to="/sign-in">
              Sign In
            </Link>
            <Dropdown />
            <MobileMenu />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
