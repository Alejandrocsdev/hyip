// 模組樣式
import S from './style.module.css'
// json檔
import flagsData from '../Flag/flags.json'
// 組件
import Flag from '../Flag'
// 鉤子函式
import { forwardRef } from 'react';

// 首頁
const Flags = forwardRef(({ show }, ref) => { // Forward ref
  return (
    <ul ref={ref} className={`${S.main} ${show ? S.show : ''}`}> {/* Apply the passed class */}
      <li>
        <div className={S.flag}>
          <Flag countryCode="lv" />
        </div>
        <span className={S.country}>Latvia (Latvija)</span>
        <span className={S.code}>+371</span>
      </li>
      <div className={S.separator}></div>
      {flagsData.flags.map(({ countryCode, dialingCode, englishName, originalName }) => (
        <li key={countryCode}>
          <div className={S.flag}>
            <Flag countryCode={countryCode} />
          </div>
          <span className={S.country}>
            {englishName}
            {originalName ? ` (${originalName})` : ''}
          </span>
          <span className={S.code}>+{dialingCode}</span>
        </li>
      ))}
    </ul>
  )
});

export default Flags
