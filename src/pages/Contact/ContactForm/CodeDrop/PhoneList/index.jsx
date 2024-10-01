// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
// 資料 (json)
import flagsData from '../../../../../assets/flags/flags.json'
// 組件 (component)
import Flag from '../../../../../components/Flag'
import CrossSvg from '../../../../../components/Svg/CrossSvg'

// 各國手機資訊列表
function PhoneList({ show, selected, onSelect }) {
  // 語言
  const { t } = useTranslation()

  const itemRef = useRef(null)

  useEffect(() => {
    if (show && itemRef.current) {
      itemRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'center'
      })
    }
  }, [show])

  return (
    <>
      <div className={`${S.mobListTitle} ${show ? S.showMobListTitle : ''}`}>
        {t('selectCode')}
        <span>
          <CrossSvg />
        </span>
      </div>
      <ul className={`${S.main} ${show ? S.show : ''}`}>
        {/* 預設國家手機資訊 */}
        <li
          className={selected === 'lv' ? S.selected : ''}
          onClick={(e) => {
            e.stopPropagation()
            onSelect('lv')
          }}
        >
          <div className={S.flag}>
            <Flag countryCode="lv" />
          </div>
          <span className={S.country}>Latvia (Latvija)</span>
          <span className={S.code}>+371</span>
        </li>
        {/* 分隔線 */}
        <div className={S.separator}></div>
        {/* 各國手機資訊 */}
        {flagsData.flags.map(({ countryCode, dialingCode, englishName, originalName }) => (
          <li
            key={countryCode}
            ref={countryCode === selected ? itemRef : null}
            className={countryCode === selected ? S.selected : ''}
            onClick={(e) => {
              e.stopPropagation()
              onSelect(countryCode)
            }}
          >
            {/* 國旗 */}
            <div className={S.flag}>
              <Flag countryCode={countryCode} />
            </div>
            {/* 國家名稱 */}
            <span className={S.country}>
              {englishName}
              {originalName ? ` (${originalName})` : ''}
            </span>
            {/* 國碼 */}
            <span className={S.code}>+{dialingCode}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PhoneList
