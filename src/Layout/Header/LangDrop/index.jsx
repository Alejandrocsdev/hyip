// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useState, useRef, useEffect } from 'react'
// 自訂函式 (custom function)
import useBodyScroll from '../../../hooks/useBodyScroll'
import useClickOutside from '../../../hooks/useClickOutside'
// 組件 (component)
import AngleDownSvg from '../../../components/Svg/AngleDownSvg'
import TriangleSvg from '../../../components/Svg/TriangleSvg'
import LangFlag from '../../../components/LangFlag'

// 選單組件
function LangDrop({ onBackdropToggle }) {
  const [isOpened, setIsOpened] = useState(false)
  const [activeLang, setActiveLang] = useState('en')
  const containerRef = useRef(null)

  const toggleDropdown = () => setIsOpened((prev) => !prev)

  const switchLang = (lang) => setActiveLang(lang)

  useBodyScroll(isOpened)

  useClickOutside(containerRef, () => {
    if (isOpened) toggleDropdown()
  })

  useEffect(() => onBackdropToggle(isOpened), [isOpened, onBackdropToggle])

  return (
    <>
      <div className={S.container} ref={containerRef} onClick={toggleDropdown}>
        {/* 語言按鈕 */}
        <button className={S.langBtn}>
          <span>{activeLang}</span>
          <AngleDownSvg className={`${S.angleDown} ${isOpened ? S.arrowRotate : ''}`} />
        </button>
        {/* 語言列表 */}
        <ul
          className={`${S.langList} ${isOpened ? S.showList : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <li>
            <button onClick={() => switchLang('en')}>
              <LangFlag className={S.langFlag} type="us" />
              <span className={activeLang === 'en' ? S.langActive : ''}>English</span>
            </button>
          </li>
          <li>
            <button onClick={() => switchLang('ru')}>
              <LangFlag className={S.langFlag} type="ru" />
              <span className={activeLang === 'ru' ? S.langActive : ''}>Русский</span>
            </button>
          </li>
          <li>
            <button onClick={() => switchLang('et')}>
              <LangFlag className={S.langFlag} type="ee" />
              <span className={activeLang === 'et' ? S.langActive : ''}>Eesti</span>
            </button>
          </li>
          <TriangleSvg className={S.triangle} />
        </ul>
      </div>
    </>
  )
}

export default LangDrop
