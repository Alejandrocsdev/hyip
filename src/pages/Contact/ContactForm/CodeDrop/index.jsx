// 模組樣式
import S from './style.module.css'
// 鉤子函式
import useCountryCode from '../../../../hooks/useCountryCode.jsx'
import useCountryData from '../../../../hooks/useCountryData.jsx'
// 組件
import Flag from '../../../../components/Flag'
import Flags from '../../../../components/Flags'
import AngleDownSvg from '../../../../components/Svg/AngleDownSvg'

// 首頁
function CodeDrop() {
  const { countryCode, isGeolocationAvailable, isGeolocationEnabled } = useCountryCode()
  const countryInfo = useCountryData(countryCode)
  const dialingCode = countryInfo ? countryInfo.dialingCode : ''
  return (
    <main className={S.main}>
      <div className={S.codeContainer}>
        <div className={S.selected}>
          <Flag countryCode={countryCode || 'lv'} />
          <div className={S.code}>+{dialingCode || '66'}</div>
          <AngleDownSvg className={S.arrow} stroke="#3e345c" />
        </div>
        {/* <Flags /> */}
      </div>
      <input type="text" />
    </main>
  )
}

export default CodeDrop
