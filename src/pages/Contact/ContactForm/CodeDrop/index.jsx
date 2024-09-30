// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useState, useRef } from 'react'
import { useFormContext } from 'react-hook-form'
// 自訂函式 (custom function)
import useBodyScroll from '../../../../hooks/useBodyScroll.jsx'
import useClickOutside from '../../../../hooks/useClickOutside.jsx'
import useCountryCode from '../../../../hooks/useCountryCode.jsx'
import useCountryData from '../../../../hooks/useCountryData.jsx'
import { useShowList } from '../../../../context/useShowList'
// 組件 (component)
import Flag from '../../../../components/Flag'
import PhoneList from './PhoneList'
import FormField from '../../../../components/FormField'
import AngleDownSvg from '../../../../components/Svg/AngleDownSvg'

// 下拉選單: 國碼
function CodeDrop() {
  const { setFocus, control } = useFormContext()

  const { countryCode, setCountryCode } = useCountryCode()
  const countryData = useCountryData(countryCode) || {}
  const { dialingCode = '66', exampleNumber = '21 234 567' } = countryData

  // const [showList, setShowList] = useState(false)
  const { showList, setShowList } = useShowList()
  const codeBtnRef = useRef(null)

  const toggleList = () => {
    // setShowList((prev) => !prev)
    setShowList(!showList)
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
          <div className={S.code}>+{dialingCode}</div>
          <AngleDownSvg className={`${S.arrow} ${showList ? S.rotate : ''}`} />
        </div>
        <PhoneList show={showList} selected={countryCode || 'lv'} onSelect={handleSelect} />
      </div>
      <FormField
        name="phone"
        type="tel"
        countryCode={countryCode}
        placeholder={exampleNumber}
        control={control}
      />
    </main>
  )
}

export default CodeDrop
