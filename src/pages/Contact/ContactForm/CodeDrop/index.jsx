// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { useState, useRef } from 'react' // Import useState
import useBodyClass from '../../../../hooks/useBodyClass.jsx'
import useClickOutside from '../../../../hooks/useClickOutside.jsx'
import useCountryCode from '../../../../hooks/useCountryCode.jsx'
import useCountryData from '../../../../hooks/useCountryData.jsx'
// 組件
import Flag from '../../../../components/Flag'
import PhoneList from './PhoneList'
import AngleDownSvg from '../../../../components/Svg/AngleDownSvg'

// 首頁
function CodeDrop() {
  const { countryCode } = useCountryCode()
  const countryInfo = useCountryData(countryCode)
  const dialingCode = countryInfo ? countryInfo.dialingCode : ''
  const exampleNumber = countryInfo ? countryInfo.exampleNumber : ''

  const [showFlags, setShowFlags] = useState(false)
  const flagsRef = useRef(null)
  const containerRef = useRef(null)

  const toggleFlags = () => {
    setShowFlags((prev) => !prev)
  }

  useClickOutside(containerRef, () => setShowFlags(false), [flagsRef])

  useBodyClass(showFlags ? 'no-scroll' : '')

  return (
    <main className={S.main}>
      <div className={S.codeContainer} onClick={toggleFlags} ref={containerRef}>
        <div className={S.selected}>
          <Flag countryCode={countryCode || 'lv'} />
          <div className={S.code}>+{dialingCode || '66'}</div>
          <AngleDownSvg className={`${S.arrow} ${showFlags ? S.rotate : ''}`} />
        </div>
        <PhoneList ref={flagsRef} show={showFlags} />
      </div>
      <input type="text" placeholder={exampleNumber || '21 234 567'} />
    </main>
  )
}

export default CodeDrop
