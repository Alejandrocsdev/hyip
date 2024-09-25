// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import useBodyClass from '../../../hooks/useBodyClass'
import useClickOutside from '../../../hooks/useClickOutside'
// 圖檔
import signInSvg from '../../../assets/img/icon/sign-in.svg'
import signUpSvg from '../../../assets/img/icon/sign-up.svg'
import aboutUsSvg from '../../../assets/img/icon/about_us.svg'
import contactsSvg from '../../../assets/img/icon/contacts.svg'
import globeSvg from '../../../assets/img/icon/globe.svg'
import usSvg from '../../../assets/img/flag/us.svg'
import ruSvg from '../../../assets/img/flag/ru.svg'
import eeSvg from '../../../assets/img/flag/ee.svg'
import mkmSvg from '../../../assets/img/organization/mkm.svg'
// 組件
import Logo from '../../../components/Logo'
// 選單組件
function MobileMenu() {
  const [isOpened, setIsOpened] = useState(false)
  const [activeLang, setActiveLang] = useState('en')
  const bodyRef = useRef(null)
  const menuRef = useRef(null)

  useBodyClass(isOpened ? 'no-scroll' : '')

  // 使用自定義鉤子來處理點擊外部事件
  useClickOutside(
    bodyRef,
    () => {
      setIsOpened(false)
    },
    [menuRef] // 忽略menuRef的點擊
  )

  const toggleMenu = () => {
    setIsOpened((prev) => !prev)
  }

  const switchLang = (lang) => {
    setActiveLang(lang)
  }

  return (
    <>
      {/* 手機列表按鈕 */}
      <button className={`${S.menu} ${isOpened ? S.open : ''}`} onClick={toggleMenu} ref={menuRef}>
        <span></span>
      </button>
      {/* 手機列表 */}
      <div className={`${S.body} ${isOpened ? S.bodyOpen : ''}`} ref={bodyRef}>
        {/* 抬頭 */}
        <div className={S.top}>
          <Logo type="crypto" color="black" />
        </div>
        <div className={S.inner}>
          {/* 登入 & 登出 */}
          <div className={S.service}>
            <p className={S.title}>User</p>
            <ul>
              <li>
                <Link to="/sign-in">
                  <img src={signInSvg} />
                  <span>Sign In</span>
                </Link>
              </li>
              <li>
                <Link to="/sign-up">
                  <img src={signUpSvg} />
                  <span>Sign Up</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* 公司資訊 */}
          <ul className={S.info}>
            <li>
              <Link to="about-us">
                <img src={aboutUsSvg} />
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link to="contact">
                <img src={contactsSvg} />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
          {/* 語言 */}
          <div className={S.language}>
            <button>
              <img src={globeSvg} />
              <span>{activeLang}</span>
            </button>
            <ul>
              <li>
                <button onClick={() => switchLang('en')}>
                  <img src={usSvg} />
                  <p className={activeLang === 'en' ? S.active : ''}>English</p>
                </button>
              </li>
              <li>
                <button onClick={() => switchLang('ru')}>
                  <img src={ruSvg} />
                  <p className={activeLang === 'ru' ? S.active : ''}>Русский</p>
                </button>
              </li>
              <li>
                <button onClick={() => switchLang('et')}>
                  <img src={eeSvg} />
                  <p className={activeLang === 'et' ? S.active : ''}>Eesti</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* MKM圖 */}
        <div className={S.mkm}>
          <img src={mkmSvg} />
        </div>
      </div>
      <div className={`${S.backdrop} ${isOpened ? S.openBack : ''}`}></div>
    </>
  )
}

export default MobileMenu
