// 模組樣式
import S from './style.module.css'
// json檔
import flagsData from '../Flag/flags.json'
// 組件
import Flag from '../Flag'

// 首頁
function Flags({ countryCode }) {
  const { exampleNumber } = useExampleNumber('vn')
  return (
    <ul className={S.main}>
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
}

export default Flags
