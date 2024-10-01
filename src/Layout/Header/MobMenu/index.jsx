// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useTranslation } from 'react-i18next'
import { useState, useRef, useEffect } from 'react'
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
import Anchor from '../../../components/Anchor'
import LangSwitch from '../../../components/LangSwitch'

// 選單組件
function MobMenu({ onBackdropToggle }) {
  // 語言翻譯 / 語言設定
  const { t, i18n } = useTranslation()
  // 當前語言
  const currentLang = i18n.language

  // 狀態控制
  const [isOpened, setIsOpened] = useState(false)
  const states = { isOpened, setIsOpened }
  // 元素引用
  const containerRef = useRef(null)
  const menuRef = useRef(null)

  const toggleMenu = () => setIsOpened((prev) => !prev)

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
          <Logo site="crypto" color="black" onClick={handleLinkClick} />
        </div>
        <div className={S.inner}>
          {/* 登入 & 登出 */}
          <div className={S.service}>
            <p className={S.title}>{t('user')}</p>
            <ul>
              <li>
                <Anchor ext="https://client.newlean14.store/sign-in">
                  <img src={signInSvg} />
                  <span>{t('signIn')}</span>
                </Anchor>
              </li>
              <li>
                <Anchor ext="https://client.newlean14.store/sign-up">
                  <img src={signUpSvg} />
                  <span>{t('signUp')}</span>
                </Anchor>
              </li>
            </ul>
          </div>
          {/* 公司資訊 */}
          <ul className={S.info}>
            <li>
              <Anchor int="/about-us" onClick={handleLinkClick}>
                <img src={aboutUsSvg} />
                <span>{t('aboutUs')}</span>
              </Anchor>
            </li>
            <li>
              <Anchor int="/contacts" onClick={handleLinkClick}>
                <img src={contactsSvg} />
                <span>{t('contacts')}</span>
              </Anchor>
            </li>
          </ul>
          {/* 語言 */}
          <div className={S.language}>
            <button>
              <img src={globeSvg} />
              <span>{currentLang}</span>
            </button>
            <LangSwitch type="mob" states={states} currentLang={currentLang} />
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
