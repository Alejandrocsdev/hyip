// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// 自訂函式 (custom function)
import useBodyScroll from '../../../hooks/useBodyScroll'
import useClickOutside from '../../../hooks/useClickOutside'
// 圖檔 (image)
import signInSvg from '../../../assets/img/icon/sign-in.svg'
import signUpSvg from '../../../assets/img/icon/sign-up.svg'
import aboutUsSvg from '../../../assets/img/icon/about-us.svg'
import contactsSvg from '../../../assets/img/icon/contacts.svg'
import globeSvg from '../../../assets/img/icon/globe.svg'
import mkmSvg from '../../../assets/img/organization/mkm.svg'
// 組件 (component)
import Logo from '../../../components/Logo'
import LangFlag from '../../../components/LangFlag'

// 選單組件
function MobMenu({ onBackdropToggle }) {
  const [isOpened, setIsOpened] = useState(false)
  const containerRef = useRef(null)
  const menuRef = useRef(null)

  const { i18n } = useTranslation()
  const activeLang = i18n.language

  const toggleMenu = () => setIsOpened((prev) => !prev)

  const switchLang = (lang) =>  i18n.changeLanguage(lang)

  useBodyScroll(isOpened)

  useClickOutside(containerRef, () => setIsOpened(false), menuRef)

  useEffect(() => onBackdropToggle(isOpened), [isOpened, onBackdropToggle])

  const handleLinkClick = () => setIsOpened(false)

  return (
    <div className={S.container} ref={containerRef} onClick={toggleMenu}>
      {/* 手機列表按鈕 */}
      <button className={`${S.menuBtn} ${isOpened ? S.btnOpen : ''}`} ref={menuRef}>
        <span></span>
      </button>
      {/* 手機列表 */}
      <div
        className={`${S.menuBody} ${isOpened ? S.bodyOpen : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 上方 */}
        <div className={S.top}>
          <Logo type="crypto" color="black" onClick={handleLinkClick} />
        </div>
        <div className={S.inner}>
          {/* 登入 & 登出 */}
          <div className={S.service}>
            <p className={S.title}>User</p>
            <ul>
              <li>
              <Link to="https://client.newlean14.store/sign-in" target="_blank">
                  <img src={signInSvg} />
                  <span>Sign In</span>
                </Link>
              </li>
              <li>
              <Link to="https://client.newlean14.store/sign-up" target="_blank">
                  <img src={signUpSvg} />
                  <span>Sign Up</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* 公司資訊 */}
          <ul className={S.info}>
            <li>
              <Link to="about-us" onClick={handleLinkClick}>
                <img src={aboutUsSvg} />
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link to="contacts" onClick={handleLinkClick}>
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
                  <LangFlag className={S.langFlag} type="us" />
                  <p className={activeLang === 'en' ? S.langActive : ''}>English</p>
                </button>
              </li>
              <li>
                <button onClick={() => switchLang('ru')}>
                  <LangFlag className={S.langFlag} type="ru" />
                  <p className={activeLang === 'ru' ? S.langActive : ''}>Русский</p>
                </button>
              </li>
              <li>
                <button onClick={() => switchLang('et')}>
                  <LangFlag className={S.langFlag} type="ee" />
                  <p className={activeLang === 'et' ? S.langActive : ''}>Eesti</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* 下方 */}
        <div className={S.bottom}>
          <img src={mkmSvg} />
        </div>
      </div>
    </div>
  )
}

export default MobMenu
