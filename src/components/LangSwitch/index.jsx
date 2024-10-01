// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useTranslation } from 'react-i18next'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
// 組件 (component)
import LangFlag from '../LangFlag'
import TriangleSvg from '../Svg/TriangleSvg'

function LangSwitch({ type, states, currentLang }) {
  // 語言翻譯 / 語言設定
  const { i18n } = useTranslation()
  // 路徑語言
  const { lang } = useParams()
  // 導航功能 / 路徑功能
  const navigate = useNavigate()
  const location = useLocation()

  const switchLang = (newLang) => {
    i18n.changeLanguage(newLang)
    const currentPath = location.pathname
    const newPath = currentPath.replace(`/${lang}`, `/${newLang}`)
    navigate(newPath)
    // 切換語言即關閉選單
    setIsOpened(false)
  }

  // 二語言選單狀態控制
  const { isOpened, setIsOpened } = states

  // MobMenu: (無動畫)
  const mobMenuStyle = S.MobMenu

  // LangDrop: (動畫: smooth open)
  const langDropStyle = `${S.LangDrop} ${isOpened ? S.showList : ''}`
  // 避免點擊 LangDrop 選單外側關閉選單
  const langDropClick = type === 'pc' ? (e) => e.stopPropagation() : undefined

  return (
    <ul className={type === 'mob' ? mobMenuStyle : langDropStyle} onClick={langDropClick}>
      <li>
        <button onClick={() => switchLang('en')}>
          <LangFlag className={S.langFlag} type="us" />
          <span className={currentLang === 'en' ? S.active : ''}>English</span>
        </button>
      </li>
      <li>
        <button onClick={() => switchLang('ru')}>
          <LangFlag className={S.langFlag} type="ru" />
          <span className={currentLang === 'ru' ? S.active : ''}>Русский</span>
        </button>
      </li>
      <li>
        <button onClick={() => switchLang('et')}>
          <LangFlag className={S.langFlag} type="ee" />
          <span className={currentLang === 'et' ? S.active : ''}>Eesti</span>
        </button>
      </li>
      {/* 延伸動畫選單三角形圖案 */}
      {type === 'pc' && <TriangleSvg className={S.triangle} />}
    </ul>
  )
}

export default LangSwitch
