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
import Flags from '../../../../components/Flags'
import AngleDownSvg from '../../../../components/Svg/AngleDownSvg'

// 首頁
function CodeDrop() {
  const { countryCode } = useCountryCode()
  const countryInfo = useCountryData(countryCode)
  const dialingCode = countryInfo ? countryInfo.dialingCode : ''
  const exampleNumber = countryInfo ? countryInfo.exampleNumber : ''

  const [showFlags, setShowFlags] = useState(false)
  const flagsRef = useRef(null); // Create a ref for Flags component
  const containerRef = useRef(null); // Create a ref for codeContainer

  const toggleFlags = () => {
    setShowFlags((prev) => !prev)
  }

    // Handle clicks outside the Flags component
    useClickOutside(containerRef, () => setShowFlags(false), [flagsRef]);

    // Apply 'no-scroll' class when flags are shown
    useBodyClass(showFlags ? 'no-scroll' : '');

  return (
    <main className={S.main}>
      <div className={S.codeContainer} onClick={toggleFlags} ref={containerRef}>
        <div className={S.selected}>
          <Flag countryCode={countryCode || 'lv'} />
          <div className={S.code}>+{dialingCode || '66'}</div>
          <AngleDownSvg className={`${S.arrow} ${showFlags ? S.rotate : ''}`} stroke="#3e345c" />
        </div>
        <Flags ref={flagsRef} show={showFlags} /> {/* Pass the ref and show class */}
      </div>
      <input type="text" placeholder={exampleNumber || '21 234 567'} />
    </main>
  )
}

export default CodeDrop
