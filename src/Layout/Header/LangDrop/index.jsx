// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { useState, useRef } from 'react'
import useBodyClass from '../../../hooks/useBodyClass'
import useClickOutside from '../../../hooks/useClickOutside'
// 圖檔
import usSvg from '../../../assets/img/flag/us.svg'
import ruSvg from '../../../assets/img/flag/ru.svg'
import eeSvg from '../../../assets/img/flag/ee.svg'
import angleDownSvg from '../../../assets/img/element/angle-down.svg'
import triangleSvg from '../../../assets/img/element/triangle.svg'

// 選單組件
function LangDrop() {
  const [isOpened, setIsOpened] = useState(false)
  const [activeLang, setActiveLang] = useState('en')
  const dropdownRef = useRef(null)

  useBodyClass(isOpened ? 'no-scroll' : '')

  const toggleDropdown = () => {
    setIsOpened((prev) => !prev)
  }

  const closeDropdown = () => {
    setIsOpened(false)
  }

  useClickOutside(dropdownRef, () => {
    if (isOpened) {
      closeDropdown()
    }
  })

  const switchLang = (lang) => {
    setActiveLang(lang)
  }

  return (
    <>
      <main className={S.container} ref={dropdownRef} onClick={toggleDropdown}>
        {/* 語言按鈕 */}
        <button>
          <span>{activeLang}</span>
          <img className={`${S.angleDown} ${isOpened ? S.rotate : ''}`} src={angleDownSvg} />
        </button>
        {/* 語言列表 */}
        <ul className={`${isOpened ? S.showDrop : ''}`} onClick={(e) => e.stopPropagation()}>
          <li>
            <button onClick={() => switchLang('en')}>
              <img src={usSvg} />
              <span className={activeLang === 'en' ? S.active : ''}>English</span>
            </button>
          </li>
          <li>
            <button onClick={() => switchLang('ru')}>
              <img src={ruSvg} />
              <span className={activeLang === 'ru' ? S.active : ''}>Русский</span>
            </button>
          </li>
          <li>
            <button onClick={() => switchLang('et')}>
              <img src={eeSvg} />
              <span className={activeLang === 'et' ? S.active : ''}>Eesti</span>
            </button>
          </li>
          <img className={S.triangle} src={triangleSvg} />
        </ul>
        {/* 詼諧背景 */}
        <div className={`${S.backdrop} ${isOpened ? S.showBack : ''}`}></div>
      </main>
    </>
  )
}

export default LangDrop
