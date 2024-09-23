// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
// 圖檔
import logo_dark_svg from '../../assets/img/logo/logo-dark.svg'
import sign_in_svg from '../../assets/img/icon/sign-in.svg'
import sign_up_svg from '../../assets/img/icon/sign-up.svg'
import about_us_svg from '../../assets/img/icon/about_us.svg'
import contacts_svg from '../../assets/img/icon/contacts.svg'
import globe_svg from '../../assets/img/icon/globe.svg'
import us_svg from '../../assets/img/flag/us.svg'
import ru_svg from '../../assets/img/flag/ru.svg'
import ee_svg from '../../assets/img/flag/ee.svg'
import mkm_svg from '../../assets/img/organization/Estonian_Ministry_of_Economic_Affairs_and_Communications.svg'
// 選單組件
function MobileMenu() {
  const [isOpened, setIsOpened] = useState(false)
  const [activeLang, setActiveLang] = useState('en')

  const bodyRef = useRef(null)

  const toggleMenu = () => {
    setIsOpened((prev) => !prev)

    if (!isOpened) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (bodyRef.current && !bodyRef.current.contains(event.target)) {
        if (!event.target.closest(`.${S.menu}`)) {
          setIsOpened(false)
          document.body.classList.remove('no-scroll')
        }
      }
    }

    if (isOpened) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const switchLang = (lang) => {
    setActiveLang(lang)
  }

  return (
    <>
      {/* 手機列表按鈕 */}
      <button className={`${S.menu} ${isOpened ? S.open : ''}`} onClick={toggleMenu}>
        <span></span>
      </button>
      {/* 手機列表 */}
      <div className={`${S.body} ${isOpened ? S.bodyOpen : ''}`} ref={bodyRef}>
        {/* 抬頭 */}
        <div className={S.top}>
          <Link className={S.logo} to="/">
            <img src={logo_dark_svg} />
            <span>CRYPTO</span>
          </Link>
        </div>
        <div className={S.inner}>
          {/* 登入 & 登出 */}
          <div className={S.service}>
            <p className={S.title}>User</p>
            <ul>
              <li>
                <Link to="/sign-in">
                  <img src={sign_in_svg} />
                  <span>Sign In</span>
                </Link>
              </li>
              <li>
                <Link to="/sign-up">
                  <img src={sign_up_svg} />
                  <span>Sign Up</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* 公司資訊 */}
          <ul className={S.info}>
            <li>
              <Link to="about-us">
                <img src={about_us_svg} />
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link to="contact">
                <img src={contacts_svg} />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
          {/* 語言 */}
          <div className={S.language}>
            <button>
              <img src={globe_svg} />
              <span>{activeLang}</span>
            </button>
            <ul>
              <li>
                <button onClick={() => switchLang('en')}>
                  <img src={us_svg} />
                  <p className={activeLang === 'en' ? S.active : ''}>English</p>
                </button>
              </li>
              <li>
                <button onClick={() => switchLang('ru')}>
                  <img src={ru_svg} />
                  <p className={activeLang === 'ru' ? S.active : ''}>Русский</p>
                </button>
              </li>
              <li>
                <button onClick={() => switchLang('et')}>
                  <img src={ee_svg} />
                  <p className={activeLang === 'et' ? S.active : ''}>Eesti</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* MKM圖 */}
        <div className={S.mkm}>
            <img src={mkm_svg} />
          </div>
      </div>
      <div className={`${S.backdrop} ${isOpened ? S.openBack : ''}`}>

      </div>
    </>
  )
}

export default MobileMenu
