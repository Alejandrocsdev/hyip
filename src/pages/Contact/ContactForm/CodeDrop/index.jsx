// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useState, useRef } from 'react'
import useBodyScroll from '../../../../hooks/useBodyScroll.jsx'
import useClickOutside from '../../../../hooks/useClickOutside.jsx'
import useCountryCode from '../../../../hooks/useCountryCode.jsx'
import useCountryData from '../../../../hooks/useCountryData.jsx'
// 組件 (component)
import Flag from '../../../../components/Flag'
import PhoneList from './PhoneList'
import FormField from '../../../../components/FormField'
import AngleDownSvg from '../../../../components/Svg/AngleDownSvg'

import { useFormContext } from 'react-hook-form'; // Import useFormContext

// 下拉選單: 國碼
function CodeDrop() {
  const { setFocus, control } = useFormContext()

  const { countryCode, setCountryCode } = useCountryCode()
  const countryData = useCountryData(countryCode)
  const dialingCode = countryData ? countryData.dialingCode : ''
  const exampleNumber = countryData ? countryData.exampleNumber : ''

  const [showList, setShowList] = useState(false)
  const codeBtnRef = useRef(null)
  // const inputRef = useRef(null)

  const toggleList = () => {
    setShowList((prev) => !prev)
  }

  const handleSelect = (newCountryCode) => {
    setCountryCode(newCountryCode)
    setShowList(false)
    setFocus('phone')
  }

  useClickOutside(codeBtnRef, () => setShowList(false))

  useBodyScroll(showList)

  return (
    <main className={S.main}>
      <div className={S.codeBtn} onClick={toggleList} ref={codeBtnRef}>
        <div className={S.selected}>
          <Flag countryCode={countryCode || 'lv'} />
          <div className={S.code}>+{dialingCode || '66'}</div>
          <AngleDownSvg className={`${S.arrow} ${showList ? S.rotate : ''}`} />
        </div>
        <PhoneList show={showList} selected={countryCode || 'lv'} onSelect={handleSelect} />
      </div>
      <FormField
        name="phone"
        type="tel"
        countryCode={countryCode}
        placeholder={exampleNumber || '21 234 567'}
        control={control}
        // ref={inputRef}
      />
    </main>
  )
}

export default CodeDrop
