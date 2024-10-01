// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { Link } from 'react-router-dom'
import { useState } from 'react'
// 組件 (component)
import Logo from '../../components/Logo'
import Anchor from '../../components/Anchor'
import LangDrop from './LangDrop'
import MobMenu from './MobMenu'
// 自訂函式 (custom function)
import { useShowList } from '../../context/useShowList'

import { useTranslation } from 'react-i18next'


// 頁首組件
function Header() {
  const [hasBackdrop, setHasBackdrop] = useState(false)
  const { showList } = useShowList()

  const { t } = useTranslation()

  return (
    <header
      className={`${S.header} ${hasBackdrop ? S.showBackdrop : ''} ${showList ? S.hideHeader : ''}`}
    >
      <nav className={S.nav}>
        {/* Logo */}
        <Logo site="crypto" color="white" />
        {/* 電腦版: 選單 */}
        <div className={S.menu}>
          {/* 登入 */}
          <Anchor style={S.signIn} ext="https://client.newlean14.store/sign-in">
          {t('signIn')}
          </Anchor>
          {/* 語言: 下拉選單 */}
          <LangDrop onBackdropToggle={setHasBackdrop} />
          {/* 手機版: 選單 */}
          <MobMenu onBackdropToggle={setHasBackdrop} />
        </div>
      </nav>
    </header>
  )
}

export default Header
