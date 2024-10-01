// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useTranslation } from 'react-i18next'
import { useState, useRef, useEffect } from 'react'
// 自訂函式 (custom function)
import useBodyScroll from '../../../hooks/useBodyScroll'
import useClickOutside from '../../../hooks/useClickOutside'
// 組件 (component)
import LangSwitch from '../../../components/LangSwitch'
import AngleDownSvg from '../../../components/Svg/AngleDownSvg'

// 選單組件
function LangDrop({ onBackdropToggle }) {
  // 語言設定
  const { t, i18n } = useTranslation()
  // 當前語言
  const currentLang = i18n.language

  const [isOpened, setIsOpened] = useState(false)
  const states = { isOpened, setIsOpened }
  const containerRef = useRef(null)

  const toggleDropdown = () => setIsOpened((prev) => !prev)

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
          <span>{currentLang}</span>
          <AngleDownSvg className={`${S.angleDown} ${isOpened ? S.arrowRotate : ''}`} />
        </button>
        {/* 語言列表 */}
        <LangSwitch type="pc" states={states} currentLang={currentLang} />
      </div>
    </>
  )
}

export default LangDrop
