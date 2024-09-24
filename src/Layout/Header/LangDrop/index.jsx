// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { useState, useEffect, useRef } from 'react'
// 圖檔
import us_svg from '../../../assets/img/flag/us.svg'
import ru_svg from '../../../assets/img/flag/ru.svg'
import ee_svg from '../../../assets/img/flag/ee.svg'
import angle_down_svg from '../../../assets/img/element/angle-down.svg'
import triangle_svg from '../../../assets/img/element/triangle.svg'

// 選單組件
function LangDrop() {
  const [isOpened, setIsOpened] = useState(false)
  const [activeLang, setActiveLang] = useState('en')

  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setIsOpened((prev) => !prev)

    if (!isOpened) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        console.log('test')
        console.log('isOpened: ', isOpened)
        setIsOpened(false)
        document.body.classList.remove('no-scroll')
      }
    }

    // if (isOpened) {
    document.addEventListener('mousedown', handleClickOutside)
    // }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const switchLang = (lang) => {
    setActiveLang(lang)
  }

  return (
    <>
      <main className={S.container} ref={dropdownRef} onClick={toggleDropdown}>
        {/* 語言按鈕 */}
        <button>
          <span>{activeLang}</span>
          <img className={`${S.angleDown} ${isOpened ? S.rotate : ''}`} src={angle_down_svg} />
        </button>
        {/* 語言列表 */}
        <ul className={`${isOpened ? S.showDrop : ''}`} onClick={(e) => e.stopPropagation()}>
          <li>
            <button onClick={() => switchLang('en')}>
              <img src={us_svg} />
              <span className={activeLang === 'en' ? S.active : ''}>English</span>
            </button>
          </li>
          <li>
            <button onClick={() => switchLang('ru')}>
              <img src={ru_svg} />
              <span className={activeLang === 'ru' ? S.active : ''}>Русский</span>
            </button>
          </li>
          <li>
            <button onClick={() => switchLang('et')}>
              <img src={ee_svg} />
              <span className={activeLang === 'et' ? S.active : ''}>Eesti</span>
            </button>
          </li>
          <img className={S.triangle} src={triangle_svg} />
        </ul>
        {/* 詼諧背景 */}
        <div className={`${S.backdrop} ${isOpened ? S.showBack : ''}`}></div>
      </main>
    </>
  )
}

export default LangDrop
